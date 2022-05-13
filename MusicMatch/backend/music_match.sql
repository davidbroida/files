\echo 'Delete and recreate music_match db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE music_match;
CREATE DATABASE music_match;
\connect music_match

\i music_match-schema.sql

\echo 'Delete and recreate music_match db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE muisc_match_test;
CREATE DATABASE music_match_test;
\connect music_match_test

\i music_match-schema.sql
