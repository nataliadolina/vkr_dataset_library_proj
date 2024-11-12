from django.db import connection


def get_datasets_with_status_and_substatus_sql():
    """
    Выполняет SQL запрос для получения информации о датасетах, статусах и сабстатусах.
    """
    with connection.cursor() as cursor:
        cursor.execute("""
            SELECT 
                d.id AS id,
                d.name AS name,
                d.description AS description,
                d.image AS image,
                d.time_created AS time_created,
                s.name AS status_name,
                group_concat(ss.name) AS substatus_name
            FROM 
                dataset_library_dataset AS d
            LEFT JOIN 
                dataset_library_status AS s ON d.status_id = s.id
            LEFT JOIN 
                dataset_library_dataset_substatus AS dss ON d.id = dss.dataset_id_id
            LEFT JOIN 
                dataset_library_substatus AS ss ON dss.substatus_id_id = ss.id
            GROUP BY
                d.id, d.name, d.description, d.image, d.time_created, s.name
            ORDER BY 
                d.time_created DESC;
        """)
        desc = cursor.description
        data = cursor.fetchall()
        return [
            dict(zip([col[0] for col in desc], [el if ind != len(row)-1 or not el else el.split(",") for ind, el in enumerate(row)]))
            for row in data
        ]
