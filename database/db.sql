

// creamos la tabla users si no existe

create TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


// agregamos usuarios de ejemplo
INSERT INTO users (name, email) 
VALUES ('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Bob Johnson', 'bob.johnson@example.com');

// realizamos una consulta para obtener todos los usuarios
SELECT * FROM users;