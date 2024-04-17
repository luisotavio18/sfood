create database sfood;
use sfood;

create table cadastro(
	id int auto_increment primary key not null,
    nome varchar(255) not null,
    num int not null,
    email varchar(255)
);

select * from cadastro;