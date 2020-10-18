-- initialize table articles
insert into articles (article_id, article_title) values (1, "What Is a CATCHMENT?");
insert into articles (article_id, article_title) values (2, "Why Should We Preserve Our Catchments?");
insert into articles (article_id, article_title) values (3, "How Can You Help Caring for Our Catchments?");
insert into articles (article_id, article_title) values (4, "Are You Keen to Know as to What Happens to the Waste Materials that You Flush or Throw into the Sink? Where does It Go?");
insert into articles (article_id, article_title) values (5, "A Quick STOPOVER before You Proceed Further!!!");
insert into articles (article_id, article_title) values (6, "Watch What You Flush or Pour down in the Sink!!!");

-- initialize table sections
insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (1,
"What Is a CATCHMENT?",
1,
"It is a region of land from where water from downpour, ice or snow fall makes its way to streams or lakes. The water that is trapped may either hang around the ground as surface water, in streams, pools and different wetlands, or it might pass underground to become groundwater, inside layers of permeable soil or rock called AQUIFER. \\n<fun>\"Nitrate from agriculture is the most common chemical contaminant in the world\'s groundwater aquifers.\"</fun>\\nThe water from these areas for instance from mountains or hills will then flow to a low point which is a dam, or to the mouth of a river where the water enters a bay or the ocean. For example, it\'s just like water in a bathtub flowing to the plughole, or the water from the sinks flowing to the drains.\\n<fun>\"Only around 30% to 50% of the rain that falls on Melbourne Water catchments each year ends up in waterways.\"</fun>\\nSource: Water NSW, The Australian Museum and Georges Riverkeeper",
1,
true,
"https://oceanus.me/image/getsectionimage/deleece-cook-JnfFsMBwe2A-unsplash-min.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (2,
"Why Should We Preserve Our Catchments?",
1,
"The water from the catchment is used for drinking by the individuals, flora and fauna. It\'s also used for residential and industrial purposes, irrigation as well as for leisure. Wildlife relies upon catchments for breeding sites, food and asylum. Catchments are significant in ecological, financial, and social terms. \\n<fun>\"Every year, more people die from unsafe water than from all forms of violence, including war.\"</fun>",
2,
true,
"https://oceanus.me/image/getsectionimage/pexels-ciboulette-574024-min.jpg",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (16,
"",
2,
"We need to limit the effect on the framework because what occurs in some portion of a catchment is probably going to influence the prosperity of the remainder of the catchment territories. For instance, since stormwater channels run straight into our streams, substantial precipitation can wash residue, trash and toxins into the waterways and in the long run into the sea.\\nAny kind of negative changes in the state of a catchment would directly be reflected in neighbourhood streams and lakes, and in the groundwater which might in turn impact the aquatic life, coral reefs and seagrass beds. For instance, contamination by chemicals, soil disintegration because of land clearance, or inordinate water use may bring about a decrease in the soundness of nearby streams and lakes.\\n<fun>\"Possible threats to our catchments are Bushfire and Pollution, Human and Animal contamination and Erosion.\"</fun>\\n<fun>\"Every day, 2 million tons of sewage and industrial and agricultural waste are discharged into the world\'s water (UN WWAP 2003), the equivalent of the weight of the entire human population of 6.8 billion people.\"</fun>\\n<fun>\"Industry dumps an estimated 300-400 MT of polluted waste in waters every year.\"</fun>\\nSource: Environment Care by Queensland Govt, Water Quality Report by United Nations",
2,
true,
null,
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (3,
"How Can You Help Caring for Our Catchments?",
1,
"You can do many things such as reducing the contamination of water and safeguarding water to lessen your effect on your catchment. By limiting disintegration around your home and businesses will likewise decrease issues downstream; planting of trees and mulching also forestalls abundance soil and supplements getting into channels and streams.\\nHave you ever thought why does the water you drink taste so great? No, right. The reason behind this is most of the Melbourne water comes from the forest that is high up in the Yarra ranges and the interesting thing is it is naturally filtered. It is for this reason the water that you have from the taps tastes great.\\n<fun>\"Melbourne Water built the underground sewerage system in the 1890s!!!\"</fun>\\nSewerage is a network of over 3,000 km of pipes and pumps that safely transfers sewage from homes and businesses to treatment plans for processing.\\nSource: Environment Care by Queensland Govt and Melbourne Water",
3,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (4,
"Are You Keen to Know as to What Happens to the Waste Materials that You Flush or Throw into the Sink? Where does It Go?",
1,
"Firstly, after it\'s disposed nearly 320,000 million litres of sewage from our houses, businesses and factories makes its way and  enters Greater Melbourne\'s sewerage through a network of underground pipes. \\nSecondly, it\'s then transferred where it enters the one of the bigger trunk sewers which slopes downwards so the gravity enables the sewage flow. \\nInevitably, pumping stations push it up to ground level to be handled at a treatment plant or to proceed with its excursion through the sewerage, which can take as long as 12 hours and then finally it\'s treated.\\n<fun>\"The treatment plants process sewage in different ways, removing rubbish, organic matter and chemicals?\"</fun>\\nSource: Melbourne Water",
4,
false,
"https://oceanus.me/image/getsectionimage/jacek-dylag-Vve7XkiUq_Y-unsplash-min.jpg",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (5,
"A Quick STOPOVER before You Proceed Further!!!",
1,
"Consider a scenario where your mum or dad prepared a mouth-watering finger licking supper for you and then threw the waste materials down the kitchen sink. Or maybe you painted a cabinet and then washed the paintbrush in your restroom sink or perhaps you just got rid of  your kitty litter into the latrine and flushed it.",
5,
false,
"https://oceanus.me/image/getsectionimage/matty-sievers-z9W8c3I1rEU-unsplash.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (17,
"",
2,
"We\'ve all done things like this many times, either knowingly or unknowingly and normally without the slightest hesitation. \\nDo you think the waste disposal mechanism could do some sort of magic with the items which shouldn\'t have been flushed or poured? And, in any case, did you realize that those little failures to understand the situation could in the long run cost you large? No wonder Sewers are still the favourite dumping ground for all kinds of items!!!\\nRight now, you may be thinking, \"Hey, it\'s just a channel. Isn\'t it there for me to flush or pour things into it?\"\\nYour channel and the sewage framework going through your home/business/industrial facilities are intended to handle fluids. Yet, in case you\'re just like many other people out there, then you\'ve gotten into the behaviour for utilizing these channels to discard quite a few family unit things. The undeniable arrangement is to change your behaviour and be cautious about what does and doesn\'t go down your drain. In case you will do that, it\'s essential to learn more about your sewage and afterwards move your garbage bin somewhat nearer to your sink so that you will utilize it much more.",
5,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (6,
"Watch What You Flush or Pour down in the Sink!!!",
1,
"Now if you want your water to taste great then you should watch what you flush or throw into the sink. Let\'s learn a few of the items in detail which are harmful when disposed in the sink or when it is flushed.",
6,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (7,
"Flushable Feline Litters",
2,
"Agreed that \"flushable\" is mentioned in the title, but unfortunately, that is not a precise depiction of this item. Indeed \"flushable\" feline litter has been known to stop up channels and make immense issues for septic frameworks. Other than that, feline litter contains microscopic organisms from your feline\'s excrement. This microbe is impervious to the synthetic substances ordinarily used to treat water, which implies it can in the end discover its way into the water flexibly where it tends to be a danger to numerous creatures, particularly ocean otters.",
6,
false,
"https://oceanus.me/image/getsectionimage/catLitter.png",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (8,
"Coffee Grounds",
3,
"The vast majority expect that coffee grounds are so small that they won\'t stay in your pipes, however that is not the situation. Indeed, these grounds are one of the most probable wellsprings of a stop up in your kitchen pipes. At the point when tossed down the sink, these grounds can cause an accumulation in your pipes.\\n<fun>\"Coffee grinds mixed with the oil in your pipes is a sure-fire drain destroyer.\"</fun>",
6,
true,
"https://oceanus.me/image/getsectionimage/coffee.png",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (9,
"Eggshells",
4,
"Eggshells themselves may appear to be innocuous, however when you send them down the channel, the waste disposal crushes them into little pieces and afterward they stall out in oil and fat and other slick substances to make a thick wreck that can without much of a stretch obstruct your funnels. You\'re in an ideal situation discarding your eggshells by placing them in the garbage bin.",
6,
false,
"https://oceanus.me/image/getsectionimage/eggshell.png",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (10,
"Produce Stickers",
5,
"These apparently innocuous little stickers can really cause huge issues within your pipes. Even the tad of glue that is on them is enough to make them adhere to the internal parts of the channels. On the off chance that they make it past your channels, they can likewise get trapped in wastewater treatment pipes and channels, causing issues with the gear intended to treat your water. If some way or another they make it past both of these obstructions, they can wind up in the water gracefully. Either way you look at it, you just see trouble/issues.",
6,
false,
"https://oceanus.me/image/getsectionimage/produce-label.png",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (11,
"Oil/Grease",
6,
"It sure is enticing to pour utilized cooking oil down your sink channel. But hey, STOP! That oil backs up your channels as well as those in your vicinity as well. That is on the grounds that when oil solidifies, it can undoubtedly obstruct sewage pipes and can really compel crude sewage again into your home or into the homes of others on your road.",
6,
false,
"https://oceanus.me/image/getsectionimage/oil.png",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (12,
"Fertilizers/Pesticides",
7,
"Excess of these fertilizers/pesticides are another significant wellspring of pollution. At the point when we utilize a lot of manure on our yard, the overabundance is gotten by stormwater spill over and dumped directly into our streams. This supplement over-burden makes green growth sprout, which eliminates oxygen from the water. That actually stifles the life from essential water animals that help improve the water\'s quality. To evade all that, ensure that you utilize just the measure of yard synthetic substances you really need and just when and where you need it.",
6,
false,
"https://oceanus.me/image/getsectionimage/fertilizer.png",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (13,
"Wet Wipes/Face Tissues/Paper Towels",
8,
"New York Times reports that numerous brands of flushable wipes don\'t break down even after being 10 minutes in water. In examination, it just takes a couple of moments for a bit of bathroom tissue i.e. toilet paper to break apart. Flushable wipes add to the fatbergs that can cause enormous issues in the sewer frameworks. Throw them in the right trash can when you are done.",
6,
false,
"https://oceanus.me/image/getsectionimage/paper-towel.jpg",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (14,
"Medicines",
9,
"Flushing expired medicines down the latrine used to be okay in the earlier times. In fact, the medical  practitioners used to prescribe doing this to keep expired medicines out of your home and away from kids. However, on the contrary, specialists presently state that disposing of these medicines into sinks and latrines is perilous for the earth. As indicated by No Drugs Down the Drain, wastewater treatment plants are not intended to eliminate man-made synthetic concoctions from the water flexibly.",
6,
true,
"https://oceanus.me/image/getsectionimage/medicine.png",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (15,
"Summary",
10,
"The table beside summarizes what items can and cannot be poured down the drains.\\nOne rule that can enable you to figure out what\'s alright to dump down the sink is to ask yourself whether you can eat the substance. Most fluids that are ok for human utilization, aside from oils and prescriptions, can be dumped. On the off chance that you wouldn\'t drink it, you most likely don\'t need a concoction hanging out in your sink at any rate. It could interact with food or with the utensils used for cooking and make you wiped out. \\nThings that are hazardous to pour down a sink shouldn\'t be flushed down the latrine, dumped in a tempest channel or covered in your yard, either. On the off chance that they are, the hazardous substances can even now advance into the groundwater.\\nSource: Melbourne Water, Yarra Valley Water and Readers Digest",
6,
true,
"https://oceanus.me/image/getsectionimage/flushchecklist.png",
"right");

-- initialize table quizzes
insert into quizzes (quiz_id, quiz_question, section_id)
values (1, "The water in the catchment might pass underground to become groundwater, inside layers of permeable soil or rock called:", 1);
insert into quizzes (quiz_id, quiz_question, section_id)
values (2, "How much percent of the rain that falls on the Melbourne water catchment ends up in water ways every year?", 1);
insert into quizzes (quiz_id, quiz_question, section_id)
values (3, "Negative change in the state of a catchment is going to be reflected in neighbourhood: A.Houses B.Streams C.Lakes D.Groundwater", 2);
insert into quizzes (quiz_id, quiz_question, section_id)
values (4, "What could act as a threat to our catchments?", 2);
insert into quizzes (quiz_id, quiz_question, section_id)
values (5, "2.8 million tons of sewage and industrial and agricultural waste are discharged into the world\'s water. Is the statement correct?", 2);
insert into quizzes (quiz_id, quiz_question, section_id)
values (6, "Coffee grinds mixed with the oil in your pipes is a sure-fire drain destroyer. Is the statement correct?", 8);
insert into quizzes (quiz_id, quiz_question, section_id)
values (7, "Wastewater treatment plants are designed to remove man-made chemicals from the water supply. Is the statement correct?", 14);
insert into quizzes (quiz_id, quiz_question, section_id)
values (8, "I can pour oil/grease in my kitchen sink. Is the statement correct?", 15);
insert into quizzes (quiz_id, quiz_question, section_id)
values (9, "I can flush wet wipes in the toilet and throw eggshells in the sink. Is the statement correct?", 15);

-- initialize table quiz_options
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (1, false, "Purifier", 1);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (2, true, "Aquifer", 1);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (3, false, "Solidifier", 1);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (4, false, "None of them", 1);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (5, false, "Approx. 20% to 30%", 2);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (6, false, "Approx. 40% to 60%", 2);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (7, true, "Approx. 30% to 50%", 2);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (8, false, "Approx. 20% to 50%", 2);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (9, false, "A and C", 3);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (10, false, "A and B and C and D", 3);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (11, true, "B and C and D", 3);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (12, false, "A and C and D", 3);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (13, false, "Pollution", 4);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (14, false, "Animal Contamination", 4);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (15, false, "Erosion", 4);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (16, true, "All of the above", 4);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (17, false, "True", 5);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (18, true, "False", 5);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (19, false, "Maybe", 5);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (20, false, "I have no idea", 5);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (21, true, "True", 6);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (22, false, "False", 6);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (23, false, "Maybe", 6);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (24, false, "I have no idea", 6);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (25, false, "True", 7);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (26, true, "False", 7);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (27, false, "Maybe", 7);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (28, false, "I have no idea", 7);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (29, false, "True", 8);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (30, true, "False", 8);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (31, false, "Maybe", 8);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (32, false, "I have no idea", 8);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (33, false, "True", 9);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (34, true, "False", 9);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (35, false, "Maybe", 9);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (36, false, "I have no idea", 9);

-- initialize table achievements
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (1, "1 Correct", "Answer 1 quiz correctly", null);
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (2, "7 Correct", "Answer 7 quizzes correctly", null);
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (3, "14 Correct", "Answer 14 quizzes correctly", null);
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (4, "21 Correct", "Answer 21 quizzes correctly", null);
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (5, "28 Correct", "Answer 28 quizzes correctly", null);
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (6, "1 Time", "Read all articles 1 time", null);
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (7, "3 Times", "Read all articles 3 times", null);
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (8, "5 Times", "Read all articles 5 times", null);

-- create view quiz section article
create or replace view quiz_section_article as
select q.quiz_id,
       a.article_id,
       a.article_title
from quizzes q
    join sections s on q.section_id = s.section_id
    join articles a on s.article_id = a.article_id;

-- create view user quiz article records
create or replace view user_quiz_article as
select uqr.user_quiz_record_id,
       uqr.username,
       a.article_id
from user_quiz_records uqr
    join quizzes q on uqr.quiz_id = q.quiz_id
    join sections s on q.section_id = s.section_id
    join articles a on s.article_id = a.article_id
where uqr.answer_result = true;