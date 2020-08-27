-- initialize table articles
insert into articles (article_id, article_title) values (1, "How to be a good guy");
insert into articles (article_id, article_title) values (2, "How to be cool");

-- initialize table sections
insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz)
values (1, "Be kind", 1, "Being kind is very important.", 1, false);
insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz)
values (2, "Be honest", 2, "Being honest is cool.", 1, true);
insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz)
values (3, "Be tough", 3, "Who is the tough guy!", 1, true);
insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz)
values (4, "Don't wear to much", 1, "Unless it is winter", 2, false);

-- initialize table quizzes
insert into quizzes (quiz_id, quiz_question, section_id)
values (1, "How many eyes does Seymour have?", 2);
insert into quizzes (quiz_id, quiz_question, section_id)
values (2, "How many ears does Seymour have?", 2);
insert into quizzes (quiz_id, quiz_question, section_id)
values (3, "How many fingers does Seymour have?", 3);
insert into quizzes (quiz_id, quiz_question, section_id)
values (4, "How many arms does Seymour have?", 3);
insert into quizzes (quiz_id, quiz_question, section_id)
values (5, "How many hair does Seymour have?", 3);

-- initialize table quiz_options
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (1, false, "one", 1);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (2, true, "two", 1);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (3, false, "three", 1);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (4, false, "one", 2);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (5, true, "two", 2);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (6, false, "three", 2);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (7, false, "five", 3);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (8, true, "ten", 3);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (9, false, "fifteen", 3);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (10, false, "one", 4);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (11, true, "two", 4);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (12, false, "three", 4);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (13, false, "one", 5);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (14, false, "two", 5);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (15, true, "I don't know", 5);