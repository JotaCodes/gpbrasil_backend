create table account (
    id uuid DEFAULT uuid_generate_v4 () ,
    name varchar not null,
    verify boolean default false ,
    price varchar ,
    differentials  text[] ,
    type integer not null,
    image varchar,
    local varchar not null,
    category INTEGER NOT NULL REFERENCES category(id)
)