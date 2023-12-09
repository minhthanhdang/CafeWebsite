drop table if exists reservation;
drop table if exists customer;
drop table if exists dineinsession;
drop type if exists working_day;


create type working_day as enum(
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday'
);

create table dine_in_session  (
	start_time time not null,
	day working_day not null,
	id serial primary key not null
);

create table customer  (
	name varchar(50) not null,
	email varchar(100) not null,
	id serial primary key not null
);


create table reservation  (
	name varchar(50) not null,
	email varchar(100) not null,
	guestAmount smallint not null,
	sessionID int references dine_in_session(id),
	request text,
	checkedIn boolean default false,
	id serial primary key not null
);

-- Insert values for Monday
INSERT INTO dine_in_session (start_time, day) VALUES
('12:00:00', 'Monday'),
('13:00:00', 'Monday'),
('14:00:00', 'Monday'),
('15:00:00', 'Monday'),
('16:00:00', 'Monday'),
('17:00:00', 'Monday');

-- Insert values for Tuesday
INSERT INTO dine_in_session (start_time, day) VALUES
('10:00:00', 'Tuesday'),
('11:00:00', 'Tuesday'),
('12:00:00', 'Tuesday'),
('13:00:00', 'Tuesday'),
('14:00:00', 'Tuesday'),
('15:00:00', 'Tuesday'),
('16:00:00', 'Tuesday'),
('17:00:00', 'Tuesday');

-- Insert values for Wednesday
INSERT INTO dine_in_session (start_time, day) VALUES
('10:00:00', 'Wednesday'),
('11:00:00', 'Wednesday'),
('12:00:00', 'Wednesday'),
('13:00:00', 'Wednesday'),
('14:00:00', 'Wednesday'),
('15:00:00', 'Wednesday'),
('16:00:00', 'Wednesday'),
('17:00:00', 'Wednesday');

-- Insert values for Thursday
INSERT INTO dine_in_session (start_time, day) VALUES
('10:00:00', 'Thursday'),
('11:00:00', 'Thursday'),
('12:00:00', 'Thursday'),
('13:00:00', 'Thursday'),
('14:00:00', 'Thursday'),
('15:00:00', 'Thursday'),
('16:00:00', 'Thursday'),
('17:00:00', 'Thursday');

-- Insert values for Friday
INSERT INTO dine_in_session (start_time, day) VALUES
('10:00:00', 'Friday'),
('11:00:00', 'Friday'),
('12:00:00', 'Friday'),
('13:00:00', 'Friday'),
('14:00:00', 'Friday'),
('15:00:00', 'Friday'),
('16:00:00', 'Friday'),
('17:00:00', 'Friday');

-- Insert values for Saturday
INSERT INTO dine_in_session (start_time, day) VALUES
('10:00:00', 'Saturday'),
('11:00:00', 'Saturday'),
('12:00:00', 'Saturday'),
('13:00:00', 'Saturday'),
('14:00:00', 'Saturday'),
('15:00:00', 'Saturday'),
('16:00:00', 'Saturday'),
('17:00:00', 'Saturday');

-- Insert values for Sunday
INSERT INTO dine_in_session (start_time, day) VALUES
('10:00:00', 'Sunday'),
('11:00:00', 'Sunday'),
('12:00:00', 'Sunday'),
('13:00:00', 'Sunday'),
('14:00:00', 'Sunday'),
('15:00:00', 'Sunday'),
('16:00:00', 'Sunday'),
('17:00:00', 'Sunday');

