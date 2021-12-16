CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) UNIQUE NOT NULL,
    specialty TEXT NOT NULL
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name VARCHAR(15) NOT NULL,
    age INTEGER NOT NULL
);

CREATE TABLE diseases(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30), 
    description TEXT
);

CREATE TABLE visits (
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER REFERENCES doctors,
    patient_id INTEGER REFERENCES patients,
    date TEXT NOT NULL
);


CREATE TABLE diagnoses(
    id SERIAL PRIMARY KEY,
    visit_id INTEGER REFERENCES visits,
    disease_id INTEGER REFERENCES diseases,
    notes TEXT
);



INSERT INTO doctors (name, specialty)
VALUES
('Dr. John', 'Psychology'),
('Dr. David', 'Orthopedics'),
('Dr. Anne', 'Speech Therapy'),
('Dr. Gabby', 'Veteranary'),
('Dr. Lilly', 'Dentistry');

INSERT INTO patients (name, age)
VALUES
('Chris Crazy', 90),
('Ben Bones', 30),
('Anne Lisp', 5),
('Willy Woof', 10),
('Tara Toothy', 12);


INSERT INTO diseases (name)
VALUES
('Memory Loss'),
('Broken Bone'),
('Lisp'),
('Skin Disease'),
('Heart Disease'),
('Cancer'),
('Toothache');

INSERT INTO visits (doctor_id, patient_id)
VALUES
(1,2),
(3,4),
(4,3),
(2,1);

INSERT INTO diagnoses(visit_id, disease_id)
VALUES
(1, 5),
(2, 3),
(3, 4);
