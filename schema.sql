CREATE DATABASE hismoni;
USE hismoni;

CREATE TABLE newmoni (
  id integer PRIMARY KEY AUTO_INCREMENT,
  building VARCHAR(100) NOT NULL,
  state VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  builtin int,
  builtby VARCHAR(100) NOT NULL,
  imgurl VARCHAR(500) NOT NULL,
);

INSERT INTO newmoni 
VALUES 
('Golghar', 'Bihar', 'Patna', '1777','British govt', 'www,skdjfhkj'),
