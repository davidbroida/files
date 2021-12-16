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


-- When to use VARCHAR instead of TEXT?

-- ____________________________________________________________________


CREATE TABLE region (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL,
    preferred_region VARCHAR(20)
);

CREATE TABLE categories(
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users,
    region_id INTEGER REFERENCES region,
    category_id INTEGER REFERENCES categories,
    location VARCHAR(20),
    title TEXT,
    post TEXT
);

INSERT INTO region (name)
VALUES
('Maine'),
('Boston'),
('New York'),
('California'),
('Florida');

INSERT INTO users (name, preferred_region)
VALUES
('Bob', 'Boston'),
('Jim', 'Maine'),
('AnneMarie', 'New York'),
('John', 'California'),
('Carol', 'Florida');

INSERT INTO categories (name)
VALUES
('Sports'),
('Cars'),
('Outdoors'),
('Appliances'),
('Gardening'),
('Electronics'),
('Clothing');

INSERT INTO posts (user_id, region_id, category_id, location, title, post)
VALUES
(1,3,5,'111 Frost Hill Rd.','Audi A4 For Sale','Audi for sale in good condition. Price is $9000 OBO. See pictures for more details.');


-- ___________________________________________________________


CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) UNIQUE,
    rank INTEGER UNIQUE
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE referees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES players
);

CREATE TABLE seasons (
    id SERIAL PRIMARY KEY,
    year INTEGER,
    start_date INTEGER,
    end_date INTEGER
);

CREATE TABLE matches (
    id SERIAL PRIMARY KEY,
    team1_id INTEGER REFERENCES teams,
    team2_id INTEGER REFERENCES teams
);

CREATE TABLE rankings (
    id SERIAL PRIMARY KEY,
    team_name INTEGER REFERENCES teams(name),
    league_rank INTEGER REFERENCES teams(rank)
);


INSERT INTO teams (name, rank)
VALUES
('Arsenal', 1),
('Manchester United', 2),
('Tottenham', 3),
('Real Madrid', 4),
('Liverpool', 5),
('Chelsea', 6);


!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! HELP !!!!!!!!!!!!!!!!!!!!!!
-- ERROR:  there is no unique constraint matching given keys for referenced table "teams"
