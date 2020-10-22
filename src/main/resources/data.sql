-- initialize table articles
insert into articles (article_id, article_title) values (1, "What Is a CATCHMENT?");
insert into articles (article_id, article_title) values (2, "Why Should We Preserve Our Catchments?");
insert into articles (article_id, article_title) values (3, "How Can You Help Caring for Our Catchments?");
insert into articles (article_id, article_title) values (4, "Are You Keen to Know as to What Happens to the Waste Materials that You Flush or Throw into the Sink? Where does It Go?");
insert into articles (article_id, article_title) values (5, "A Quick STOPOVER before You Proceed Further!!!");
insert into articles (article_id, article_title) values (6, "Watch What You Flush or Pour down in the Sink!!!");
insert into articles (article_id, article_title) values (7, "What Is Water Pollution?");
insert into articles (article_id, article_title) values (8, "How Is It Caused?");
insert into articles (article_id, article_title) values (9, "Possible Sources for Contaminating the Water!!!");
insert into articles (article_id, article_title) values (10, "Common Types of Pollutants Causing Water Pollution!!!");
insert into articles (article_id, article_title) values (11, "Who\'s Responsible?");
insert into articles (article_id, article_title) values (12, "History of Sewage System!!!");
insert into articles (article_id, article_title) values (13, "Advantages of Sewage Treatment");
insert into articles (article_id, article_title) values (14, "Treatment Plants and Production Process!!!");

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
values (3,
"",
2,
"We need to limit the effect on the framework because what occurs in some portion of a catchment is probably going to influence the prosperity of the remainder of the catchment territories. For instance, since stormwater channels run straight into our streams, substantial precipitation can wash residue, trash and toxins into the waterways and in the long run into the sea.\\nAny kind of negative changes in the state of a catchment would directly be reflected in neighbourhood streams and lakes, and in the groundwater which might in turn impact the aquatic life, coral reefs and seagrass beds. For instance, contamination by chemicals, soil disintegration because of land clearance, or inordinate water use may bring about a decrease in the soundness of nearby streams and lakes.\\n<fun>\"Possible threats to our catchments are Bushfire and Pollution, Human and Animal contamination and Erosion.\"</fun>\\n<fun>\"Every day, 2 million tons of sewage and industrial and agricultural waste are discharged into the world\'s water (UN WWAP 2003), the equivalent of the weight of the entire human population of 6.8 billion people.\"</fun>\\n<fun>\"Industry dumps an estimated 300-400 MT of polluted waste in waters every year.\"</fun>\\nSource: Environment Care by Queensland Govt, Water Quality Report by United Nations",
2,
true,
null,
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (4,
"How Can You Help Caring for Our Catchments?",
1,
"You can do many things such as reducing the contamination of water and safeguarding water to lessen your effect on your catchment. By limiting disintegration around your home and businesses will likewise decrease issues downstream; planting of trees and mulching also forestalls abundance soil and supplements getting into channels and streams.\\nHave you ever thought why does the water you drink taste so great? No, right. The reason behind this is most of the Melbourne water comes from the forest that is high up in the Yarra ranges and the interesting thing is it is naturally filtered. It is for this reason the water that you have from the taps tastes great.\\n<fun>\"Melbourne Water built the underground sewerage system in the 1890s!!!\"</fun>\\nSewerage is a network of over 3,000 km of pipes and pumps that safely transfers sewage from homes and businesses to treatment plans for processing.\\nSource: Environment Care by Queensland Govt and Melbourne Water",
3,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (5,
"Are You Keen to Know as to What Happens to the Waste Materials that You Flush or Throw into the Sink? Where does It Go?",
1,
"Firstly, after it\'s disposed nearly 320,000 million litres of sewage from our houses, businesses and factories makes its way and  enters Greater Melbourne\'s sewerage through a network of underground pipes. \\nSecondly, it\'s then transferred where it enters the one of the bigger trunk sewers which slopes downwards so the gravity enables the sewage flow. \\nInevitably, pumping stations push it up to ground level to be handled at a treatment plant or to proceed with its excursion through the sewerage, which can take as long as 12 hours and then finally it\'s treated.\\n<fun>\"The treatment plants process sewage in different ways, removing rubbish, organic matter and chemicals?\"</fun>\\nSource: Melbourne Water",
4,
false,
"https://oceanus.me/image/getsectionimage/jacek-dylag-Vve7XkiUq_Y-unsplash-min.jpg",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (6,
"A Quick STOPOVER before You Proceed Further!!!",
1,
"Consider a scenario where your mum or dad prepared a mouth-watering finger licking supper for you and then threw the waste materials down the kitchen sink. Or maybe you painted a cabinet and then washed the paintbrush in your restroom sink or perhaps you just got rid of  your kitty litter into the latrine and flushed it.",
5,
false,
"https://oceanus.me/image/getsectionimage/matty-sievers-z9W8c3I1rEU-unsplash.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (7,
"",
2,
"We\'ve all done things like this many times, either knowingly or unknowingly and normally without the slightest hesitation. \\nDo you think the waste disposal mechanism could do some sort of magic with the items which shouldn\'t have been flushed or poured? And, in any case, did you realize that those little failures to understand the situation could in the long run cost you large? No wonder Sewers are still the favourite dumping ground for all kinds of items!!!\\nRight now, you may be thinking, \"Hey, it\'s just a channel. Isn\'t it there for me to flush or pour things into it?\"\\nYour channel and the sewage framework going through your home/business/industrial facilities are intended to handle fluids. Yet, in case you\'re just like many other people out there, then you\'ve gotten into the behaviour for utilizing these channels to discard quite a few family unit things. The undeniable arrangement is to change your behaviour and be cautious about what does and doesn\'t go down your drain. In case you will do that, it\'s essential to learn more about your sewage and afterwards move your garbage bin somewhat nearer to your sink so that you will utilize it much more.",
5,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (8,
"Watch What You Flush or Pour down in the Sink!!!",
1,
"Now if you want your water to taste great then you should watch what you flush or throw into the sink. Let\'s learn a few of the items in detail which are harmful when disposed in the sink or when it is flushed.",
6,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (9,
"Flushable Feline Litters",
2,
"Agreed that \"flushable\" is mentioned in the title, but unfortunately, that is not a precise depiction of this item. Indeed \"flushable\" feline litter has been known to stop up channels and make immense issues for septic frameworks. Other than that, feline litter contains microscopic organisms from your feline\'s excrement. This microbe is impervious to the synthetic substances ordinarily used to treat water, which implies it can in the end discover its way into the water flexibly where it tends to be a danger to numerous creatures, particularly ocean otters.",
6,
false,
"https://oceanus.me/image/getsectionimage/catLitter.png",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (10,
"Coffee Grounds",
3,
"The vast majority expect that coffee grounds are so small that they won\'t stay in your pipes, however that is not the situation. Indeed, these grounds are one of the most probable wellsprings of a stop up in your kitchen pipes. At the point when tossed down the sink, these grounds can cause an accumulation in your pipes.\\n<fun>\"Coffee grinds mixed with the oil in your pipes is a sure-fire drain destroyer.\"</fun>",
6,
true,
"https://oceanus.me/image/getsectionimage/coffee.png",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (11,
"Eggshells",
4,
"Eggshells themselves may appear to be innocuous, however when you send them down the channel, the waste disposal crushes them into little pieces and afterward they stall out in oil and fat and other slick substances to make a thick wreck that can without much of a stretch obstruct your funnels. You\'re in an ideal situation discarding your eggshells by placing them in the garbage bin.",
6,
false,
"https://oceanus.me/image/getsectionimage/eggshell.png",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (12,
"Produce Stickers",
5,
"These apparently innocuous little stickers can really cause huge issues within your pipes. Even the tad of glue that is on them is enough to make them adhere to the internal parts of the channels. On the off chance that they make it past your channels, they can likewise get trapped in wastewater treatment pipes and channels, causing issues with the gear intended to treat your water. If some way or another they make it past both of these obstructions, they can wind up in the water gracefully. Either way you look at it, you just see trouble/issues.",
6,
false,
"https://oceanus.me/image/getsectionimage/produce-label.png",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (13,
"Oil/Grease",
6,
"It sure is enticing to pour utilized cooking oil down your sink channel. But hey, STOP! That oil backs up your channels as well as those in your vicinity as well. That is on the grounds that when oil solidifies, it can undoubtedly obstruct sewage pipes and can really compel crude sewage again into your home or into the homes of others on your road.",
6,
false,
"https://oceanus.me/image/getsectionimage/oil.png",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (14,
"Fertilizers/Pesticides",
7,
"Excess of these fertilizers/pesticides are another significant wellspring of pollution. At the point when we utilize a lot of manure on our yard, the overabundance is gotten by stormwater spill over and dumped directly into our streams. This supplement over-burden makes green growth sprout, which eliminates oxygen from the water. That actually stifles the life from essential water animals that help improve the water\'s quality. To evade all that, ensure that you utilize just the measure of yard synthetic substances you really need and just when and where you need it.",
6,
false,
"https://oceanus.me/image/getsectionimage/fertilizer.png",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (15,
"Wet Wipes/Face Tissues/Paper Towels",
8,
"New York Times reports that numerous brands of flushable wipes don\'t break down even after being 10 minutes in water. In examination, it just takes a couple of moments for a bit of bathroom tissue i.e. toilet paper to break apart. Flushable wipes add to the fatbergs that can cause enormous issues in the sewer frameworks. Throw them in the right trash can when you are done.",
6,
false,
"https://oceanus.me/image/getsectionimage/paper-towel.jpg",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (16,
"Medicines",
9,
"Flushing expired medicines down the latrine used to be okay in the earlier times. In fact, the medical  practitioners used to prescribe doing this to keep expired medicines out of your home and away from kids. However, on the contrary, specialists presently state that disposing of these medicines into sinks and latrines is perilous for the earth. As indicated by No Drugs Down the Drain, wastewater treatment plants are not intended to eliminate man-made synthetic concoctions from the water flexibly.",
6,
true,
"https://oceanus.me/image/getsectionimage/medicine.png",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (17,
"Summary",
10,
"The table beside summarizes what items can and cannot be poured down the drains.\\nOne rule that can enable you to figure out what\'s alright to dump down the sink is to ask yourself whether you can eat the substance. Most fluids that are ok for human utilization, aside from oils and prescriptions, can be dumped. On the off chance that you wouldn\'t drink it, you most likely don\'t need a concoction hanging out in your sink at any rate. It could interact with food or with the utensils used for cooking and make you wiped out. \\nThings that are hazardous to pour down a sink shouldn\'t be flushed down the latrine, dumped in a tempest channel or covered in your yard, either. On the off chance that they are, the hazardous substances can even now advance into the groundwater.\\nSource: Melbourne Water, Yarra Valley Water and Readers Digest",
6,
true,
"https://oceanus.me/image/getsectionimage/flushchecklist.png",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (18,
"What Is Water Pollution?",
1,
"Did you use water today? What did you use it for? \\nWas it for washing the expensive car or bike that your parents own or was it for cooking your favourite food or for doing your dishes from last night or for sweeping the floor or was it for your daily errands such as taking a shower or maybe brushing your teeth? Are you even aware that all the sewage that is generated from your household activities would eventually make its way to our beautiful waterbodies such as oceans, rivers, lakes or maybe even sea?\\nWater gets polluted because of the harmful substances that enter these waterbodies. These toxic substances diffuse in them or remains hanging in them or settles on the waterbeds due to which the quality of water is deteriorated. This is not only harmful for the marine life and aquatic ecosystem but also these substances seep through and make their way to the groundwater which eventually ends up at our households as impure or adulterated water. We then use this impure water for our day to day chores and not to forget we also end up drinking the same impure water.\\n<fun>\"Fresh water on earth is only 2.5% of the total water when 70% of the earth\'s surface is covered by water.\"</fun>",
7,
true,
"https://oceanus.me/image/getsectionimage/naja-bertolt-jensen-IUBc0cxN7Lc-unsplash.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (19,
"How Is It Caused?",
1,
"Our day to day life activities has a lot of impact on sewage production. Apart from most of the other things that you use or eat, were you even aware that consuming fresh fruits or using packaged products or even reading newspaper aids in generating sewage? \\n<fun>\"80% of water pollution is caused due to domestic sewage.\"</fun>\\nThese sewages from our residential areas, industries and schools, farms and so on contain a wide scope of manufactured substances and materials that are not regularly found in our streams. A bit of these manufactured mixes is harmful and can be dangerous, even in slightest amounts. Others, for instance, human wastes, are not destructive yet rather are made in such exceptional sums that organic systems basically can\'t adjust. Sewage must be cleansed to a great extent before it is let out into the nature.\\nWater gets contaminated or polluted as the sewage that is generated from these areas are not treated properly before it is released into the nature. \\n<fun>\"At least 2 billion people drink water from sources contaminated by feces, according to the World Health Organization, and that water may transmit dangerous diseases such as cholera and typhoid.\"</fun>\\nSource: National Geographic, Yarra Valley Water",
8,
true,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (20,
"Possible Sources for Contaminating the Water!!!",
1,
"Almost all the living beings on this planet are affected in some or the other way due to the contamination of water. None of us love to go to beaches that are polluted or dirty due to the kind of things that we throw into it or even drink polluted water. There are hardly very few people who are even aware of the possible sources that result in contaminating or polluting the water.",
9,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (21,
"Household",
2,
"Most of the issues encountered by sewage treatment plants start with the material that we individuals tip down the drain or flush down the latrine at home. For instance, the sanitary napkins used by the females, wet wipes or the diapers that are used for the kids are flushed down the toilet. Treatment plants are not that intelligent enough and neither are they equipped for treating a significant number of these wastes and some pass through the plants untreated.",
9,
true,
"https://oceanus.me/image/getsectionimage/taton-moise-3Lm6uUqS2ik-unsplash.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (22,
"Industry, Offices and Schools",
3,
"Just like household which is a source of water pollution even business environments are no less. Even these areas are known for carelessly tipping down harmful substances to the drain. The negligent chucking out of harmful substances is a major issue since these substances can cause contamination, regardless of whether they are in little amounts.\\nNumerous businesses are additionally permitted to discard these substances into the sewerage framework. Be that as it may, they should do as such under severe rules constrained by the water specialists answerable for the treatment of sewage.",
9,
false,
"https://oceanus.me/image/getsectionimage/gabriel-ramos--mkVeQ_6tew-unsplash.jpg",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (23,
"Sewers",
4,
"There can be instances when the pipes could be blocked due to some reasons or it may even break down or the pumping station doesn\'t function properly then all the sewage that has been pumped is untreated and gets released to the waterbodies. Though such kind of things happen very rarely but they add up in contaminating the water and polluting it.",
9,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (24,
"Treatment Plants",
5,
"Just like the sewers, even the treatment plant has the possibility of breaking down. Nonetheless, they are commonly planned with enough back-up frameworks to forestall any significant water contamination issues. Current treatment plants treat sewage to a phase where it is protected to deliver once again into the nature and these recycled sewages are utilised at its best.",
9,
false,
"https://oceanus.me/image/getsectionimage/john-cameron-7h-dJo7HIgc-unsplash.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (25,
"Illegal Dumping",
6,
"This kind of activity when the harmful substances are dumped intentionally or due to carelessness straight into the sewers or waste materials are thrown out in the nature. The whole and sole reason of doing such kind of act is to avoid the cost that is involved in treating these wastes in a correct way.",
9,
true,
"https://oceanus.me/image/getsectionimage/dustan-woodhouse-RUqoVelx59I-unsplash.jpg",
"right");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (26,
"Stormwater Drains",
7,
"Water from rain that falls on our homes and streets is diverted in an arrangement of lines that is independent from the sewerage framework that conveys sewage. These stormwater drains likewise gather any litter or other material, including animal wastes or droppings, that lies around our roads. This junk is commonly conveyed straight into waterways or out to the ocean by the stormwater channels.\\nSince stormwater isn\'t dealt with, this framework is liable for conveying a great part of the trash or waste found along our streams and seashores. Stormwater drains are likewise ordinarily accountable for conveying either intentionally or unintentionally spilled poisonous synthetic compounds, oils and different materials into the waterways.",
9,
true,
"https://oceanus.me/image/getsectionimage/michael-trimble-WG7jrDV1O44-unsplash.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (27,
"Farms",
8,
"Composts or Fertilisers, herbicides, bug sprays and many different kinds of pesticides or chemicals are used by the farmers on their harvests. Researchers are just barely starting to acknowledge the amount of these harmful substances are washed into drains and creek and on into the ocean.\\n<fun>\"The nuclear crisis created by the tsunami of 2011, unleashed 11 million litres of radioactive water into the Pacific Ocean.\"</fun>\\n<fun>\"Almost two million tons of human waste are exposed daily to water.\"</fun>\\nSource: Natural Resource Defense Council, Yarra Valley Water",
9,
true,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (28,
"Common Types of Pollutants Causing Water Pollution!!!",
1,
"There are many forms of water pollution. Let\'s take you through the most common ones that you have read or heard about:\\nEscherichia coli (E. coli): E. coli is a kind of bacteria or a microorganism that is generated from animal or mainly human wastes and provides a clear-cut evidence of faecal pollution. The extent of E. coli in water is utilized as a manual for the measure of animal or human wastes in the water and may demonstrate the presence of pathogenic microscopic organisms.\\nToxic chemicals: Numerous synthetic substances utilized in industry are harmful to humans as well as to our wildlife. Dioxin and hefty metals, for example, mercury, are notable instances of the huge number of harmful synthetics developed by industry. Indeed, even in little amounts, harmful synthetic substances are an intense reason for water contamination.\\nOil: A wide range of oil winds up in our streams through coincidental spills or due to illegal dumping. Since oil drifts or hovers on the outside of water, any oil splashed or blurted out can be tragic for marine life.\\nPlastics: Australians use around 3.9 billion plastic packs a year. Plastic packs and other plastic things are exceptionally valuable around the home however can likewise disastrously affect marine life. A lot of this plastic contamination discovers its way into the ocean through stormwater drains.",
10,
true,
"https://oceanus.me/image/getsectionimage/tim-mossholder-qq-8dpdlBsY-unsplash.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (29,
"Who\'s Responsible?",
1,
"At whatever point there is an issue with water contamination it is imperative to realize who the dependable authority is.\\nMelbourne Water:\\nMelbourne Water is accountable for enormous stormwater drains and for waterways and springs. They likewise take part in a monitoring program to estimate water quality in waterways and streams.\\nLocal municipal councils:\\nThey are accountable for small stormwater drains and they additionally oversee septic tanks.\\nEnvironment Protection Authority:\\nThe EPA is accountable for setting ecological guidelines and helping organizations and people accomplish these norms. They can do this with motivating individuals or punishments for the individuals who breaks ecological laws.\\nSource: Yarra Valley Water",
11,
true,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (30,
"History of Sewage System!!!",
1,
"Present day and productive sewage treatment are something that most Melburnians underestimate, yet this wasn\'t the situation for our predecessors.",
12,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (31,
"Marvellous \"Smellbourne\"",
2,
"The revelation of gold in 1851 made Melbourne probably the most extravagant city on earth. With a populace of about a large portion of a million people by the 1880s, it had likewise become Australia\'s greatest city. \\nYet, Melbourne was confronting a major contamination issue. While it had been depicted by British columnists as \"a city of glorious expectations\", it was additionally being named Marvelous \'Smellbourne\' due to the city\'s unsanitary garbage removal techniques.",
12,
true,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (32,
"Open Sewers",
3,
"In those early days most of waste from homes – including kitchen, washroom and clothing squanders, were discharged into open depletes that streamed into road channels and on to neighbourhood waterways and rivers. Waste from farms and enterprises likewise streamed into these road channels, transforming Melbourne\'s waterways and creeks into open sewers.",
12,
false,
"https://oceanus.me/image/getsectionimage/marco-bicca-1XWR9oI9AFA-unsplash.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (33,
"Thunderboxes and Chamber Pots",
4,
"Techniques for discarding human waste were likewise exceptionally fundamental. A latrine consisted of a basin that was housed in a wooden structure known as a \'pan closet toilet\' or \'thunderbox\'. \\nThe early arrangement was to truck human waste to the external edges of Melbourne, where it was frequently utilized as manure by market plant specialists or taken to the tip. Thunderboxes were just purged about once per week by a nightman, supposedly on the grounds that he gathered containers around evening time by coming to through a little entryway in the rear of the storeroom. Since the waste remained in the prospect for seven days, thunderboxes were extremely foul. \\nSince strolling to the thunderbox neglected and dim of night was not engaging, numerous individuals picked to utilize chamber pots around evening time. These were regularly emptied out straight into road channels. \\nTo exacerbate the situation, as Melbourne\'s populace developed the arrangement of nightmen couldn\'t keep up and an ever-increasing number of individuals began discarding their squanders legitimately into road channels.",
12,
true,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (34,
"Werribee Farm",
5,
"Worried about the spread of ailment due to the city\'s unhygienic garbage removal rehearsals, the specialists completed a Royal Commission in 1888 to think of an answer for Melbourne\'s waste issues. \\nThe appropriate response was the development of a sewerage framework – an arrangement of channels, sewers and channels manufactured underground to convey sewage from homes and production lines to a sewage treatment ranch. \\nIn 1889 an English designer, Mr James Mansergh, was utilized to draw up plans for Melbourne\'s sewerage framework. In 1891 the Melbourne and Metropolitan Board of Works (MMBW) was framed to assume liability for both waters flexibly and the treatment of sewage. \\nMansergh\'s arrangements were adjusted by the MMBW\'s first architect in-boss, Mr William Thwaites, and in May 1892 development started on Melbourne\'s sewerage framework. A treatment ranch was built at Werribee and a pumping station was built at Spotswood  which is presently the site of the Scienceworks Museum to send the city\'s coast to Werribee. The principal Melbourne homes were associated with the sewerage framework in 1897.\\nSource: Melbourne Water",
12,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (35,
"Advantages of Sewage Treatment",
1,
"Recycled Water: Before sewage is let out into the surroundings or cleaned to provide as reused water, it is treated to Class A, the highest calibre of reused water.\\nEnergy Generation (Biogas): Sewage is significantly more than a waste item. We can create power by combusting biogas, which is caught under spreads that are put over our sewage treatment tidal ponds.\\nBiosolids: Biosolids are the strong natural material left over after sewage treatment. These treated biosolids look and smell like soil, and contain valuable supplements like nitrogen, carbon and phosphorus.\\nSource: Melbourne Water",
13,
false,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (36,
"Treatment Plants and Production Process!!!",
1,
"All our treatment plants use measures extraordinarily intended to suit the attributes of the plant and approaching wastewater.",
14,
false,
"https://oceanus.me/image/getsectionimage/EasternTreatmentPlant.jpg",
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (37,
"Eastern Treatment Plant",
2,
"The Eastern Treatment Plant (ETP) is one-tenth the size of the Western Treatment Plant, however, treats about 50% of Melbourne\'s sewage: 330 million litres per day. It uses innovative ways to turn sewage into Class A recycled water.\\nThe Eastern Treatment Plant is one of only a handful of the plants on the planet that can get all approaching wastewater to a standard worthy for reusing, as opposed to just a little rate. \\nIn 2012, it was moved up to incorporate a serious tertiary treatment measure, including filters, ozone, UV light and chlorine.\\n<fun>\"The Eastern Treatment Plant has been generating electricity from sewage gas since it opened in 1975 and can supply 40% of its needs.\"</fun>",
14,
true,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (38,
"",
3,
"Sewage entering the plant goes through an intensive three-stage treatment process, which only takes 24 hours. First is the primary treatment where the pollutants are removed from the sewage. Once the pollutants are discarded it then enters secondary treatment which uses different types of bacteria that live in different environments i.e. with oxygen (aerobic), and without oxygen (anoxic). These break down organic material and remove nutrients. The sewage then passes through sedimentation tanks called clarifiers, where more sludge settles to the bottom before being sent to the digesters. This leaves clear, treated water called secondary effluent, which flows on to large holding basins. And finally, it enters tertiary treatment where the water is disinfected and then passed on to the nearby customers as recycled water and the rest is released into the ocean at Boags Rocks under strict conditions set by EPA Victoria to protect the environment. The sludge from the previous treatment stages is dried and stored in large piles or can be reused as biosolids.\\nThe Eastern Treatment Plant utilizes biogas to control a generous piece of its power utilization, and the majority of its heating and cooling. The plant\'s 7 generators can run exclusively on biogas or be enhanced by natural gas as and when needed.",
14,
true,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (39,
"Western Treatment Plant",
4,
"The Western Treatment Plant (WTP) is a position of noteworthy and social importance. It economically treats half of Melbourne\'s sewage, and is a flourishing ecosystem with a universally perceived bird habitat.\\n<fun>\"The Western Treatment Plant, which is roughly the size of Phillip Island, has evolved as Melbourne has grown to become a world leader in environmentally friendly sewage treatment.\"</fun>\\nThis plant was the initial plant in Victoria to create Class A reused water. This cycle utilizes our current tidal pond framework i.e. lagoon system, which produces Class C water in 30 to 35 days. The plant produces 40 billion litres of recycled water.",
14,
true,
null,
"left");

insert into sections (section_id, section_header, section_sequence_number, section_text, article_id, has_quiz, image_url, image_alignment)
values (40,
"",
5,
"To arrive at Class A norm, UV light and chlorine are utilized to additionally sterilize the water. A portion of this is utilized to water harvests, play areas and gardens, while some is additionally prepared to decrease its salt before it tends to be provided to homes.\\n<fun>\"The Western Treatment Plant is home to some of the rarest frog species in the world and was declared an internationally significant wetland for waterfowl in 1983 under the Ramsar Convention.\"</fun>\\nThe Western Treatment Plant utilizes biogas to meet about the entirety of its power needs. It creates 70,000 megawatt long stretches of inexhaustible power each year. Occasionally the plant delivers more power than the actual use. Overabundance power is traded to the power grid to counterbalance utilization at different locales.\\nSource: Melbourne Water",
14,
true,
null,
"left");


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
values (6, "Coffee grounds mixed with the oil in your pipes is a sure-fire drain destroyer. Is the statement correct?", 10);
insert into quizzes (quiz_id, quiz_question, section_id)
values (7, "Wastewater treatment plants are designed to remove man-made chemicals from the water supply. Is the statement correct?", 16);
insert into quizzes (quiz_id, quiz_question, section_id)
values (8, "I can pour oil/grease in my kitchen sink. Is the statement correct?", 17);
insert into quizzes (quiz_id, quiz_question, section_id)
values (9, "I can flush wet wipes in the toilet and throw eggshells in the sink. Is the statement correct?", 17);
insert into quizzes (quiz_id, quiz_question, section_id)
values (10, "Water gets polluted because of the harmful substances that enter the waterbodies such as oceans, river, sea and lakes. Is the statement correct?", 18);
insert into quizzes (quiz_id, quiz_question, section_id)
values (11, "Only 5.5% of the total water is fresh water in spite of nearly 70% of earth\'s surface being covered by water. Is the statement correct?", 18);
insert into quizzes (quiz_id, quiz_question, section_id)
values (12, "80% of water pollution is caused due to domestic sewage. Is the statement correct?", 19);
insert into quizzes (quiz_id, quiz_question, section_id)
values (13, "Approximately how many billion people drink water that is contaminated by feces?", 19);
insert into quizzes (quiz_id, quiz_question, section_id)
values (14, "Treatment plants are equipped for treating wastes such as wet wipes or diapers. Is the statement correct?", 21);
insert into quizzes (quiz_id, quiz_question, section_id)
values (15, "Illegal dumping of waste materials does not occur intentionally. Is the statement correct?", 25);
insert into quizzes (quiz_id, quiz_question, section_id)
values (16, "Stormwater drains are responsible for carrying litter into the sea. Is the statement correct?", 26);
insert into quizzes (quiz_id, quiz_question, section_id)
values (17, "Fertilisers and Herbicides can be classified under which source of pollution?", 27);
insert into quizzes (quiz_id, quiz_question, section_id)
values (18, "On a day to day basis approximately 2.5 to 3 million tonnes of human waste are being exposed to the water. Is the statement correct?", 27);
insert into quizzes (quiz_id, quiz_question, section_id)
values (19, "The most common types of pollutants causing water pollution are A. Oil B. Plastic C. Chemicals D. Escherichia Coli", 28);
insert into quizzes (quiz_id, quiz_question, section_id)
values (20, "The people accountable whenever you face an issue with water pollution you should immediately get in touch with are: A. Melbourne Water B. Local Council C. EPA", 29);
insert into quizzes (quiz_id, quiz_question, section_id)
values (21, "Melbourne was also named as \"Marvellous Smellbourne\" due to the city\'s unsanitary garbage removal techniques.", 31);
insert into quizzes (quiz_id, quiz_question, section_id)
values (22, "A toilet comprised of a basin that was housed in a wooden structure known as a \'pan closet toilet\' or \'thunderbox\'. Is the statement correct?", 33);
insert into quizzes (quiz_id, quiz_question, section_id)
values (23, "The Eastern Treatment plant treats nearly how much of Melbourne’s sewage?", 37);
insert into quizzes (quiz_id, quiz_question, section_id)
values (24, "Melbourne\'s 70% of the sewage is treated by the Western Treatment Plant. Is the statement correct?", 37);
insert into quizzes (quiz_id, quiz_question, section_id)
values (25, "The Eastern Treatment Plant generates electricity from sewage gas. Is the statement correct?", 37);
insert into quizzes (quiz_id, quiz_question, section_id)
values (26, "Removal of pollutants takes place in the secondary treatment. Is the statement correct?", 38);
insert into quizzes (quiz_id, quiz_question, section_id)
values (27, "The sludge from the previous treatment stages is dried and stored in large piles or can be reused as biosolids. Is the statement correct?", 38);
insert into quizzes (quiz_id, quiz_question, section_id)
values (28, "The Western treatment Plant makes use of our existing lagoon system, which produces Class C water in 40 to 55 days. Is the statement correct?", 39);
insert into quizzes (quiz_id, quiz_question, section_id)
values (29, "The Western Treatment Plant produces nearly 40 billion litres of recycled water. Is the statement correct?", 39);
insert into quizzes (quiz_id, quiz_question, section_id)
values (30, "The Western Treatment Plant was the initial plant in Victoria to create Class A reused water and is also home to some of the rarest frog species in the world. Is the statement correct?", 40);
insert into quizzes (quiz_id, quiz_question, section_id)
values (31, "Every year nearly 45,000 megawatt long stretches of inexhaustible power is generated by the Western Treatment Plant. Is the statement correct?", 40);


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
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (37, true, "True", 10);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (38, false, "False", 10);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (39, false, "Maybe", 10);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (40, false, "I have no idea", 10);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (41, false, "True", 11);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (42, true, "False", 11);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (43, false, "Maybe", 11);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (44, false, "I have no idea", 11);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (45, true, "True", 12);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (46, false, "False", 12);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (47, false, "Maybe", 12);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (48, false, "I have no idea", 12);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (49, false, "Five", 13);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (50, false, "One", 13);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (51, false, "Six", 13);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (52, true, "Two", 13);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (53, false, "True", 14);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (54, true, "False", 14);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (55, false, "Maybe", 14);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (56, false, "I have no idea", 14);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (57, false, "True", 15);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (58, true, "False", 15);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (59, false, "Maybe", 15);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (60, false, "I have no idea", 15);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (61, true, "True", 16);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (62, false, "False", 16);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (63, false, "Maybe", 16);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (64, false, "I have no idea", 16);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (65, false, "Houses", 17);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (66, false, "Sewers", 17);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (67, true, "Farm", 17);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (68, false, "Stormwater Drains", 17);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (69, false, "True", 18);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (70, true, "False", 18);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (71, false, "Maybe", 18);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (72, false, "I have no idea", 18);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (73, false, "Only B", 19);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (74, false, "Only A and B", 19);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (75, true, "All of the above", 19);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (76, false, "A and B and C", 19);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (77, false, "Only B", 20);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (78, false, "Only A and B", 20);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (79, true, "A and B and C", 20);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (80, false, "I have no idea", 20);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (81, true, "True", 21);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (82, false, "False", 21);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (83, false, "Maybe", 21);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (84, false, "I have no idea", 21);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (85, true, "True", 22);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (86, false, "False", 22);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (87, false, "Maybe", 22);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (88, false, "I have no idea", 22);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (89, false, "350 million litres/day", 23);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (90, false, "370 million litres/day", 23);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (91, false, "310 million litres/day", 23);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (92, true, "330 million litres/day", 23);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (93, false, "True", 24);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (94, true, "False", 24);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (95, false, "Maybe", 24);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (96, false, "I have no idea", 24);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (97, true, "True", 25);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (98, false, "False", 25);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (99, false, "Maybe", 25);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (100, false, "I have no idea", 25);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (101, false, "True", 26);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (102, true, "False", 26);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (103, false, "Maybe", 26);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (104, false, "I have no idea", 26);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (105, false, "True", 27);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (106, true, "False", 27);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (107, false, "Maybe", 27);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (108, false, "I have no idea", 27);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (109, false, "True", 28);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (110, true, "False", 28);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (111, false, "Maybe", 28);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (112, false, "I have no idea", 28);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (113, true, "True", 29);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (114, false, "False", 29);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (115, false, "Maybe", 29);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (116, false, "I have no idea", 29);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (117, true, "True", 30);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (118, false, "False", 30);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (119, false, "Maybe", 30);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (120, false, "I have no idea", 30);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (121, false, "True", 31);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (122, true, "False", 31);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (123, false, "Maybe", 31);
insert into quiz_options (quiz_option_id, is_answer, quiz_option_text, quiz_id)
values (124, false, "I have no idea", 31);


-- initialize table achievements
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (1, "Beginner", "Good Start! Got a question right during the adventure journey.", "https://oceanus.me/image/getbadgeimage/quiz-1.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (2, "Rookie", "Completed the achievement of answering seven questions correctly", "https://oceanus.me/image/getbadgeimage/quiz-2.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (3, "Competent", "Fourteen questions have been answered correctly", "https://oceanus.me/image/getbadgeimage/quiz-3.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (4, "Proficient", "You have answered 21 questions correctly, really amazing", "https://oceanus.me/image/getbadgeimage/quiz-4.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (5, "Expert", "Congratulations! You got 28 questions right!", "https://oceanus.me/image/getbadgeimage/quiz-5.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (6, "Freshman", "You have finished reading all articles once!", "https://oceanus.me/image/getbadgeimage/read-1.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (7, "Sophomore", "Reading all articles three times, achieved the review goal!", "https://oceanus.me/image/getbadgeimage/read-2.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (8, "Maestro", "Five times reading all the articles to stabilize all the knowledge.", "https://oceanus.me/image/getbadgeimage/read-3.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (9, "Grand Master", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/read-4.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (10, "shark 300", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/shark-1.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (11, "shark 600", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/shark-2.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (12, "shark 900", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/shark-3.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (13, "pipe 30", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/pipe-1.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (14, "pipe 65", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/pipe-2.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (15, "pipe 100", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/pipe-3.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (16, "memory 10", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/card-1.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (17, "memory 20", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/card-2.png");
insert into achievements (achievement_id, achievement_title, achievement_description, badge_image_url)
values (18, "memory 30", "Become a sewage system expert by reading ten times of the articles.", "https://oceanus.me/image/getbadgeimage/card-3.png");


-- initialize table games
insert into games (game_id, game_name, unlock_by_article)
values (1, "Shark vs Rubbish", 1);
insert into games (game_id, game_name, unlock_by_article)
values (2, "Suzies Toosies", 2);
insert into games (game_id, game_name, unlock_by_article)
values (3, "Clogged Memory", 6);

-- create view quiz section article
--create or replace view quiz_section_article as
--select q.quiz_id,
--      a.article_id,
--      a.article_title
--from quizzes q
--    join sections s on q.section_id = s.section_id
--    join articles a on s.article_id = a.article_id;

-- create view user quiz article records
--create or replace view user_quiz_article as
--select uqr.user_quiz_record_id,
--       uqr.username,
--       a.article_id
--from user_quiz_records uqr
--    join quizzes q on uqr.quiz_id = q.quiz_id
--    join sections s on q.section_id = s.section_id
--    join articles a on s.article_id = a.article_id
--where uqr.answer_result = true;