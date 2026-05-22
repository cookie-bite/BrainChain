const animequestions = [
    //Iconic Anime
    {
        "hasContent": False,
        "quest": "The long-running pirate adventure anime featuring Luffy and his Straw Hat crew is:",
        "choices": ["Naruto", "Bleach", "One Piece", "Fairy Tail"],
        "correct": "One Piece"
    },
    {
        "hasContent": False,
        "quest": "This classic series about a boy who turns into a giant robot is:",
        "choices": ["Dragon Ball Z", "Astro Boy", "Mobile Suit Gundam", "Neon Genesis Evangelion"],
        "correct": "Neon Genesis Evangelion"
    },
    {
        "hasContent": False,
        "quest": "The anime known for its intense battles and powerful transformations is:",
        "choices": ["Dragon Ball Z", "Naruto Shippuden", "Fullmetal Alchemist: Brotherhood", "Attack on Titan"],
        "correct": "Dragon Ball Z"
    },
    {
        "hasContent": False,
        "quest": "The popular shonen anime about a young ninja named Naruto is:",
        "choices": ["Bleach", "Fairy Tail", "One Piece", "Naruto"],
        "correct": "Naruto"
    },

    //Anime Styles
    {
        "hasContent": False,
        "quest": "Anime with a focus on magic and wizards, like 'Fairy Tail', often falls into the genre of:",
        "choices": ["Slice of life", "Shonen", "Fantasy", "Mecha"],
        "correct": "Fantasy"
    },
    {
        "hasContent": False,
        "quest": "Sports anime like 'Haikyuu!!' and 'Kuroko's Basketball' belong to the genre called:",
        "choices": ["Spokon", "Comedy", "Romance", "Thriller"],
        "correct": "Spokon"
    },
    {
        "hasContent": False,
        "quest": "Heartwarming, everyday-life anime like 'K-On!' are known as:",
        "choices": ["Slice of life", "Shonen", "Fantasy", "Mecha"],
        "correct": "Slice of life"
    },
    {
        "hasContent": False,
        "quest": "Which genre of anime often involves giant robots and futuristic battles?",
        "choices": ["Sci-fi", "Psychological", "Mecha", "Isekai"],
        "correct": "Mecha"
    },  

    //Popular Characters
    {
        "hasContent": False,
        "quest": "The lazy but powerful ninja with a signature spiky hairdo is:",
        "choices": ["Kakashi Hatake (Naruto)", "Levi Ackerman (Attack on Titan)", "Edward Elric (Fullmetal Alchemist)", "Gojo Satoru (Jujutsu Kaisen)"],
        "correct": "Kakashi Hatake (Naruto)"
    },
    {
        "hasContent": False,
        "quest": "The enthusiastic Titan slayer with a tragic past is:",
        "choices": ["Eren Yeager (Attack on Titan)", "Tanjiro Kamado (Demon Slayer)", "Naruto Uzumaki (Naruto)", "Goku (Dragon Ball Z)"],
        "correct": "Eren Yeager (Attack on Titan)"
    },
    {
        "hasContent": False,
        "quest": "The Elric brother who lost an arm and a leg is:",
        "choices": ["Edward Elric (Fullmetal Alchemist)", "Tanjiro Kamado (Demon Slayer)", "Naruto Uzumaki (Naruto)", "Monkey D. Luffy (One Piece)"],
        "correct": "Edward Elric (Fullmetal Alchemist)" 
    },
    {
        "hasContent": False,
        "quest": "The rubbery protagonist who dreams of becoming the Pirate King is:",
        "choices": ["Eren Yeager (Attack on Titan)", "Tanjiro Kamado (Demon Slayer)", "Naruto Uzumaki (Naruto)", "Monkey D. Luffy (One Piece)"],
        "correct": "Monkey D. Luffy (One Piece)" 
    },

    //Deeper Knowledge 
    {
        "hasContent": False,
        "quest": "The legendary anime studio known for films like 'Spirited Away' is:", 
        "choices": ["Madhouse", "Ufotable", "Kyoto Animation", "Studio Ghibli"],
        "correct": "Studio Ghibli"
    },
    {
        "hasContent": False,
        "quest": "'Shonen' anime typically targets what demographic?",
        "choices": ["Young girls", "Young boys", "Adult men", "Adult women"],
        "correct": "Young boys"
    }
];
const AnimeQuestions = [
    {
        hasContent: true,
        quest: 'Who is the main protagonist of "Berserk"?',
        content: 'Identify the central character in the series.',
        choices: ['Guts', 'Griffith', 'Casca', 'Judeau'],
        correct: 'Guts'
    },
    {
        hasContent: false,
        quest: 'What is the name of Guts\' signature weapon, a massive sword?',
        choices: ['Dragon Slayer', 'Eclipse', 'Behelit', 'Brand of Sacrifice'],
        correct: 'Dragon Slayer'
    },
    {
        hasContent: true,
        quest: 'Which mercenary band does Guts initially join?',
        content: 'Identify the group that plays a significant role in Guts\' early adventures.',
        choices: ['Band of the Hawk', 'God Hand', 'Black Dogs', 'Raven Raiders'],
        correct: 'Band of the Hawk'
    },
    {
        hasContent: false,
        quest: 'What is the mark on Guts\' neck that attracts demonic entities?',
        choices: ['Behelit', 'Dragon Slayer', 'Brand of Sacrifice', 'Eclipse'],
        correct: 'Brand of Sacrifice'
    },
    {
        hasContent: true,
        quest: 'Who is the charismatic leader of the Band of the Hawk?',
        content: 'Identify the character who eventually becomes a major antagonist.',
        choices: ['Guts', 'Casca', 'Griffith', 'Judeau'],
        correct: 'Griffith'
    },
    {
        hasContent: false,
        quest: 'What is the mysterious artifact that plays a pivotal role in the story, activating during an eclipse?',
        choices: ['Behelit', 'Dragon Slayer', 'Brand of Sacrifice', 'Eclipse'],
        correct: 'Behelit'
    },
    {
        hasContent: true,
        quest: 'What traumatic event occurs during the Eclipse?',
        content: 'Identify the devastating event that changes the course of the story.',
        choices: ['Griffith\'s betrayal', 'Casca\'s death', 'Band of the Hawk\'s victory', 'God Hand\'s appearance'],
        correct: 'Griffith\'s betrayal'
    },
    {
        hasContent: false,
        quest: 'What is the name of Guts\' childhood friend and love interest?',
        choices: ['Farnese', 'Isidro', 'Puck', 'Casca'],
        correct: 'Casca'
    },
    {
        hasContent: true,
        quest: 'What is the title of the first arc in the "Berserk" manga?',
        content: 'Identify the name of the initial storyline in the series.',
        choices: ['Golden Age Arc', 'Black Swordsman Arc', 'Conviction Arc', 'Millennium Falcon Arc'],
        correct: 'Black Swordsman Arc'
    },
    {
        hasContent: false,
        quest: 'What is the name of the elf companion who accompanies Guts on his journey?',
        choices: ['Farnese', 'Isidro', 'Puck', 'Casca'],
        correct: 'Puck'
    },
    {
        hasContent: true,
        quest: 'What is the cursed necklace worn by Casca?',
        content: 'Identify the significance of the necklace in the story.',
        choices: ['Moonlight Pendant', 'Eclipsed Jewel', 'Brand of Sacrifice', 'Crimson Bead'],
        correct: 'Moonlight Pendant'
    },
    {
        hasContent: false,
        quest: 'Who is the powerful, demonic being leading the God Hand?',
        choices: ['Void', 'Slan', 'Ubik', 'Conrad'],
        correct: 'Void'
    },
    {
        hasContent: true,
        quest: 'What is the source of Guts\' unyielding strength and resilience?',
        content: 'Identify the force that empowers Guts throughout the series.',
        choices: ['Berserker Armor', 'Eclipse', 'Behelit', 'Dragon Slayer'],
        correct: 'Berserker Armor'
    },
    {
        hasContent: false,
        quest: 'What is the title of the opening theme song for the 1997 anime adaptation of "Berserk"?',
        choices: ['Sign', 'Forces', 'Tell Me Why', 'Guts'],
        correct: 'Tell Me Why'
    },
    {
        hasContent: true,
        quest: 'What is the name of the demonic realm featured in "Berserk"?',
        content: 'Identify the otherworldly dimension inhabited by malevolent entities.',
        choices: ['Astral Plane', 'Netherworld', 'Abyss', 'Void Realm'],
        correct: 'Abyss'
    },
    
//These questions cover various aspects of the "Berserk" anime, including characters, plot events, and notable elements from the series.
{
    hasContent: true,
    quest: 'What is the name of the walled city that serves as the primary setting in "Attack on Titan"?',
    content: 'Identify the central location where the story unfolds.',
    choices: ['Marley', 'Paradis', 'Trost', 'Shiganshina'],
    correct: 'Paradis'
},
{
    hasContent: false,
    quest: 'What are the giant humanoid creatures threatening humanity in "Attack on Titan"?',
    choices: ['Titans', 'Colossals', 'Shifters', 'Warriors'],
    correct: 'Titans'
},
{
    hasContent: true,
    quest: 'Who is the protagonist and wielder of the Attack Titan?',
    content: 'Identify the central character with the power to transform into a Titan.',
    choices: ['Mikasa Ackerman', 'Armin Arlert', 'Eren Yeager', 'Levi Ackerman'],
    correct: 'Eren Yeager'
},
{
    hasContent: false,
    quest: 'What is the name of the elite military unit dedicated to fighting Titans?',
    choices: ['Scout Regiment', 'Garrison Regiment', 'Military Police Brigade', 'Warrior Unit'],
    correct: 'Scout Regiment'
},
{
    hasContent: true,
    quest: 'Which type of Titan possesses the ability to harden its skin?',
    content: 'Identify the unique ability of this Titan variant.',
    choices: ['Colossal Titan', 'Armored Titan', 'Female Titan', 'Jaw Titan'],
    correct: 'Armored Titan'
},
{
    hasContent: false,
    quest: 'What is the name of the colossal Titan that breaches Wall Maria in the series premiere?',
    choices: ['Colossal Titan', 'Armored Titan', 'Female Titan', 'Jaw Titan'],
    correct: 'Colossal Titan'
},
{
    hasContent: true,
    quest: 'Who is the intelligent Titan capable of transforming into a female form?',
    content: 'Identify the character associated with the Female Titan.',
    choices: ['Annie Leonhart', 'Reiner Braun', 'Bertholdt Hoover', 'Zeke Yeager'],
    correct: 'Annie Leonhart'
},
{
    hasContent: false,
    quest: 'What is the name of the district within Wall Sina where the Royal Government is located?',
    choices: ['Shiganshina', 'Trost', 'Stohess', 'Utgard'],
    correct: 'Stohess'
},
{
    hasContent: true,
    quest: 'What is the primary goal of the Survey Corps in "Attack on Titan"?',
    content: 'Identify the primary mission of the Survey Corps.',
    choices: ['Eradicate all Titans', 'Protect the Royal Family', 'Explore the world beyond the walls', 'Eliminate the Marleyans'],
    correct: 'Explore the world beyond the walls'
},
{
    hasContent: false,
    quest: 'What is the name of the district within Wall Rose where Eren, Mikasa, and Armin live?',
    choices: ['Shiganshina', 'Trost', 'Stohess', 'Utgard'],
    correct: 'Shiganshina'
},
{
    hasContent: true,
quest: 'Which Titan Shifter possesses the Beast Titan?',
content: 'Identify the character associated with the Beast Titan.',
choices: ['Zeke Yeager', 'Reiner Braun', 'Bertholdt Hoover', 'Annie Leonhart'],
correct: 'Zeke Yeager'
},
{
hasContent: false,
    quest: 'What is the military rank of Levi Ackerman, known for his exceptional combat skills?',
    choices: ['Commander', 'Captain', 'Sergeant', 'Lieutenant'],
    correct: 'Captain'
},
{
hasContent: true,
    quest: 'What is the primary weakness of Titans in "Attack on Titan"?',
    content: 'Identify the vulnerability that can be exploited to defeat Titans.',
    choices: ['Nape of the neck', 'Head', 'Heart', 'Limbs'],
    correct: 'Nape of the neck'
},
{
hasContent: false,
    quest: 'What is the name of the district within Wall Rose where the military headquarters is located?',
    choices: ['Shiganshina', 'Trost', 'Stohess', 'Utgard'],
    correct: 'Trost'
},
{
hasContent: true,
    quest: 'Who is the female Titan Shifter that infiltrates the Scout Regiment?',
    content: 'Identify the character responsible for a significant event in the series.',
    choices: ['Annie Leonhart', 'Reiner Braun', 'Bertholdt Hoover', 'Zeke Yeager'],
    correct: 'Annie Leonhart'
},
{
hasContent: false,
    quest: 'What is the name of the district within Wall Maria that experiences the initial Titan breach?',
    choices: ['Shiganshina', 'Trost', 'Stohess', 'Utgard'],
    correct: 'Shiganshina'
},
//These questions cover various aspects of "Attack on Titan," including characters, plot events, and the unique elements of the series.
{
    hasContent: false,
    quest: 'What is the name of the main protagonist in "Death Note"?',
    choices: ['L', 'Near', 'Light Yagami', 'Misa Amane'],
    correct: 'Light Yagami'
},
{
    hasContent: false,
    quest: 'What supernatural item allows its possessor to kill anyone whose name is written in it?',
    choices: ['Shinigami', 'Death Scythe', 'Soul Eater', 'Death Note'],
    correct: 'Death Note'
},
{
    hasContent: false,
    quest: 'Who is the Shinigami that drops the Death Note into the human world?',
    choices: ['Rem', 'Ryuk', 'Sidoh', 'Gelus'],
    correct: 'Ryuk'
},
{
    hasContent: false,
    quest: 'What is the alias used by Light Yagami when he takes on the role of a vigilante using the Death Note?',
    choices: ['Kira', 'L', 'Near', 'Mello'],
    correct: 'Kira'
},
{
    hasContent: false,
    quest: 'Who is the highly intelligent and enigmatic detective assigned to catch Kira?',
    choices: ['Near', 'L', 'Mello', 'Watari'],
    correct: 'L'
},
{
    hasContent: false,
    quest: 'What is the name of the Death Note owner who develops a rivalry with Light Yagami?',
    choices: ['Misa Amane', 'Near', 'L', 'Mello'],
    correct: 'Near'
},
{
    hasContent: false,
    quest: 'What rule prevents the owner of the Death Note from going to Heaven or Hell?',
    choices: ['Rule 1', 'Rule 6', 'Rule 22', 'Rule 30'],
    correct: 'Rule 30'
},
{
    hasContent: false,
    quest: 'What is the alias used by L when he communicates with the public during the Kira investigation?',
    choices: ['Kira', 'L', 'Near', 'Mello'],
    correct: 'L'
},
{
    hasContent: false,
    quest: 'What is the real name of the second Kira who develops a romantic interest in Light?',
    choices: ['Rem', 'Misa Amane', 'Takada Kiyomi', 'Higuchi Kyosuke'],
    correct: 'Misa Amane'
},
{
    hasContent: false,
    quest: 'What is the name of the Shinigami who sacrifices itself to save Misa Amane?',
    choices: ['Ryuk', 'Rem', 'Sidoh', 'Gelus'],
    correct: 'Gelus'
},
{
    hasContent: false,
    quest: 'What is the primary method of death specified in the Death Note?',
    choices: ['Heart attack', 'Drowning', 'Decapitation', 'Electrocution'],
    correct: 'Heart attack'
},
{
    hasContent: false,
    quest: 'What is the organization formed to capture Kira and investigate the Death Note?',
    choices: ['SPK', 'Mafia', 'Task Force', 'Wammy\'s House'],
    correct: 'Task Force'
},
{
    hasContent: false,
    quest: 'What alias does Mello adopt in the later part of the series?',
    choices: ['N', 'M', 'L', 'Near'],
    correct: 'M'
},
{
    hasContent: false,
    quest: 'What is the real name of the Shinigami who owns the Death Note originally intended for Sidoh?',
    choices: ['Ryuk', 'Rem', 'Sidoh', 'Gelus'],
    correct: 'Sidoh'
},
{
    hasContent: false,
    quest: 'What rule allows the Death Note owner to see the names and lifespans of individuals?',
    choices: ['Rule 3', 'Rule 6', 'Rule 8', 'Rule 16'],
    correct: 'Rule 8'
},
{
    hasContent: false,
    quest: 'What is the title of the catchy pop song performed by Misa Amane in "Death Note"?',
    choices: ['Kira Kira', 'Shinigami Love', 'Misa Misa', 'Kira\'s Lullaby'],
    correct: 'Misa Misa'
},
//These questions cover various aspects of "Death Note," including characters, plot elements, and rules associated with the Death Note.
{
    hasContent: false,
    quest: 'Who is the main protagonist in "Demon Slayer"?',
    choices: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira'],
    correct: 'Tanjiro Kamado'
},
{
    hasContent: false,
    quest: 'What is the name of Tanjiro Kamado\'s sister, who turns into a demon?',
    choices: ['Nezuko Kamado', 'Kanao Tsuyuri', 'Shinobu Kocho', 'Tamayo'],
    correct: 'Nezuko Kamado'
},
{
    hasContent: false,
    quest: 'Which breathing technique does Tanjiro primarily use in combat?',
    choices: ['Water Breathing', 'Fire Breathing', 'Thunder Breathing', 'Wind Breathing'],
    correct: 'Water Breathing'
},
{
    hasContent: false,
    quest: 'What is the name of the organization that hunts demons in "Demon Slayer"?',
    choices: ['Demon Corps', 'Hashira', 'Moonlit Hunters', 'Oniwabanshu'],
    correct: 'Demon Corps'
},
{
    hasContent: false,
    quest: 'Who is the Hashira with the Insect Hashira title?',
    choices: ['Giyu Tomioka', 'Kanao Tsuyuri', 'Shinobu Kocho', 'Tengen Uzui'],
    correct: 'Shinobu Kocho'
},
{
    hasContent: false,
    quest: 'What is the name of the demon responsible for turning Nezuko Kamado into a demon?',
    choices: ['Muzan Kibutsuji', 'Enmu', 'Rui', 'Akaza'],
    correct: 'Muzan Kibutsuji'
},
{
    hasContent: false,
    quest: 'What is the color of Tanjiro Kamado\'s sword in its original state?',
    choices: ['Black', 'Blue', 'Red', 'Green'],
    correct: 'Black'
},
{
    hasContent: false,
    quest: 'Who is Tanjiro Kamado\'s first mentor and trainer in demon slaying techniques?',
    choices: ['Giyu Tomioka', 'Kanao Tsuyuri', 'Sakonji Urokodaki', 'Tengen Uzui'],
    correct: 'Sakonji Urokodaki'
},
{
    hasContent: false,
    quest: 'What is the name of Tanjiro Kamado\'s ultimate attack?',
    choices: ['Hinokami Kagura', 'Thunderclap Flash', 'Dance of the Fire God', 'Water Wheel'],
    correct: 'Hinokami Kagura'
},
{
    hasContent: false,
    quest: 'Which Hashira is known for using the Thunder Breathing technique?',
    choices: ['Giyu Tomioka', 'Kanao Tsuyuri', 'Tengen Uzui', 'Zenitsu Agatsuma'],
    correct: 'Zenitsu Agatsuma'
},
{
    hasContent: false,
quest: 'What is the name of the demon slayer who wears a boar\'s head mask?',
choices: ['Tanjiro Kamado', 'Nezuko Kamado', 'Zenitsu Agatsuma', 'Inosuke Hashibira'],
correct: 'Inosuke Hashibira'
},
{
hasContent: false,
    quest: 'Which breathing technique does Zenitsu Agatsuma primarily use in combat?',
    choices: ['Water Breathing', 'Fire Breathing', 'Thunder Breathing', 'Wind Breathing'],
    correct: 'Thunder Breathing'
},
{
hasContent: false,
    quest: 'What is the name of the demon who manipulates spider webs and commands a family of spiders?',
    choices: ['Rui', 'Enmu', 'Akaza', 'Daki'],
    correct: 'Rui'
},
{
hasContent: false,
    quest: 'What is the rank of Kanao Tsuyuri in the Demon Slayer Corps?',
    choices: ['Hashira', 'Demon Slayer', 'Mizunoto', 'Tsuchinoto'],
    correct: 'Hashira'
},
{
hasContent: false,
    quest: 'Which Hashira is known for using the Sound Hashira title?',
    choices: ['Giyu Tomioka', 'Kanao Tsuyuri', 'Tengen Uzui', 'Mitsuri Kanroji'],
    correct: 'Tengen Uzui'
},
{
hasContent: false,
    quest: 'What is the primary goal of Tanjiro Kamado in "Demon Slayer"?',
    choices: ['Defeat Muzan Kibutsuji', 'Become the strongest Hashira', 'Find a cure for demons', 'Protect Nezuko'],
    correct: 'Defeat Muzan Kibutsuji'
},
//These questions cover various aspects of "Demon Slayer," including characters, techniques, and the demon-slaying world.
{
    hasContent: false,
    quest: 'Who is the protagonist of "One Punch Man" known for defeating opponents with a single punch?',
    choices: ['Genos', 'Saitama', 'Mumen Rider', 'Boros'],
    correct: 'Saitama'
},
{
    hasContent: false,
    quest: 'What is the hero name of Saitama in "One Punch Man"?',
    choices: ['Silver Fang', 'Caped Baldy', 'Tornado of Terror', 'Demon Cyborg'],
    correct: 'Caped Baldy'
},
{
    hasContent: false,
    quest: 'Which hero association does Saitama belong to in "One Punch Man"?',
    choices: ['Hero Association', 'Blizzard Group', 'S-Class Heroes', 'Tank Topper Army'],
    correct: 'Hero Association'
},
{
    hasContent: false,
    quest: 'What is the name of Saitama\'s disciple who seeks revenge for his family?',
    choices: ['Mumen Rider', 'Genos', 'Bang', 'King'],
    correct: 'Genos'
},
{
    hasContent: false,
    quest: 'Who is the top-ranked hero in the Hero Association\'s S-Class?',
    choices: ['Silver Fang', 'Tornado of Terror', 'Blast', 'King'],
    correct: 'Blast'
},
{
    hasContent: false,
    quest: 'What is the hero name of the top-ranked S-Class hero who is known for her psychic abilities?',
    choices: ['Silver Fang', 'Tornado of Terror', 'Metal Bat', 'Atomic Samurai'],
    correct: 'Tornado of Terror'
},
{
    hasContent: false,
    quest: 'What is the name of the organization led by the villainous Garou in "One Punch Man"?',
    choices: ['Monster Association', 'Dark Matter Thieves', 'House of Evolution', 'Parade of Monsters'],
    correct: 'Monster Association'
},
{
    hasContent: false,
    quest: 'Which hero is often seen riding a bicycle and is known for his justice?',
    choices: ['Mumen Rider', 'Bang', 'Puri-Puri Prisoner', 'Tank Top Master'],
    correct: 'Mumen Rider'
},
{
    hasContent: false,
    quest: 'What is the hero name of the top-ranked S-Class hero who is an expert martial artist?',
    choices: ['Bang', 'Metal Bat', 'Atomic Samurai', 'Watchdog Man'],
    correct: 'Bang'
},
{
    hasContent: false,
    quest: 'What is the name of the cyborg hero who seeks revenge against the Mad Cyborg?',
    choices: ['Genos', 'Metal Bat', 'Drive Knight', 'Tank Top Master'],
    correct: 'Genos'
},
{
    hasContent: false,
quest: 'What is the hero name of the top-ranked S-Class hero who is known for his gaming skills?',
choices: ['King', 'Caped Baldy', 'Metal Knight', 'Child Emperor'],
correct: 'King'
},
{
hasContent: false,
    quest: 'What is the name of the Hero Association\'s intelligence division?',
    choices: ['Blizzard Group', 'Tank Topper Army', 'S-Class Heroes', 'Child Emperor'],
    correct: 'Child Emperor'
},
{
hasContent: false,
    quest: 'What is the hero name of the top-ranked S-Class hero who is an expert swordsman?',
    choices: ['Bang', 'Metal Bat', 'Atomic Samurai', 'Watchdog Man'],
    correct: 'Atomic Samurai'
},
{
hasContent: false,
    quest: 'Who is the powerful alien conqueror defeated by Saitama during the Dark Matter Thieves invasion?',
    choices: ['Boros', 'Gouketsu', 'Melzalgald', 'Carnage Kabuto'],
    correct: 'Boros'
},
{
hasContent: false,
    quest: 'What is the hero name of the top-ranked S-Class hero who is a skilled martial artist with a bat?',
    choices: ['Metal Bat', 'Atomic Samurai', 'Watchdog Man', 'Drive Knight'],
    correct: 'Metal Bat'
},
//These questions cover various aspects of "One Punch Man," including characters, hero associations, and notable events in the series.
{
    hasContent: false,
    quest: 'Who is the main protagonist of "Goblin Slayer"?',
    choices: ['High Elf Archer', 'Priestess', 'Goblin Slayer', 'Dwarf Shaman'],
    correct: 'Goblin Slayer'
},
{
    hasContent: false,
    quest: 'What is the primary goal of Goblin Slayer?',
    choices: ['To become the strongest adventurer', 'To hunt dragons', 'To eradicate goblins', 'To find a lost artifact'],
    correct: 'To eradicate goblins'
},
{
    hasContent: false,
    quest: 'Which character serves as the healer and support member of Goblin Slayer\'s party?',
    choices: ['High Elf Archer', 'Spearman', 'Witch', 'Priestess'],
    correct: 'Priestess'
},
{
    hasContent: false,
    quest: 'What is the name of the guild where adventurers gather in "Goblin Slayer"?',
    choices: ['Silver Moon Guild', 'Adventurer\'s Alliance', 'Frontier Station', 'Adventurer\'s Guild'],
    correct: 'Adventurer\'s Guild'
},
{
    hasContent: false,
    quest: 'What is the race of the character who uses powerful magic and specializes in archery?',
    choices: ['Dwarf', 'Elf', 'Human', 'Lizardman'],
    correct: 'Elf'
},
{
    hasContent: false,
    quest: 'What is the weapon of choice for Goblin Slayer in his quest to eliminate goblins?',
    choices: ['Sword', 'Bow', 'Axe', 'Club'],
    correct: 'Sword'
},
{
    hasContent: false,
    quest: 'What is the name of the sorceress who joins Goblin Slayer\'s party?',
    choices: ['Witch', 'High Elf Archer', 'Priestess', 'Cow Girl'],
    correct: 'Witch'
},
{
    hasContent: false,
    quest: 'What event traumatized Goblin Slayer and fueled his determination to eradicate goblins?',
    choices: ['Dragon attack', 'Demon invasion', 'Goblin raid', 'Bandit ambush'],
    correct: 'Goblin raid'
},
{
    hasContent: false,
    quest: 'Which character is known for his love of alcohol and serves as a member of Goblin Slayer\'s party?',
    choices: ['High Elf Archer', 'Spearman', 'Dwarf Shaman', 'Witch'],
    correct: 'Dwarf Shaman'
},
{
    hasContent: false,
    quest: 'What is the rank of Goblin Slayer within the adventurer\'s guild?',
    choices: ['Bronze', 'Silver', 'Gold', 'Platinum'],
    correct: 'Silver'
},
{
    hasContent: false,
quest: 'What is the title given to Goblin Slayer by other adventurers due to his singular focus on goblin extermination?',
choices: ['Goblin Hunter', 'Goblin Slayer', 'Goblin Knight', 'Goblin Avenger'],
correct: 'Goblin Slayer'
},
{
hasContent: false,
    quest: 'What is the nickname of the character who is part of Goblin Slayer\'s party and wields a spear?',
    choices: ['Spearman', 'Dragon Slayer', 'Goblin Killer', 'Lancer'],
    correct: 'Spearman'
},
{
hasContent: false,
    quest: 'What type of armor is Goblin Slayer known for wearing?',
    choices: ['Plate armor', 'Chainmail', 'Leather armor', 'Robes'],
    correct: 'Plate armor'
},
{
hasContent: false,
    quest: 'What is the title given to the character who leads the adventurers and assigns quests in the guild?',
    choices: ['Guild Master', 'Adventurer Leader', 'Quest Overseer', 'Mission Commander'],
    correct: 'Guild Master'
},
{
hasContent: false,
    quest: 'What is the occupation of the character known as Cow Girl in "Goblin Slayer"?',
    choices: ['Innkeeper', 'Blacksmith', 'Merchant', 'Farmhand'],
    correct: 'Farmhand'
},
//These questions cover various aspects of "Goblin Slayer," including characters, quests, and the protagonist's mission to eliminate goblins.
{
    hasContent: false,
    quest: 'Who is the main protagonist in "One Piece" and aspires to become the Pirate King?',
    choices: ['Roronoa Zoro', 'Monkey D. Luffy', 'Nami', 'Sanji'],
    correct: 'Monkey D. Luffy'
},
{
    hasContent: false,
    quest: 'What is the name of Monkey D. Luffy\'s signature attack that stretches his body like rubber?',
    choices: ['Gomu Gomu no Rocket', 'Gomu Gomu no Elephant Gun', 'Gomu Gomu no Bazooka', 'Gomu Gomu no Pistol'],
    correct: 'Gomu Gomu no Pistol'
},
{
    hasContent: false,
    quest: 'Who is the swordsman and first member to join Monkey D. Luffy\'s crew?',
    choices: ['Nami', 'Roronoa Zoro', 'Sanji', 'Usopp'],
    correct: 'Roronoa Zoro'
},
{
    hasContent: false,
    quest: 'What is the name of the treasure sought by pirates in "One Piece" that grants the title of Pirate King?',
    choices: ['One Piece', 'Grand Line', 'Red Line', 'Raftel'],
    correct: 'One Piece'
},
{
    hasContent: false,
    quest: 'Who is the navigator of the Straw Hat Pirates and has a dream of creating a complete map of the world?',
    choices: ['Nico Robin', 'Vivi', 'Rebecca', 'Nami'],
    correct: 'Nami'
},
{
    hasContent: false,
    quest: 'What is the name of Monkey D. Luffy\'s older brother, who possesses the Mera Mera no Mi Devil Fruit?',
    choices: ['Portgas D. Ace', 'Sabo', 'Katakuri', 'Shanks'],
    correct: 'Portgas D. Ace'
},
{
    hasContent: false,
    quest: 'Which of the following is the name of Monkey D. Luffy\'s ship?',
    choices: ['Going Merry', 'Thousand Sunny', 'Red Force', 'Whitebeard'],
    correct: 'Thousand Sunny'
},
{
    hasContent: false,
    quest: 'Who is the chef of the Straw Hat Pirates and dreams of finding the All Blue?',
    choices: ['Brook', 'Sanji', 'Franky', 'Jinbe'],
    correct: 'Sanji'
},
{
    hasContent: false,
    quest: 'What is the name of Monkey D. Luffy\'s grandfather, who is a vice admiral in the Marines?',
    choices: ['Garp', 'Sengoku', 'Kizaru', 'Akainu'],
    correct: 'Garp'
},
{
    hasContent: false,
    quest: 'Who is the archaeologist of the Straw Hat Pirates with the ability to read Poneglyphs?',
    choices: ['Nico Robin', 'Vivi', 'Rebecca', 'Perona'],
    correct: 'Nico Robin'
},
{
    hasContent: false,
quest: 'What is the title of the current Pirate King in "One Piece"?',
choices: ['Gol D. Roger', 'Edward Newgate', 'Shanks', 'Monkey D. Luffy'],
correct: 'Monkey D. Luffy'
},
{
hasContent: false,
    quest: 'Who is the captain of the Red-Haired Pirates and one of the Yonko in the New World?',
    choices: ['Kaido', 'Big Mom', 'Shanks', 'Blackbeard'],
    correct: 'Shanks'
},
{
hasContent: false,
    quest: 'What is the name of the island where Luffy and his crew are separated for two years?',
    choices: ['Sabaody Archipelago', 'Drum Island', 'Water 7', 'Zou'],
    correct: 'Sabaody Archipelago'
},
{
hasContent: false,
    quest: 'Who is the shipwright of the Straw Hat Pirates and built the Thousand Sunny?',
    choices: ['Franky', 'Brook', 'Usopp', 'Jinbe'],
    correct: 'Franky'
},
{
hasContent: false,
    quest: 'What is the name of the island ruled by the Warlords of the Sea in "One Piece"?',
    choices: ['Mariejois', 'Wano Country', 'Enies Lobby', 'Baltigo'],
    correct: 'Mariejois'
},
//These questions cover various aspects of "One Piece," including characters, Devil Fruits, and the world of the Grand Line.
{
    hasContent: false,
    quest: 'Who is the main protagonist in "Naruto" and dreams of becoming the Hokage?',
    choices: ['Sasuke Uchiha', 'Naruto Uzumaki', 'Sakura Haruno', 'Kakashi Hatake'],
    correct: 'Naruto Uzumaki'
},
{
    hasContent: false,
    quest: 'What is the name of the nine-tailed fox demon sealed within Naruto?',
    choices: ['Kurama', 'Shukaku', 'Matatabi', 'Isobu'],
    correct: 'Kurama'
},
{
    hasContent: false,
    quest: 'Who is Naruto\'s rival and childhood friend?',
    choices: ['Sasuke Uchiha', 'Shikamaru Nara', 'Neji Hyuga', 'Gaara'],
    correct: 'Sasuke Uchiha'
},
{
    hasContent: false,
    quest: 'What is the name of Naruto\'s sensei and the leader of Team 7?',
    choices: ['Orochimaru', 'Jiraiya', 'Kakashi Hatake', 'Asuma Sarutobi'],
    correct: 'Kakashi Hatake'
},
{
    hasContent: false,
    quest: 'What is the village where Naruto and other ninjas reside?',
    choices: ['Hidden Sand Village', 'Hidden Leaf Village', 'Hidden Mist Village', 'Hidden Stone Village'],
    correct: 'Hidden Leaf Village'
},
{
    hasContent: false,
    quest: 'Who is the pink-haired kunoichi on Team 7?',
    choices: ['Hinata Hyuga', 'Tenten', 'Ino Yamanaka', 'Sakura Haruno'],
    correct: 'Sakura Haruno'
},
{
    hasContent: false,
    quest: 'What is the name of the ninja organization led by Orochimaru?',
    choices: ['Akatsuki', 'Root', 'Sound Village', 'White Zetsu Army'],
    correct: 'Sound Village'
},
{
    hasContent: false,
    quest: 'Who is the leader of the Akatsuki organization?',
    choices: ['Pain', 'Obito Uchiha', 'Itachi Uchiha', 'Madara Uchiha'],
    correct: 'Pain'
},
{
    hasContent: false,
    quest: 'What is the name of Naruto\'s signature jutsu that creates multiple shadow clones?',
    choices: ['Rasengan', 'Chidori', 'Kage Bunshin no Jutsu', 'Amaterasu'],
    correct: 'Kage Bunshin no Jutsu'
},
{
    hasContent: false,
    quest: 'Who is the legendary Sannin known for his perverted ways and authored "Make-Out Paradise"?',
    choices: ['Tsunade', 'Jiraiya', 'Orochimaru', 'Kabuto'],
    correct: 'Jiraiya'
},
{
    hasContent: false,
quest: 'What is the name of Sasuke Uchiha\'s ultimate Sharingan technique?',
choices: ['Amaterasu', 'Tsukuyomi', 'Susanoo', 'Chidori'],
correct: 'Susanoo'
},
{
hasContent: false,
    quest: 'What is the name of Naruto\'s son in the sequel series "Boruto: Naruto Next Generations"?',
    choices: ['Boruto Uzumaki', 'Himawari Uzumaki', 'Sarada Uchiha', 'Mitsuki'],
    correct: 'Boruto Uzumaki'
},
{
hasContent: false,
    quest: 'Who is the Fourth Hokage and Naruto\'s father?',
    choices: ['Minato Namikaze', 'Hiruzen Sarutobi', 'Tobirama Senju', 'Hashirama Senju'],
    correct: 'Minato Namikaze'
},
{
hasContent: false,
    quest: 'What is the name of the powerful ninja technique used by Itachi Uchiha to genjutsu his opponents?',
    choices: ['Amaterasu', 'Tsukuyomi', 'Susanoo', 'Chidori'],
    correct: 'Tsukuyomi'
},
{
hasContent: false,
    quest: 'Who is the mentor and sensei of Kakashi Hatake?',
    choices: ['Iruka Umino', 'Asuma Sarutobi', 'Rin Nohara', 'Minato Namikaze'],
    correct: 'Minato Namikaze'
},
//These questions cover various aspects of "Naruto," including characters, jutsu techniques, and the world of ninja villages.
{
    hasContent: false,
    quest: 'Who is the main protagonist in "Jujutsu Kaisen" and consumes Sukuna\'s fingers to protect his friends?',
    choices: ['Megumi Fushiguro', 'Satoru Gojo', 'Yuji Itadori', 'Nobara Kugisaki'],
    correct: 'Yuji Itadori'
},
{
    hasContent: false,
    quest: 'What is the name of the cursed object that contains the powerful Curse, Sukuna?',
    choices: ['Cursed Doll', 'Cursed Sword', 'Cursed Finger', 'Cursed Grimoire'],
    correct: 'Cursed Finger'
},
{
    hasContent: false,
    quest: 'Who is the mentor and teacher at Tokyo Metropolitan Magic Technical College?',
    choices: ['Suguru Geto', 'Kento Nanami', 'Satoru Gojo', 'Masamichi Yaga'],
    correct: 'Satoru Gojo'
},
{
    hasContent: false,
    quest: 'What is the name of the school attended by Yuji Itadori and his friends?',
    choices: ['Tokyo Metropolitan High School', 'Jujutsu High School', 'Zenin Academy', 'Sage University'],
    correct: 'Tokyo Metropolitan High School'
},
{
    hasContent: false,
    quest: 'What is the primary goal of the Jujutsu Sorcerer organization?',
    choices: ['Exterminate Cursed Spirits', 'Collect Cursed Objects', 'Summon Demons', 'Study Jujutsu Techniques'],
    correct: 'Exterminate Cursed Spirits'
},
{
    hasContent: false,
    quest: 'Who is the skilled Jujutsu Sorcerer and former student of Satoru Gojo?',
    choices: ['Kento Nanami', 'Maki Zenin', 'Toge Inumaki', 'Panda'],
    correct: 'Kento Nanami'
},
{
    hasContent: false,
    quest: 'What is the name of the cursed technique used by Yuji Itadori to enhance his physical abilities?',
    choices: ['Black Flash', 'Divergent Fist', 'Cursed Energy', 'Limitless Cursed Technique'],
    correct: 'Divergent Fist'
},
{
    hasContent: false,
    quest: 'Who is the third-year student and swordswoman with a strong will?',
    choices: ['Nobara Kugisaki', 'Maki Zenin', 'Suguru Geto', 'Toge Inumaki'],
    correct: 'Nobara Kugisaki'
},
{
    hasContent: false,
    quest: 'What is the name of the Cursed Womb that escapes during the Kyoto Sister School Exchange Event?',
    choices: ['Cursed Womb: Death Paintings', 'Cursed Womb: Cursed Womb: Death Birds', 'Cursed Womb: Cursed Womb: Death Vase', 'Cursed Womb: Death Crawler'],
    correct: 'Cursed Womb: Death Vase'
},
{
    hasContent: false,
    quest: 'Who is the student from Kyoto Metropolitan Curse Technical College with a cursed speech technique?',
    choices: ['Maki Zenin', 'Toge Inumaki', 'Megumi Fushiguro', 'Panda'],
    correct: 'Toge Inumaki'
},
{
    hasContent: false,
quest: 'What is the name of the Panda in "Jujutsu Kaisen"?',
choices: ['Kuma', 'Panda', 'Gorilla', 'Shiro'],
correct: 'Panda'
},
{
hasContent: false,
    quest: 'What is the cursed technique of Maki Zenin, who comes from a family of jujutsu sorcerers?',
    choices: ['Cursed Energy Manipulation', 'Cursed Tools Mastery', 'Cursed Word Manipulation', 'Cursed Corpse Technique'],
    correct: 'Cursed Tools Mastery'
},
{
hasContent: false,
    quest: 'Who is the antagonist and former ally of Satoru Gojo, aiming to reshape the world?',
    choices: ['Mahito', 'Jogo', 'Hanami', 'Geto'],
    correct: 'Geto'
},
{
hasContent: false,
    quest: 'What is the specialty of the Cursed Spirit known as Jogo?',
    choices: ['Fire Manipulation', 'Earth Manipulation', 'Water Manipulation', 'Wind Manipulation'],
    correct: 'Fire Manipulation'
},
{
hasContent: false,
    quest: 'What is the ability of the Cursed Spirit known as Mahito?',
    choices: ['Soul Manipulation', 'Body Manipulation', 'Time Manipulation', 'Space Manipulation'],
    correct: 'Body Manipulation'
},
//These questions cover various aspects of "Jujutsu Kaisen," including characters, cursed techniques, and the world of jujutsu sorcery.
{
    hasContent: false,
    quest: 'Who are the two brothers at the center of "Fullmetal Alchemist"?',
    choices: ['Edward and Alphonse Elric', 'Roy and Maes Hughes', 'Hohenheim and Envy', 'Izumi and Sig Curtis'],
    correct: 'Edward and Alphonse Elric'
},
{
    hasContent: false,
    quest: 'What is the name of the ancient science/magic used in "Fullmetal Alchemist"?',
    choices: ['Alchemy', 'Nen', 'Jutsu', 'Chakra'],
    correct: 'Alchemy'
},
{
    hasContent: false,
    quest: 'What is the forbidden practice that the Elric brothers attempt to use to bring their mother back to life?',
    choices: ['Human Transmutation', 'Resurrection Alchemy', 'Soul Fusion', 'Ethereal Resurrection'],
    correct: 'Human Transmutation'
},
{
    hasContent: false,
    quest: 'Which of the following is NOT one of the Seven Homunculi in "Fullmetal Alchemist"?',
    choices: ['Envy', 'Lust', 'Pride', 'Sloth'],
    correct: 'Sloth'
},
{
    hasContent: false,
    quest: 'What is the title given to State Alchemists in the military?',
    choices: ['Alchemy Knights', 'Transmutation Warriors', 'Homunculus Soldiers', 'Dog of the Military'],
    correct: 'Dog of the Military'
},
{
    hasContent: false,
    quest: 'Who is the Flame Alchemist and a Colonel in the military?',
    choices: ['Roy Mustang', 'Alex Louis Armstrong', 'Maes Hughes', 'Izumi Curtis'],
    correct: 'Roy Mustang'
},
{
    hasContent: false,
    quest: 'What is the name of the country where "Fullmetal Alchemist" is primarily set?',
    choices: ['Amestris', 'Ishval', 'Xing', 'Drachma'],
    correct: 'Amestris'
},
{
    hasContent: false,
    quest: 'Who is the strong and flamboyant alchemist known for his large muscles and love for his sister?',
    choices: ['Edward Elric', 'Alphonse Elric', 'Roy Mustang', 'Alex Louis Armstrong'],
    correct: 'Alex Louis Armstrong'
},
{
    hasContent: false,
    quest: 'What is the mysterious and powerful object that grants alchemists knowledge and power?',
    choices: ['Philosopher\'s Stone', 'Elixir of Life', 'Sorcerer\'s Stone', 'Stone of Wisdom'],
    correct: 'Philosopher\'s Stone'
},
{
    hasContent: false,
    quest: 'Who is the homunculus that represents the sin of greed and is known for his shield abilities?',
    choices: ['Envy', 'Ling Yao', 'Greed', 'Father'],
    correct: 'Greed'
},
{
    hasContent: false,
quest: 'What is the primary goal of the homunculus known as Father?',
choices: ['Create a new Philosopher\'s Stone', 'Conquer the world', 'Achieve immortality', 'Revive his lost family'],
correct: 'Achieve immortality'
},
{
hasContent: false,
    quest: 'What is the name of the automail mechanic who designs and repairs Edward Elric\'s automail limbs?',
    choices: ['Winry Rockbell', 'Riza Hawkeye', 'May Chang', 'Rose Thomas'],
    correct: 'Winry Rockbell'
},
{
hasContent: false,
    quest: 'Who is the homunculus that represents the sin of lust and works as a secret agent?',
    choices: ['Greed', 'Lust', 'Sloth', 'Pride'],
    correct: 'Lust'
},
{
hasContent: false,
    quest: 'What is the name of the Ishvalan warrior who seeks revenge against State Alchemists?',
    choices: ['Ling Yao', 'Scar', 'May Chang', 'Hohenheim'],
    correct: 'Scar'
},
{
hasContent: false,
    quest: 'What is the alchemical symbol on Edward Elric\'s coat?',
    choices: ['Ouroboros', 'Transmutation Circle', 'Flamel Cross', 'Homunculus Mark'],
    correct: 'Flamel Cross'
},
//These questions cover various aspects of "Fullmetal Alchemist," including characters, alchemy, and the central plot elements.
{
    hasContent: false,
    quest: 'Who is the main protagonist and a Japanese brain surgeon in "Monster"?',
    choices: ['Wolfgang Grimmer', 'Tenma Kenzou', 'Johan Liebert', 'Nina Fortner'],
    correct: 'Tenma Kenzou'
},
{
    hasContent: false,
    quest: 'What is the name of the mysterious and sociopathic antagonist in "Monster"?',
    choices: ['Inspector Lunge', 'Johan Liebert', 'Wolfgang Grimmer', 'Eva Heinemann'],
    correct: 'Johan Liebert'
},
{
    hasContent: false,
    quest: 'In which European country does most of "Monster" take place?',
    choices: ['Germany', 'France', 'Italy', 'Switzerland'],
    correct: 'Germany'
},
{
    hasContent: false,
    quest: 'What is the title of the book written by Johan Liebert that becomes a central plot point?',
    choices: ['The Red Rose Mansion', 'The Nameless Monster', 'The Book of Johan', 'The Monster without a Name'],
    correct: 'The Nameless Monster'
},
{
    hasContent: false,
    quest: 'What is the name of the orphanage where Johan and Nina Fortner grew up?',
    choices: ['Rose Mansion', 'Kinderheim 511', 'Wunderkind', 'Heidelberg Institute'],
    correct: 'Kinderheim 511'
},
{
    hasContent: false,
    quest: 'Who is the former detective turned rogue investigator pursuing Johan Liebert?',
    choices: ['Inspector Lunge', 'Detective Suk', 'Inspector Heinemann', 'Detective Becker'],
    correct: 'Inspector Lunge'
},
{
    hasContent: false,
    quest: 'What is the occupation of Tenma Kenzou before becoming a fugitive in "Monster"?',
    choices: ['Journalist', 'Pilot', 'Doctor', 'Police Officer'],
    correct: 'Doctor'
},
{
    hasContent: false,
    quest: 'What is the name of the twin sister of Johan Liebert, seeking revenge for her past?',
    choices: ['Eva Heinemann', 'Anna Liebert', 'Nina Fortner', 'Johanna Liebert'],
    correct: 'Nina Fortner'
},
{
    hasContent: false,
    quest: 'What is the significance of the Red Rose Mansion in the story of "Monster"?',
    choices: ['Johan\'s hideout', 'Nina\'s home', 'Johan\'s birthplace', 'Tenma\'s clinic'],
    correct: 'Johan\'s birthplace'
},
{
    hasContent: false,
    quest: 'What is the name of the organization experimenting on children in "Monster"?',
    choices: ['Kinderheim 511', 'The Red Rose Society', 'Heidelberg Institute', 'The Black Heart Foundation'],
    correct: 'Kinderheim 511'
},
{
    hasContent: false,
quest: 'Who is the young girl Tenma Kenzou saves from surgery, leading to his downfall?',
choices: ['Eva Heinemann', 'Nina Fortner', 'Anna Liebert', 'Johanna Liebert'],
correct: 'Anna Liebert'
},
{
hasContent: false,
    quest: 'What is the profession of Johan Liebert\'s foster parent and the head of Kinderheim 511?',
    choices: ['Psychologist', 'Priest', 'Surgeon', 'Philosopher'],
    correct: 'Surgeon'
},
{
hasContent: false,
    quest: 'What is the name of the Turkish man who befriends Tenma Kenzou during his journey?',
    choices: ['Maurice', 'Wolfgang Grimmer', 'Adolf Junkers', 'Dieter'],
    correct: 'Dieter'
},
{
hasContent: false,
    quest: 'What is the connection between Johan Liebert and the mysterious organization called "The Baby"?',
    choices: ['Johan\'s birthplace', 'Johan\'s accomplices', 'Johan\'s childhood friends', 'Johan\'s aliases'],
    correct: 'Johan\'s birthplace'
},
{
hasContent: false,
    quest: 'Who is the mentally disturbed man with a traumatic past who becomes entangled with Johan Liebert?',
    choices: ['Wolfgang Grimmer', 'Richard Braun', 'Heinrich Runge', 'Hartmann'],
    correct: 'Wolfgang Grimmer'
},
//These questions cover various aspects of the psychological thriller anime "Monster," including characters, plot details, and settings.
{
    hasContent: false,
    quest: 'Who is the protagonist of "JoJo\'s Bizarre Adventure: Stardust Crusaders"?',
    choices: ['Jotaro Kujo', 'Joseph Joestar', 'Josuke Higashikata', 'Jonathan Joestar'],
    correct: 'Jotaro Kujo'
},
{
    hasContent: false,
    quest: 'What is the mystical power that many characters possess in "JoJo\'s Bizarre Adventure"?',
    choices: ['Chakra', 'Stand', 'Hamon', 'Nen'],
    correct: 'Stand'
},
{
    hasContent: false,
    quest: 'Which Joestar family member is known for using the Ripple/Hamon energy?',
    choices: ['Jonathan Joestar', 'Jotaro Kujo', 'Joseph Joestar', 'Josuke Higashikata'],
    correct: 'Joseph Joestar'
},
{
    hasContent: false,
    quest: 'What is the primary goal of the Joestar family across generations?',
    choices: ['Collecting artifacts', 'Defeating vampires', 'Gaining political power', 'Protecting the world'],
    correct: 'Defeating vampires'
},
{
    hasContent: false,
    quest: 'Which vampire is the main antagonist in "JoJo\'s Bizarre Adventure: Phantom Blood"?',
    choices: ['Kars', 'Dio Brando', 'Enrico Pucci', 'Funny Valentine'],
    correct: 'Dio Brando'
},
{
    hasContent: false,
    quest: 'What is the name of the Stand used by Jotaro Kujo in "Stardust Crusaders"?',
    choices: ['Star Platinum', 'Silver Chariot', 'Crazy Diamond', 'The World'],
    correct: 'Star Platinum'
},
{
    hasContent: false,
    quest: 'Who is the main character in "JoJo\'s Bizarre Adventure: Diamond Is Unbreakable"?',
    choices: ['Jotaro Kujo', 'Joseph Joestar', 'Josuke Higashikata', 'Jonathan Joestar'],
    correct: 'Josuke Higashikata'
},
{
    hasContent: false,
    quest: 'Which Stand has the ability to heal injuries and restore objects to a previous state?',
    choices: ['Star Platinum', 'Crazy Diamond', 'Gold Experience', 'Killer Queen'],
    correct: 'Crazy Diamond'
},
{
    hasContent: false,
    quest: 'What is the name of the Stand used by Giorno Giovanna in "Golden Wind"?',
    choices: ['Sticky Fingers', 'King Crimson', 'Gold Experience', 'White Album'],
    correct: 'Gold Experience'
},
{
    hasContent: false,
    quest: 'In "Steel Ball Run," what is the grand prize for the cross-country horse race?',
    choices: ['Eternal life', 'A powerful Stand', 'A large sum of money', 'A wish-granting artifact'],
    correct: 'A large sum of money'
},
{
    hasContent: false,
quest: 'Who is the main antagonist in "JoJo\'s Bizarre Adventure: Steel Ball Run"?',
choices: ['Funny Valentine', 'Diego Brando', 'Gyro Zeppeli', 'Johnny Joestar'],
correct: 'Funny Valentine'
},
{
hasContent: false,
    quest: 'What is the name of the Stand that allows its user to erase time in "JoJo\'s Bizarre Adventure: Stone Ocean"?',
    choices: ['Whitesnake', 'Made in Heaven', 'C-Moon', 'Weather Report'],
    correct: 'Made in Heaven'
},
{
hasContent: false,
    quest: 'Who is the protagonist in "JoJo\'s Bizarre Adventure: Golden Wind"?',
    choices: ['Jotaro Kujo', 'Joseph Joestar', 'Josuke Higashikata', 'Giorno Giovanna'],
    correct: 'Giorno Giovanna'
},
{
hasContent: false,
    quest: 'What is the Stand used by Bruno Bucciarati in "Golden Wind"?',
    choices: ['Sticky Fingers', 'Crazy Diamond', 'The World', 'Killer Queen'],
    correct: 'Sticky Fingers'
},
{
hasContent: false,
    quest: 'In "JoJo\'s Bizarre Adventure," what family stands at the center of most story arcs?',
    choices: ['Kujo', 'Joestar', 'Higashikata', 'Zeppeli'],
    correct: 'Joestar'
},
//These questions cover various parts of "JoJo's Bizarre Adventure," including characters, Stands, and plot elements from different arcs.
{
    hasContent: false,
    quest: 'Who is the main protagonist and a self-proclaimed mad scientist in "Steins;Gate"?',
    choices: ['Rintarou Okabe', 'Kurisu Makise', 'Mayuri Shiina', 'Itaru "Daru" Hashida'],
    correct: 'Rintarou Okabe'
},
{
    hasContent: false,
    quest: 'What is the name of the time-traveling device central to the plot of "Steins;Gate"?',
    choices: ['Time Leap Machine', 'Chrono Gate', 'Temporal Displacer', 'Phone Microwave (name subject to change)'],
    correct: 'Phone Microwave (name subject to change)'
},
{
    hasContent: false,
    quest: 'What is the nickname given to Rintarou Okabe\'s alter ego, the self-proclaimed mad scientist?',
    choices: ['Dark Scientist', 'Mad Hatter', 'Hououin Kyouma', 'Chrono Wizard'],
    correct: 'Hououin Kyouma'
},
{
    hasContent: false,
    quest: 'Which character is a neuroscience researcher and becomes a central figure in the time-travel experiments?',
    choices: ['Kurisu Makise', 'Mayuri Shiina', 'Ruka Urushibara', 'Suzuha Amane'],
    correct: 'Kurisu Makise'
},
{
    hasContent: false,
    quest: 'What is the name of Rintarou Okabe\'s childhood friend and lab member who is often a victim of fate?',
    choices: ['Kurisu Makise', 'Ruka Urushibara', 'Mayuri Shiina', 'Faris NyanNyan'],
    correct: 'Mayuri Shiina'
},
{
    hasContent: false,
    quest: 'What term is used to describe the phenomenon where changing one event in the past affects other events?',
    choices: ['Butterfly Effect', 'Temporal Ripple', 'Chrono Paradox', 'Quantum Shift'],
    correct: 'Butterfly Effect'
},
{
    hasContent: false,
    quest: 'What is the organization that Rintarou Okabe and his friends inadvertently become entangled with?',
    choices: ['CERN', 'SERN', 'FERM', 'DARPA'],
    correct: 'SERN'
},
{
    hasContent: false,
    quest: 'Which character is a part-time warrior and has a significant role in the later part of "Steins;Gate"?',
    choices: ['Suzuha Amane', 'Faris NyanNyan', 'Moeka Kiryu', 'Luka Urushibara'],
    correct: 'Suzuha Amane'
},
{
    hasContent: false,
    quest: 'What is the name of the retro cafe often visited by the lab members in "Steins;Gate"?',
    choices: ['Akihabara Retro', 'MayQueen NyanNyan', 'IBN 5100 Cafe', 'Retro Temporal'],
    correct: 'MayQueen NyanNyan'
},
{
    hasContent: false,
    quest: 'What device plays a crucial role in deciphering code and uncovering the secrets of SERN?',
    choices: ['IBN 5100', 'Future Gadget #8', 'Time Leap Machine', 'D-Mail Server'],
    correct: 'IBN 5100'
},
{
    hasContent: false,
quest: 'What is the name of the virtual AI created by Kurisu Makise in "Steins;Gate"?',
choices: ['Amadeus', 'El Psy Kongroo', 'FGL', 'Synthetic Genius'],
correct: 'Amadeus'
},
{
hasContent: false,
    quest: 'Which lab member has a part-time job at the maid cafe MayQueen NyanNyan?',
    choices: ['Ruka Urushibara', 'Moeka Kiryu', 'Faris NyanNyan', 'Itaru "Daru" Hashida'],
    correct: 'Faris NyanNyan'
},
{
hasContent: false,
    quest: 'What is the event that Okabe experiences, leading to a shift in the timeline and the pursuit of Steins Gate?',
    choices: ['Operation Skuld', 'Project Valkyrie', 'Event Horizon', 'Operation Phoenix'],
    correct: 'Operation Skuld'
},
{
hasContent: false,
    quest: 'What is the message that Okabe sends to the past to warn his past self about the dangers of time travel?',
    choices: ['El Psy Kongroo', 'Rendezvous of Red and Blue Stars', 'Open the Steins Gate', 'Hououin Kyouma Forever'],
    correct: 'Rendezvous of Red and Blue Stars'
},
{
hasContent: false,
    quest: 'What is the name of the game that features the characters of "Steins;Gate" and explores alternate timelines?',
    choices: ['Steins;Gate: Linear Bounded Phenogram', 'Steins;Gate 0', 'Steins;Gate: Darling of Loving Vows', 'Steins;Gate: My Darling\'s Embrace'],
    correct: 'Steins;Gate: My Darling\'s Embrace'
},
//These questions cover various aspects of "Steins;Gate," including characters, plot elements, and the science fiction concepts central to the series.
{
    hasContent: false,
    quest: 'Who is the main protagonist of "Tokyo Ghoul"?',
    choices: ['Ken Kaneki', 'Touka Kirishima', 'Haise Sasaki', 'Rize Kamishiro'],
    correct: 'Ken Kaneki'
},
{
    hasContent: false,
    quest: 'What is the name of the coffee shop run by Anteiku in "Tokyo Ghoul"?',
    choices: ['Hinami Cafe', 'Reaper Coffee', 'Ghoul Grind', 'Anteiku Cafe'],
    correct: 'Anteiku Cafe'
},
{
    hasContent: false,
    quest: 'In the world of "Tokyo Ghoul," what are beings that consume human flesh called?',
    choices: ['Vampires', 'Ghouls', 'Demons', 'Cannibals'],
    correct: 'Ghouls'
},
{
    hasContent: false,
    quest: 'What part of Ken Kaneki\'s body is transplanted with ghoul organs, turning him into a half-ghoul?',
    choices: ['Eye', 'Arm', 'Leg', 'Heart'],
    correct: 'Eye'
},
{
    hasContent: false,
    quest: 'Who is the leader of the ghoul gang Aogiri Tree in "Tokyo Ghoul"?',
    choices: ['Rize Kamishiro', 'Yakumo Oomori', 'Eto Yoshimura', 'Ayato Kirishima'],
    correct: 'Eto Yoshimura'
},
{
    hasContent: false,
    quest: 'What is the special ability possessed by ghouls in "Tokyo Ghoul"?',
    choices: ['Telekinesis', 'Regeneration', 'Invisibility', 'Teleportation'],
    correct: 'Regeneration'
},
{
    hasContent: false,
    quest: 'What is the weapon primarily used by ghouls in "Tokyo Ghoul"?',
    choices: ['Sword', 'Quinque', 'Gun', 'Bow and Arrow'],
    correct: 'Quinque'
},
{
    hasContent: false,
    quest: 'Who is Ken Kaneki\'s best friend and roommate at the beginning of the series?',
    choices: ['Hideyoshi Nagachika', 'Touka Kirishima', 'Ayato Kirishima', 'Nishiki Nishio'],
    correct: 'Hideyoshi Nagachika'
},
{
    hasContent: false,
    quest: 'What is the government organization dedicated to dealing with ghoul-related incidents in "Tokyo Ghoul"?',
    choices: ['CCG (Commission of Counter Ghoul)', 'CTF (Counter Terror Force)', 'GDA (Ghoul Defense Agency)', 'Bureau of Ghoul Affairs'],
    correct: 'CCG (Commission of Counter Ghoul)'
},
{
    hasContent: false,
    quest: 'What is the mask worn by ghouls to hide their identity and protect themselves?',
    choices: ['Phantom Mask', 'Ghoul Mask', 'Kagune Mask', 'Centipede Mask'],
    correct: 'Ghoul Mask'
},
{
    hasContent: false,
quest: 'What is the name of the cafe operated by the ghoul gang Anteiku?',
choices: ['Red Rabbit', 'Black Goat', 'White Squirrel', 'Blue Panda'],
correct: 'Anteiku Cafe'
},
{
hasContent: false,
    quest: 'Who is the powerful ghoul investigator known for his Jason mask and ruthless methods?',
    choices: ['Kishou Arima', 'Juuzou Suzuya', 'Kureo Mado', 'Shiki Kijima'],
    correct: 'Kishou Arima'
},
{
hasContent: false,
    quest: 'What is the name of the ghoul who serves as a waitress at Anteiku and has a fondness for Kaneki?',
    choices: ['Hinami Fueguchi', 'Touka Kirishima', 'Rize Kamishiro', 'Kaya Irimi'],
    correct: 'Touka Kirishima'
},
{
hasContent: false,
    quest: 'Who is the mysterious ghoul known as "Centipede" in "Tokyo Ghoul"?',
    choices: ['Ayato Kirishima', 'Eto Yoshimura', 'Nishiki Nishio', 'Ken Kaneki'],
    correct: 'Ken Kaneki'
},
{
hasContent: false,
    quest: 'What is the special ability possessed by the ghoul Eto Yoshimura?',
    choices: ['Rapid Healing', 'Telekinesis', 'Kagune Manipulation', 'Mind Control'],
    correct: 'Kagune Manipulation'
},
//These questions cover various aspects of "Tokyo Ghoul," including characters, organizations, and the unique elements of the series.
{
    hasContent: false,
    quest: 'Who is the main protagonist of "Neon Genesis Evangelion"?',
    choices: ['Shinji Ikari', 'Rei Ayanami', 'Asuka Langley Soryu', 'Gendo Ikari'],
    correct: 'Shinji Ikari'
},
{
    hasContent: false,
    quest: 'What is the name of the organization that fights against mysterious beings called Angels in "Evangelion"?',
    choices: ['NERV', 'GEHIRN', 'SEELE', 'WILLE'],
    correct: 'NERV'
},
{
    hasContent: false,
    quest: 'What is the giant bio-mechanical robot used to combat Angels in "Evangelion"?',
    choices: ['EVA-00', 'EVA-01', 'EVA-02', 'EVA-03'],
    correct: 'EVA-01'
},
{
    hasContent: false,
    quest: 'Who is the enigmatic and emotionless pilot of EVA-00?',
    choices: ['Shinji Ikari', 'Rei Ayanami', 'Asuka Langley Soryu', 'Kaworu Nagisa'],
    correct: 'Rei Ayanami'
},
{
    hasContent: false,
    quest: 'What is the name of the multinational organization secretly overseeing NERV in "Evangelion"?',
    choices: ['GEHIRN', 'SEELE', 'WILLE', 'UNITED NATIONS'],
    correct: 'SEELE'
},
{
    hasContent: false,
    quest: 'Who is the fiery and confident pilot of EVA-02 in "Neon Genesis Evangelion"?',
    choices: ['Shinji Ikari', 'Rei Ayanami', 'Asuka Langley Soryu', 'Mari Illustrious Makinami'],
    correct: 'Asuka Langley Soryu'
},
{
    hasContent: false,
    quest: 'What is the mysterious term used to describe the process of merging the souls of two beings in "Evangelion"?',
    choices: ['Instrumentality', 'Harmonization', 'Convergence', 'Synchronization'],
    correct: 'Instrumentality'
},
{
    hasContent: false,
    quest: 'Who is the father of Shinji Ikari and the commander of NERV?',
    choices: ['Kaji Ryoji', 'Kozo Fuyutsuki', 'Gendo Ikari', 'Ritsuko Akagi'],
    correct: 'Gendo Ikari'
},
{
    hasContent: false,
    quest: 'What is the name of the computer system used for piloting the Evangelion units?',
    choices: ['MAGI', 'ANGEL', 'EVA-OS', 'NERV-OS'],
    correct: 'MAGI'
},
{
    hasContent: false,
    quest: 'Which Angel is known for its ability to manipulate time and is the 6th Angel in the series?',
    choices: ['Zeruel', 'Sachiel', 'Ramiel', 'Kaworu Nagisa'],
    correct: 'Kaworu Nagisa'
},
{
    hasContent: false,
quest: 'What is the name of the mysterious organization focused on human evolution and the Human Instrumentality Project?',
choices: ['NERV', 'GEHIRN', 'SEELE', 'WILLE'],
correct: 'SEELE'
},
{
hasContent: false,
    quest: 'What is the term used for the entry plug interfaces connecting the pilot\'s mind with the Evangelion unit?',
    choices: ['LCL Fluid', 'Plug System', 'Synchronization Chamber', 'Interface Conduit'],
    correct: 'LCL Fluid'
},
{
hasContent: false,
    quest: 'Who is the cheerful and lively classmate of Shinji Ikari who later becomes a pilot in "Evangelion"?',
    choices: ['Misato Katsuragi', 'Ritsuko Akagi', 'Toji Suzuhara', 'Kensuke Aida'],
    correct: 'Toji Suzuhara'
},
{
hasContent: false,
    quest: 'What is the name of the mysterious and elusive organization led by Misato Katsuragi in "Evangelion: 3.0 You Can (Not) Redo"?',
    choices: ['NERV', 'WILLE', 'GEHIRN', 'SEELE'],
    correct: 'WILLE'
},
{
hasContent: false,
    quest: 'In "End of Evangelion," what is the alternative method proposed by Gendo Ikari to achieve Instrumentality?',
    choices: ['Third Impact', 'Human Complementation', 'Anti-Instrumentality', 'Giant Impact'],
    correct: 'Third Impact'
},
//These questions cover various aspects of "Neon Genesis Evangelion," including characters, organizations, and key plot elements from the series.
{
    hasContent: false,
    quest: 'Who is the main protagonist and a cyborg policewoman in "Ghost in the Shell"?',
    choices: ['Major Motoko Kusanagi', 'Batou', 'Chief Daisuke Aramaki', 'Togusa'],
    correct: 'Major Motoko Kusanagi'
},
{
    hasContent: false,
    quest: 'In the original "Ghost in the Shell" movie, what is the title of the artificial intelligence that becomes self-aware?',
    choices: ['The Puppet Master', 'The Laughing Man', 'Project 2501', 'The Tachikoma'],
    correct: 'The Puppet Master'
},
{
    hasContent: false,
    quest: 'What government organization does Major Motoko Kusanagi work for in "Ghost in the Shell"?',
    choices: ['Section 9', 'Public Security Section 5', 'Anti-Terrorist Unit', 'Cybercrime Prevention Unit'],
    correct: 'Section 9'
},
{
    hasContent: false,
    quest: 'Which director is responsible for the 1995 animated film adaptation of "Ghost in the Shell"?',
    choices: ['Hayao Miyazaki', 'Mamoru Oshii', 'Hideaki Anno', 'Makoto Shinkai'],
    correct: 'Mamoru Oshii'
},
{
    hasContent: false,
    quest: 'What is the term used to describe the process of transferring one\'s consciousness into a cybernetic body in "Ghost in the Shell"?',
    choices: ['Cyberization', 'Digitalization', 'Ghosting', 'Ghost Dubbing'],
    correct: 'Cyberization'
},
{
    hasContent: false,
    quest: 'What is the name of Major Motoko Kusanagi\'s trusted partner with extensive cybernetic enhancements?',
    choices: ['Batou', 'Togusa', 'Ishikawa', 'Saito'],
    correct: 'Batou'
},
{
    hasContent: false,
    quest: 'In "Ghost in the Shell: Stand Alone Complex," what is the name of the individualistic and self-aware AI?',
    choices: ['The Laughing Man', 'Project 2501', 'The Tachikoma', 'Kuze'],
    correct: 'The Laughing Man'
},
{
    hasContent: false,
    quest: 'What is the name of the powerful hacking group involved in cyber-terrorism in "Ghost in the Shell: Stand Alone Complex"?',
    choices: ['The Individual Eleven', 'Section 9', 'The Laughing Man', 'The Knights of Gjallarhorn'],
    correct: 'The Laughing Man'
},
{
    hasContent: false,
    quest: 'Which "Ghost in the Shell" installment explores the concept of the Solid State Society?',
    choices: ['Ghost in the Shell (1995)', 'Ghost in the Shell: Stand Alone Complex', 'Ghost in the Shell 2: Innocence', 'Ghost in the Shell: SAC_2045'],
    correct: 'Ghost in the Shell: SAC_2045'
},
{
    hasContent: false,
    quest: 'What is the term used to describe the collective network of interconnected individuals\' cybernetic brains in "Ghost in the Shell: SAC_2045"?',
    choices: ['Neural Network', 'Brain Cloud', 'Post-Human Network', 'The Individual Eleven'],
    correct: 'Post-Human Network'
},
{
    hasContent: false,
quest: 'In "Ghost in the Shell," what is the name of the artificial intelligence entity seeking a permanent existence by merging with Motoko Kusanagi?',
choices: ['The Puppet Master', 'Project 2501', 'The Laughing Man', 'Kuze'],
correct: 'The Puppet Master'
},
{
hasContent: false,
    quest: 'What is the title of the opening theme song for "Ghost in the Shell: Stand Alone Complex" performed by Origa?',
    choices: ['Inner Universe', 'Rise', 'Lithium Flower', 'Velveteen'],
    correct: 'Inner Universe'
},
{
hasContent: false,
    quest: 'What is the name of the network warfare specialist with distinctive tattoos and sunglasses in "Ghost in the Shell: Stand Alone Complex"?',
    choices: ['Paz', 'Borma', 'Saito', 'Ishikawa'],
    correct: 'Saito'
},
{
hasContent: false,
    quest: 'What is the term used in "Ghost in the Shell" for an individual\'s consciousness or soul?',
    choices: ['Ghost', 'Soul', 'Spirit', 'Phantom'],
    correct: 'Ghost'
},
{
hasContent: false,
    quest: 'In "Ghost in the Shell 2: Innocence," what type of beings are created as companions for humans?',
    choices: ['Dolls', 'Angels', 'Puppets', 'Automatons'],
    correct: 'Dolls'
},
//These questions cover various aspects of "Ghost in the Shell," including characters, plot elements, and themes from different installments in the franchise.
{
    hasContent: false,
    quest: 'Who directed the animated film "Spirited Away"?',
    choices: ['Hayao Miyazaki', 'Isao Takahata', 'Makoto Shinkai', 'Goro Miyazaki'],
    correct: 'Hayao Miyazaki'
},
{
    hasContent: false,
    quest: 'What is the name of the main protagonist in "Spirited Away"?',
    choices: ['Chihiro Ogino', 'Sophie Hatter', 'Kiki', 'San'],
    correct: 'Chihiro Ogino'
},
{
    hasContent: false,
    quest: 'In "Spirited Away," what does Chihiro\'s parents turn into after eating food in the spirit world?',
    choices: ['Pigs', 'Cats', 'Dogs', 'Birds'],
    correct: 'Pigs'
},
{
    hasContent: false,
    quest: 'What is the name of the magical and mysterious bathhouse in "Spirited Away"?',
    choices: ['Iron Town', 'Cat Kingdom', 'Howl\'s Moving Castle', 'Yubaba\'s Bathhouse'],
    correct: 'Yubaba\'s Bathhouse'
},
{
    hasContent: false,
    quest: 'Who is the witch and owner of the bathhouse in "Spirited Away"?',
    choices: ['Yubaba', 'Zeniba', 'Kiki', 'Fio'],
    correct: 'Yubaba'
},
{
    hasContent: false,
    quest: 'What is the name of the river spirit that Chihiro helps in "Spirited Away"?',
    choices: ['Haku', 'No-Face', 'Kamaji', 'Radish Spirit'],
    correct: 'Haku'
},
{
    hasContent: false,
    quest: 'In "Spirited Away," what is the golden seal that Haku possesses?',
    choices: ['Dragon Seal', 'Spirit Seal', 'River Seal', 'God Seal'],
    correct: 'River Seal'
},
{
    hasContent: false,
    quest: 'What is the name of the mysterious masked spirit who becomes obsessed with gold in "Spirited Away"?',
    choices: ['No-Face', 'Radish Spirit', 'Boh', 'Kamaji'],
    correct: 'No-Face'
},
{
    hasContent: false,
    quest: 'What creature does Chihiro ride to reach Zeniba\'s house in "Spirited Away"?',
    choices: ['Haku in dragon form', 'Boh', 'Magic Carpet', 'Giant Crow'],
    correct: 'Haku in dragon form'
},
{
    hasContent: false,
    quest: 'What is the name of the spider-like creature that works in the boiler room of the bathhouse?',
    choices: ['Kamaji', 'Kaonashi', 'Radish Spirit', 'Moro'],
    correct: 'Kamaji'
},
{
    hasContent: false,
quest: 'In "Spirited Away," what must Chihiro remember to escape the spirit world?',
choices: ['Her real name', 'A magic spell', 'The way back home', 'The secret password'],
correct: 'Her real name'
},
{
hasContent: false,
    quest: 'What is the name of the bouncing, hopping creature that is constantly searching for work at the bathhouse?',
    choices: ['Boh', 'Kaonashi', 'Heen', 'Chu'],
    correct: 'Heen'
},
{
hasContent: false,
    quest: 'What is the source of No-Face\'s obsession and corruption in "Spirited Away"?',
    choices: ['Gold', 'Food', 'Magic Potion', 'Music'],
    correct: 'Gold'
},
{
hasContent: false,
    quest: 'What is the role of the mysterious train in "Spirited Away"?',
    choices: ['Transporting spirits', 'Taking people to the afterlife', 'Time travel', 'A moving restaurant'],
    correct: 'Transporting spirits'
},
{
hasContent: false,
    quest: 'What does Chihiro get as a reward for remembering and using Haku\'s real name in "Spirited Away"?',
    choices: ['A magic talisman', 'A dragon egg', 'A golden key', 'A special bath token'],
    correct: 'A magic talisman'
},
//These questions cover various aspects of "Spirited Away," including characters, plot details, and the magical world created by Hayao Miyazaki.
{
    hasContent: false,
    quest: 'Who directed the animated film "Howl\'s Moving Castle"?',
    choices: ['Hayao Miyazaki', 'Isao Takahata', 'Makoto Shinkai', 'Goro Miyazaki'],
    correct: 'Hayao Miyazaki'
},
{
    hasContent: false,
    quest: 'What is the name of the main protagonist in "Howl\'s Moving Castle"?',
    choices: ['Sophie Hatter', 'Kiki', 'Chihiro Ogino', 'San'],
    correct: 'Sophie Hatter'
},
{
    hasContent: false,
    quest: 'In "Howl\'s Moving Castle," what curse is placed on Sophie by the Wicked Witch of the Waste?',
    choices: ['Old age', 'Sleeping beauty', 'Transformation into a bird', 'Invisibility'],
    correct: 'Old age'
},
{
    hasContent: false,
    quest: 'What is the name of the magical and mysterious moving castle in the film?',
    choices: ['Calcifer\'s Castle', 'Wizard\'s Fortress', 'Howl\'s Castle', 'The Mobile Citadel'],
    correct: 'Howl\'s Castle'
},
{
    hasContent: false,
    quest: 'Who is the fire demon that powers Howl\'s Moving Castle?',
    choices: ['Calcifer', 'Turnip Head', 'Heen', 'Markl'],
    correct: 'Calcifer'
},
{
    hasContent: false,
    quest: 'What is the magical ability possessed by Howl in "Howl\'s Moving Castle"?',
    choices: ['Flying', 'Teleportation', 'Shape-shifting', 'Time manipulation'],
    correct: 'Shape-shifting'
},
{
    hasContent: false,
    quest: 'In "Howl\'s Moving Castle," what does Howl often use to travel long distances?',
    choices: ['A magical door', 'A flying carpet', 'A magic broomstick', 'A magical portal'],
    correct: 'A magical door'
},
{
    hasContent: false,
    quest: 'What is the role of the character Markl in "Howl\'s Moving Castle"?',
    choices: ['Wizard\'s apprentice', 'Castle cleaner', 'Messenger for the king', 'Merchant'],
    correct: 'Wizard\'s apprentice'
},
{
    hasContent: false,
    quest: 'What kingdom is engaged in a war in the background of the story in "Howl\'s Moving Castle"?',
    choices: ['Ingary', 'Strangia', 'Flower Hill', 'Merryland'],
    correct: 'Ingary'
},
{
    hasContent: false,
    quest: 'What type of creatures are the blob-like, black minions employed by the Witch of the Waste in "Howl\'s Moving Castle"?',
    choices: ['Shadow Spirits', 'Sludge Demons', 'Blob Bats', 'Waste Wraiths'],
    correct: 'Blob Bats'
},
{
    hasContent: false,
quest: 'What does Sophie often find herself doing while inside Howl\'s Moving Castle?',
choices: ['Cleaning', 'Cooking', 'Reading', 'Sleeping'],
correct: 'Cleaning'
},
{
hasContent: false,
    quest: 'Who is the elderly sorceress that helps and mentors Sophie in "Howl\'s Moving Castle"?',
    choices: ['Madam Suliman', 'Madam Moro', 'Witch of the Waste', 'Witch of the Wilds'],
    correct: 'Madam Suliman'
},
{
hasContent: false,
    quest: 'In "Howl\'s Moving Castle," what object is capable of locating and controlling the castle?',
    choices: ['Magic Crystal', 'Pendant', 'Magic Compass', 'Golden Ring'],
    correct: 'Pendant'
},
{
hasContent: false,
    quest: 'What is the name of the walking scarecrow that helps Sophie in "Howl\'s Moving Castle"?',
    choices: ['Turnip Head', 'Cabbage Man', 'Cornelius', 'Straw Guardian'],
    correct: 'Turnip Head'
},
{
hasContent: false,
    quest: 'What is the reason behind Howl\'s frequent disappearances and transformations?',
    choices: ['Avoiding the war', 'Visiting other kingdoms', 'Searching for rare herbs', 'Meeting with a secret society'],
    correct: 'Avoiding the war'
},
//These questions cover various aspects of "Howl's Moving Castle," including characters, plot details, and the magical elements in the film directed by Hayao Miyazaki.
{
    hasContent: false,
    quest: 'Who directed the animated film "My Neighbor Totoro"?',
    choices: ['Hayao Miyazaki', 'Isao Takahata', 'Makoto Shinkai', 'Goro Miyazaki'],
    correct: 'Hayao Miyazaki'
},
{
    hasContent: false,
    quest: 'What is the name of the main characters in "My Neighbor Totoro"?',
    choices: ['Satsuke and Mei', 'Kiki and Jiji', 'Chihiro and Haku', 'Sophie and Howl'],
    correct: 'Satsuke and Mei'
},
{
    hasContent: false,
    quest: 'In "My Neighbor Totoro," what is the name of the forest spirit and the iconic character?',
    choices: ['Totoro', 'Kodama', 'No-Face', 'Jibanyan'],
    correct: 'Totoro'
},
{
    hasContent: false,
    quest: 'What is the name of the magical cat bus that appears in "My Neighbor Totoro"?',
    choices: ['Catbus', 'Cheshire Bus', 'Whisker Express', 'Feline Transporter'],
    correct: 'Catbus'
},
{
    hasContent: false,
    quest: 'What is the relationship between Satsuke and Mei in "My Neighbor Totoro"?',
    choices: ['Sisters', 'Cousins', 'Friends', 'Mother and Daughter'],
    correct: 'Sisters'
},
{
    hasContent: false,
    quest: 'In "My Neighbor Totoro," what is the name of the creature that Mei encounters in the forest?',
    choices: ['Susuwatari', 'Kodama', 'Totoro', 'Chibi Totoro'],
    correct: 'Chibi Totoro'
},
{
    hasContent: false,
    quest: 'What is the significance of the acorns in "My Neighbor Totoro"?',
    choices: ['They grow into trees', 'They are magical seeds', 'They are a currency', 'They bring good luck'],
    correct: 'They grow into trees'
},
{
    hasContent: false,
    quest: 'What is the name of the elderly neighbor who helps Satsuke and Mei in "My Neighbor Totoro"?',
    choices: ['Granny', 'Mrs. Kusakabe', 'Auntie', 'Nanny'],
    correct: 'Granny'
},
{
    hasContent: false,
    quest: 'In "My Neighbor Totoro," what does Totoro use to travel long distances?',
    choices: ['Umbrella', 'Magic Staff', 'Flying Broom', 'Leaf Boat'],
    correct: 'Umbrella'
},
{
    hasContent: false,
    quest: 'What is the name of the illness that Mei catches in "My Neighbor Totoro"?',
    choices: ['Chestnut Fever', 'Acorn Allergy', 'Forest Flu', 'White Sickness'],
    correct: 'White Sickness'
},
{
    hasContent: false,
quest: 'What is the profession of the girls\' father in "My Neighbor Totoro"?',
choices: ['University Professor', 'Architect', 'Pilot', 'Botanist'],
correct: 'University Professor'
},
{
hasContent: false,
    quest: 'In "My Neighbor Totoro," what is the purpose of the dust sprites (Susuwatari) that Mei encounters?',
    choices: ['They are spirits of the forest', 'They bring good luck', 'They clean the house', 'They guard the forest'],
    correct: 'They clean the house'
},
{
hasContent: false,
    quest: 'What is the name of the bus stop near Satsuke and Mei\'s new home in "My Neighbor Totoro"?',
    choices: ['Totoro Stop', 'Catbus Corner', 'Nekobasu Junction', 'Kusakabe Station'],
    correct: 'Totoro Stop'
},
{
hasContent: false,
    quest: 'What type of plant is the father researching in "My Neighbor Totoro"?',
    choices: ['Camphor Tree', 'Cherry Blossom', 'Magic Oak', 'Giant Sunflower'],
    correct: 'Camphor Tree'
},
{
hasContent: false,
    quest: 'What is the color of Totoro\'s fur in "My Neighbor Totoro"?',
    choices: ['Gray', 'Blue', 'White', 'Brown'],
    correct: 'Gray'
},
//These questions cover various aspects of "My Neighbor Totoro," including characters, plot details, and the enchanting world created by Hayao Miyazaki.
{
    hasContent: false,
    quest: 'Who directed the animated film "Princess Mononoke"?',
    choices: ['Hayao Miyazaki', 'Isao Takahata', 'Makoto Shinkai', 'Goro Miyazaki'],
    correct: 'Hayao Miyazaki'
},
{
    hasContent: false,
    quest: 'What is the name of the main character in "Princess Mononoke"?',
    choices: ['Ashitaka', 'San', 'Jigo', 'Moro'],
    correct: 'Ashitaka'
},
{
    hasContent: false,
    quest: 'In "Princess Mononoke," what curse befalls Ashitaka after a confrontation with a boar demon?',
    choices: ['Cursed by hatred', 'Cursed by love', 'Cursed by disease', 'Cursed by magic'],
    correct: 'Cursed by hatred'
},
{
    hasContent: false,
    quest: 'What is the name of the forest spirit in "Princess Mononoke"?',
    choices: ['Shishigami', 'Kodama', 'Totoro', 'Haku'],
    correct: 'Shishigami'
},
{
    hasContent: false,
    quest: 'What is the primary setting of "Princess Mononoke"?',
    choices: ['Ashitaka\'s Village', 'Iron Town', 'Valley of the Wind', 'Emishi Tribe'],
    correct: 'Emishi Tribe'
},
{
    hasContent: false,
    quest: 'Who is the leader of Iron Town in "Princess Mononoke"?',
    choices: ['Lady Eboshi', 'Jigo', 'Gonza', 'Okkoto'],
    correct: 'Lady Eboshi'
},
{
    hasContent: false,
    quest: 'What creatures assist Ashitaka on his journey in "Princess Mononoke"?',
    choices: ['Kodama', 'Susuwatari', 'Totoro', 'Boar Gods'],
    correct: 'Kodama'
},
{
    hasContent: false,
    quest: 'In "Princess Mononoke," what is the name of the wolf goddess and leader of the wolf tribe?',
    choices: ['Moro', 'Nago', 'Irontooth', 'Kiba'],
    correct: 'Moro'
},
{
    hasContent: false,
    quest: 'What is the main conflict in "Princess Mononoke"?',
    choices: ['Man vs. Nature', 'Man vs. Machine', 'Man vs. Spirit', 'Man vs. Time'],
    correct: 'Man vs. Nature'
},
{
    hasContent: false,
    quest: 'What is the significance of the Forest Spirit\'s head in "Princess Mononoke"?',
    choices: ['Life and death', 'Cleansing ritual', 'Source of magic', 'Communication with spirits'],
    correct: 'Life and death'
},
{
    hasContent: false,
quest: 'What weapon does Ashitaka use in "Princess Mononoke"?',
choices: ['Dagger', 'Sword', 'Bow and arrow', 'Spear'],
correct: 'Bow and arrow'
},
{
hasContent: false,
    quest: 'What animal is ridden by the character Yakul in "Princess Mononoke"?',
    choices: ['Elk', 'Horse', 'Wolf', 'Boar'],
    correct: 'Elk'
},
{
hasContent: false,
    quest: 'What is the purpose of Iron Town\'s expansion in "Princess Mononoke"?',
    choices: ['Mining iron', 'Building a fortress', 'Creating weapons', 'Harvesting timber'],
    correct: 'Mining iron'
},
{
hasContent: false,
    quest: 'Who is the enigmatic monk and tracker in "Princess Mononoke"?',
    choices: ['Jigo', 'Ashitaka', 'Gonza', 'Ashitaka'],
    correct: 'Jigo'
},
{
hasContent: false,
    quest: 'What is the fate of Lady Eboshi in "Princess Mononoke"?',
    choices: ['Redemption', 'Defeat', 'Friendship', 'Exile'],
    correct: 'Defeat'
},
//These questions cover various aspects of "Princess Mononoke," including characters, plot details, and the environmental themes presented in the film directed by Hayao Miyazaki.
{
    hasContent: false,
    quest: 'Who is the director known for works like "Your Name" and "Weathering with You"?',
    choices: ['Mamoru Hosoda', 'Hayao Miyazaki', 'Makoto Shinkai', 'Isao Takahata'],
    correct: 'Makoto Shinkai'
},
{
    hasContent: false,
    quest: 'In "Your Name," what is the supernatural phenomenon that connects Taki and Mitsuha?',
    choices: ['Time travel', 'Telepathy', 'Parallel worlds', 'Dream sharing'],
    correct: 'Body swapping'
},
{
    hasContent: false,
    quest: 'What is the central theme of "Weathering with You"?',
    choices: ['Romance', 'Science fiction', 'Supernatural powers', 'Climate change'],
    correct: 'Weather manipulation'
},
{
    hasContent: false,
    quest: 'In "5 Centimeters Per Second," what represents the distance between the main characters?',
    choices: ['Physical distance', 'Emotional separation', 'Time lapse', 'Geographical barriers'],
    correct: 'Emotional separation'
},
{
    hasContent: false,
    quest: 'What is the primary setting of "The Garden of Words"?',
    choices: ['Tokyo', 'Kyoto', 'Osaka', 'Yokohama'],
    correct: 'Tokyo'
},
{
    hasContent: false,
    quest: 'What natural element is prominently featured in Makoto Shinkai\'s works?',
    choices: ['Fire', 'Water', 'Air', 'Earth'],
    correct: 'Rain and water'
},
{
    hasContent: false,
    quest: 'What is the Japanese title of "Your Name"?',
    choices: ['Koe no Katachi', 'Kimi no Na wa.', 'Hotarubi no Mori e', 'Sen to Chihiro no Kamikakushi'],
    correct: 'Kimi no Na wa.'
},
{
    hasContent: false,
    quest: 'In "Weathering with You," what is the name of the female protagonist with the ability to control the weather?',
    choices: ['Mitsuha', 'Hina', 'Sayaka', 'Natsumi'],
    correct: 'Hina'
},
{
    hasContent: false,
    quest: 'What is the occupation of the male protagonist in "The Garden of Words"?',
    choices: ['Teacher', 'Writer', 'Chef', 'Student'],
    correct: 'Student'
},
{
    hasContent: false,
    quest: 'Which of Makoto Shinkai\'s films has a strong emphasis on the concept of fleeting moments and missed connections?',
    choices: ['5 Centimeters Per Second', 'Your Name', 'Weathering with You', 'Children Who Chase Lost Voices'],
    correct: '5 Centimeters Per Second'
},
{
    hasContent: false,
quest: 'In "Weathering with You," what is the name of the magazine where Hodaka starts working?',
choices: ['Ginza', 'Shibuya', 'Akihabara', 'Asakusa'],
correct: 'Akihabara'
},
{
hasContent: false,
    quest: 'Which celestial event plays a significant role in "Your Name"?',
    choices: ['Solar eclipse', 'Meteor shower', 'Comet sighting', 'Lunar eclipse'],
    correct: 'Meteor shower'
},
{
hasContent: false,
    quest: 'What role does the Tokyo Skytree play in "Weathering with You"?',
    choices: ['Meeting place', 'Weather control center', 'Climactic battle location', 'Romantic setting'],
    correct: 'Weather control center'
},
{
hasContent: false,
    quest: 'In "The Garden of Words," what unusual place do the main characters frequently meet during rainy days?',
    choices: ['Park', 'Library', 'Shopping mall', 'Shoe store'],
    correct: 'Shoe store'
},
{
hasContent: false,
    quest: 'What is the central theme of "Voices of a Distant Star"?',
    choices: ['Love across time and space', 'Military conflict', 'Robotic technology', 'Artificial intelligence'],
    correct: 'Love across time and space'
},
//These questions cover various aspects of Makoto Shinkai's anime works, exploring themes, characters, and the unique storytelling style he is known for.
{
    hasContent: false,
    quest: 'Who is the creator of the "Castlevania" animated series on Netflix?',
    choices: ['Warren Ellis', 'Adi Shankar', 'Sam Deats', 'Trevor Morris'],
    correct: 'Adi Shankar'
},
{
    hasContent: false,
    quest: 'What is the name of the protagonist vampire hunter in "Castlevania"?',
    choices: ['Alucard', 'Simon Belmont', 'Trevor Belmont', 'Sypha Belnades'],
    correct: 'Trevor Belmont'
},
{
    hasContent: false,
    quest: 'Which famous video game franchise serves as the inspiration for the "Castlevania" series?',
    choices: ['Final Fantasy', 'Legend of Zelda', 'Metroid', 'Castlevania'],
    correct: 'Castlevania'
},
{
    hasContent: false,
    quest: 'What is the name of Dracula\'s human wife in "Castlevania"?',
    choices: ['Lisa', 'Carmilla', 'Sypha', 'Lenore'],
    correct: 'Lisa'
},
{
    hasContent: false,
    quest: 'What is the Belmont family known for in the "Castlevania" series?',
    choices: ['Vampire hunting', 'Alchemy', 'Sorcery', 'Demon summoning'],
    correct: 'Vampire hunting'
},
{
    hasContent: false,
    quest: 'In "Castlevania," who is the vampire diplomat who seeks to broker peace between humans and vampires?',
    choices: ['Isaac', 'Hector', 'Carmilla', 'Lenore'],
    correct: 'Lenore'
},
{
    hasContent: false,
    quest: 'What is the name of the Speaker Magician who joins Trevor Belmont on his quest?',
    choices: ['Sypha Belnades', 'Grant Danasty', 'Richter Belmont', 'Sonia Belmont'],
    correct: 'Sypha Belnades'
},
{
    hasContent: false,
    quest: 'In "Castlevania," what is the name of Dracula\'s son who initially opposes him?',
    choices: ['Alucard', 'Trevor', 'Soma', 'Adrian'],
    correct: 'Alucard'
},
{
    hasContent: false,
    quest: 'What is the name of the magical artifact sought after by Dracula in "Castlevania"?',
    choices: ['Mirror of Fate', 'Crimson Stone', 'Infinity Gauntlet', 'Heart of Dracula'],
    correct: 'Crimson Stone'
},
{
    hasContent: false,
    quest: 'What is the title of the first season of "Castlevania" on Netflix?',
    choices: ['Lords of Shadow', 'Legacy of Darkness', 'Dracula\'s Curse', 'Vengeance'],
    correct: 'Dracula\'s Curse'
},
{
    hasContent: false,
quest: 'What is the name of the forgemaster who betrays Dracula and seeks revenge in "Castlevania"?',
choices: ['Hector', 'Isaac', 'Carmilla', 'Lenore'],
correct: 'Hector'
},
{
hasContent: false,
    quest: 'What is the name of the vampire queen who plots to take control of Dracula\'s territory?',
    choices: ['Carmilla', 'Lenore', 'Stryga', 'Morana'],
    correct: 'Carmilla'
},
{
hasContent: false,
    quest: 'In "Castlevania," what is the name of the vampire general with a giant hammer?',
    choices: ['Godbrand', 'Striga', 'Morana', 'Camilla'],
    correct: 'Godbrand'
},
{
hasContent: false,
    quest: 'What Belmont weapon is featured prominently in "Castlevania"?',
    choices: ['Vampire Killer', 'Crucifix', 'Holy Water', 'Morning Star'],
    correct: 'Vampire Killer'
},
{
hasContent: false,
    quest: 'What is the name of the demon who serves as the main antagonist in "Castlevania"?',
    choices: ['Satan', 'Belial', 'Asmodeus', 'Legion'],
    correct: 'Satan'
},
//These questions cover various aspects of the "Castlevania" animated series, including characters, plot details, and the video game franchise that inspired the show.
{
    hasContent: false,
    quest: 'Who is the mangaka (creator) of "Hunter x Hunter"?',
    choices: ['Yoshihiro Togashi', 'Naoko Takeuchi', 'Masashi Kishimoto', 'Eiichiro Oda'],
    correct: 'Yoshihiro Togashi'
},
{
    hasContent: false,
    quest: 'What is the primary goal of the protagonist Gon Freecss in "Hunter x Hunter"?',
    choices: ['Become a chef', 'Find his father', 'Collect all Dragon Balls', 'Become the Pirate King'],
    correct: 'Find his father'
},
{
    hasContent: false,
    quest: 'What is the name of the world in "Hunter x Hunter" where hunters, beasts, and various challenges exist?',
    choices: ['Earth Land', 'Nen World', 'Dark Continent', 'Spirit Realm'],
    correct: 'Dark Continent'
},
{
    hasContent: false,
    quest: 'What is the special power system used in "Hunter x Hunter" that allows characters to use Nen?',
    choices: ['Chakra', 'Haki', 'Nen', 'Reiatsu'],
    correct: 'Nen'
},
{
    hasContent: false,
    quest: 'Who is the best friend and ally of Gon Freecss in "Hunter x Hunter"?',
    choices: ['Leorio Paradinight', 'Kurapika', 'Hisoka', 'Killua Zoldyck'],
    correct: 'Killua Zoldyck'
},
{
    hasContent: false,
    quest: 'What is the name of the deadly tournament in "Hunter x Hunter" where Gon and his friends face various challenges?',
    choices: ['Chimera Ant War', 'Heaven\'s Arena', 'Greed Island', 'Hunter Exam'],
    correct: 'Heaven\'s Arena'
},
{
    hasContent: false,
    quest: 'What is the main ability of Hisoka, a character in "Hunter x Hunter" known for his cunning and unpredictable nature?',
    choices: ['Nen Transformation', 'Bungee Gum', 'Paper Manipulation', 'Illusion Magic'],
    correct: 'Bungee Gum'
},
{
    hasContent: false,
    quest: 'What is the occupation of Kurapika in "Hunter x Hunter"?',
    choices: ['Hunter', 'Blacklist Hunter', 'Assassin', 'Doctor'],
    correct: 'Blacklist Hunter'
},
{
    hasContent: false,
    quest: 'In "Hunter x Hunter," what is the name of the dangerous species that poses a threat to humanity?',
    choices: ['Chimera Ants', 'Zoldyck Beasts', 'Spirit Beasts', 'Nen Beasts'],
    correct: 'Chimera Ants'
},
{
    hasContent: false,
    quest: 'What is the name of the mysterious island in "Hunter x Hunter" where Gon and his friends play the Greed Island game?',
    choices: ['Green Island', 'Treasure Island', 'Greed Island', 'Adventure Isle'],
    correct: 'Greed Island'
},
{
    hasContent: false,
quest: 'Who is the villainous character known for his love of chaos and challenging strong opponents in "Hunter x Hunter"?',
choices: ['Chrollo Lucilfer', 'Feitan Portor', 'Illumi Zoldyck', 'Hisoka'],
correct: 'Hisoka'
},
{
hasContent: false,
    quest: 'What is the name of the organization in "Hunter x Hunter" that specializes in dark and illegal activities?',
    choices: ['Hunter Association', 'Phantom Troupe', 'Zodiacs', 'V5'],
    correct: 'Phantom Troupe'
},
{
hasContent: false,
    quest: 'What is the unique ability of the character Killua Zoldyck in "Hunter x Hunter"?',
    choices: ['Godspeed', 'Invisible Chains', 'Dark Contingency', 'Thunderbolt Fist'],
    correct: 'Godspeed'
},
{
hasContent: false,
    quest: 'What is the name of the legendary game in "Hunter x Hunter" that contains dangerous challenges and hidden treasures?',
    choices: ['Gamer\'s Paradise', 'Virtual Quest', 'Greed Island', 'Hidden Oasis'],
    correct: 'Greed Island'
},
{
hasContent: false,
    quest: 'What is the condition for Gon to use his powerful ability known as "Jajanken" in "Hunter x Hunter"?',
    choices: ['Three claps', 'Rock-Paper-Scissors', 'Meditation', 'Anger'],
    correct: 'Rock-Paper-Scissors'
},
//These questions cover various aspects of "Hunter x Hunter," including characters, plot details, and the unique Nen power system in the series.
{
    hasContent: false,
    quest: 'Who is the author of the manga "Vinland Saga"?',
    choices: ['Kentaro Miura', 'Hajime Isayama', 'Yukimura Makoto', 'Masashi Kishimoto'],
    correct: 'Yukimura Makoto'
},
{
    hasContent: false,
    quest: 'What historical event serves as the backdrop for "Vinland Saga"?',
    choices: ['The Trojan War', 'The Norman Conquest', 'The Viking Age', 'The Crusades'],
    correct: 'The Viking Age'
},
{
    hasContent: false,
    quest: 'Who is the main protagonist of "Vinland Saga"?',
    choices: ['Thorkell', 'Canute', 'Leif Erikson', 'Thorfinn'],
    correct: 'Thorfinn'
},
{
    hasContent: false,
    quest: 'What is Thorfinn\'s initial motivation for seeking revenge in "Vinland Saga"?',
    choices: ['His family was killed', 'He was betrayed', 'He lost a duel', 'He was enslaved'],
    correct: 'His father was killed'
},
{
    hasContent: false,
    quest: 'What is the name of Thors, Thorfinn\'s father, legendary warship in "Vinland Saga"?',
    choices: ['Drakkar', 'Longship', 'The Serpent', 'Swordfish'],
    correct: 'The Serpent'
},
{
    hasContent: false,
    quest: 'Who is the cunning and ambitious prince aiming for the throne in "Vinland Saga"?',
    choices: ['Canute', 'Askeladd', 'Thorkell', 'Floki'],
    correct: 'Canute'
},
{
    hasContent: false,
    quest: 'What mercenary group does Thorfinn initially join in "Vinland Saga"?',
    choices: ['Ravens', 'Berserkers', 'Jomsvikings', 'Wolves'],
    correct: 'Jomsvikings'
},
{
    hasContent: false,
    quest: 'What is the ultimate goal of Thorfinn\'s journey in "Vinland Saga"?',
    choices: ['Revenge', 'Power', 'Wealth', 'Love'],
    correct: 'Vinland'
},
{
    hasContent: false,
    quest: 'What is the name of the historical figure known as "The True King" in "Vinland Saga"?',
    choices: ['Sweyn Forkbeard', 'Harald Hardrada', 'Olaf Tryggvason', 'Gudrid'],
    correct: 'Sweyn Forkbeard'
},
{
    hasContent: false,
    quest: 'What is the name of Askeladd\'s band of mercenaries in "Vinland Saga"?',
    choices: ['The Band of the Hawk', 'The White Hairs', 'The Raven Clan', 'The Jomsvikings'],
    correct: 'The Raven Clan'
},
{
    hasContent: false,
quest: 'What is the name of the legendary land sought after in "Vinland Saga"?',
choices: ['Eldorado', 'Asgard', 'Vinland', 'Avalon'],
correct: 'Vinland'
},
{
hasContent: false,
    quest: 'What is the nickname given to Thorfinn due to his exceptional combat skills?',
    choices: ['Ironside', 'Dragon Slayer', 'Berserker', 'Snake Eyes'],
    correct: 'Berserker'
},
{
hasContent: false,
    quest: 'What is the name of the calm and wise explorer who tells Thorfinn about Vinland?',
    choices: ['Leif Erikson', 'Erik the Red', 'Floki', 'Harald Hardrada'],
    correct: 'Leif Erikson'
},
{
hasContent: false,
    quest: 'In "Vinland Saga," who is the historical figure responsible for uniting Norway?',
    choices: ['Canute', 'Sweyn Forkbeard', 'Harald Hardrada', 'Olaf Tryggvason'],
    correct: 'Olaf Tryggvason'
},
{
hasContent: false,
    quest: 'What is the primary theme explored in "Vinland Saga"?',
    choices: ['Love and Betrayal', 'War and Honor', 'Power and Greed', 'Exploration and Freedom'],
    correct: 'War and Honor'
},
//These questions cover various aspects of "Vinland Saga," including characters, historical context, and the quest for Vinland.
{
    hasContent: false,
    quest: 'Who is the creator of the "Baki" manga series?',
    choices: ['Masashi Kishimoto', 'Eiichiro Oda', 'Keisuke Itagaki', 'Hajime Isayama'],
    correct: 'Keisuke Itagaki'
},
{
    hasContent: false,
    quest: 'What is the full title of the anime series "Baki"?',
    choices: ['Baki the Grappler', 'Baki the Fighter', 'Baki the Martial Artist', 'Baki the Strong'],
    correct: 'Baki the Grappler'
},
{
    hasContent: false,
    quest: 'Who is the main protagonist of "Baki"?',
    choices: ['Yujiro Hanma', 'Jack Hanma', 'Baki Hanma', 'Doppo Orochi'],
    correct: 'Baki Hanma'
},
{
    hasContent: false,
    quest: 'What is the name of Baki Hanma\'s father, who is considered the strongest creature on Earth?',
    choices: ['Kaku Kaioh', 'Yujiro Hanma', 'Oliva Biscuit', 'Doppo Orochi'],
    correct: 'Yujiro Hanma'
},
{
    hasContent: false,
    quest: 'In "Baki," what underground fighting tournament does Baki participate in?',
    choices: ['Raging Fist Tournament', 'Maximum Tournament', 'Underground Arena Challenge', 'Kengan Annihilation Tournament'],
    correct: 'Maximum Tournament'
},
{
    hasContent: false,
    quest: 'What martial art style does Baki primarily practice in "Baki the Grappler"?',
    choices: ['Muay Thai', 'Karate', 'Judo', 'Shinshinkai'],
    correct: 'Shinshinkai'
},
{
    hasContent: false,
    quest: 'Who is Baki Hanma\'s longtime rival and fellow martial artist?',
    choices: ['Kaiou Retsu', 'Doppo Orochi', 'Kaoru Hanayama', 'Katsumi Orochi'],
    correct: 'Kaoru Hanayama'
},
{
    hasContent: false,
    quest: 'What is the name of the death row inmate who participates in the underground fighting tournament?',
    choices: ['Oliva Biscuit', 'Spec', 'Kaku Kaioh', 'Doyle'],
    correct: 'Spec'
},
{
    hasContent: false,
    quest: 'What martial art style is Baki Hanma\'s mother, Emi Akezawa, a master of?',
    choices: ['Aiki-jūjutsu', 'Wrestling', 'Muay Thai', 'Karate'],
    correct: 'Aiki-jūjutsu'
},
{
    hasContent: false,
    quest: 'In "Baki," what is the nickname given to Yujiro Hanma due to his overwhelming strength?',
    choices: ['Tiger King', 'Ogre', 'Dragon Emperor', 'Demon Fist'],
    correct: 'Ogre'
},
{
    hasContent: false,
quest: 'Who is the Chinese martial artist known for his Poison Hand technique in "Baki the Grappler"?',
choices: ['Retsu Kaiou', 'Katsumi Orochi', 'Kaku Kaioh', 'Dorian'],
correct: 'Dorian'
},
{
hasContent: false,
    quest: 'In "Baki," what is the name of the cord-cutting technique used by Shibukawa Goki?',
    choices: ['Sikorsky', 'Razor Edge', 'Cord-Cutter', 'Fang Bite'],
    correct: 'Cord-Cutter'
},
{
hasContent: false,
    quest: 'Who is the giant sumo wrestler and powerful martial artist in "Baki the Grappler"?',
    choices: ['Kozue Matsumoto', 'Kaku Kaioh', 'Mount Toba', 'Doyle'],
    correct: 'Mount Toba'
},
{
hasContent: false,
    quest: 'What is the secret organization that seeks to test and challenge martial artists in "Baki"?',
    choices: ['Kaiwan', 'Yasha-Zaru', 'Raitai', 'Tokugawa'],
    correct: 'Raitai'
},
{
hasContent: false,
    quest: 'What is the ultimate goal of Baki Hanma in "Baki the Grappler"?',
    choices: ['Become the World Champion', 'Defeat his father Yujiro', 'Create a new martial art style', 'Achieve enlightenment'],
    correct: 'Defeat his father Yujiro'
},
//These questions cover various aspects of the "Baki" anime, including characters, martial arts, and tournaments.
{
    hasContent: false,
    quest: 'Who is the director of the anime "Cowboy Bebop"?',
    choices: ['Shinichirō Watanabe', 'Hayao Miyazaki', 'Hideaki Anno', 'Mamoru Hosoda'],
    correct: 'Shinichirō Watanabe'
},
{
    hasContent: false,
    quest: 'What year was "Cowboy Bebop" first aired in Japan?',
    choices: ['1995', '1998', '2001', '2004'],
    correct: '1998'
},
{
    hasContent: false,
    quest: 'What is the primary genre of "Cowboy Bebop"?',
    choices: ['Romance', 'Science Fiction', 'Fantasy', 'Mecha'],
    correct: 'Science Fiction'
},
{
    hasContent: false,
    quest: 'Who is the main protagonist and bounty hunter in "Cowboy Bebop"?',
    choices: ['Jet Black', 'Faye Valentine', 'Spike Spiegel', 'Edward Wong Hau Pepelu Tivrusky IV'],
    correct: 'Spike Spiegel'
},
{
    hasContent: false,
    quest: 'What is the name of the spaceship used by the main characters in "Cowboy Bebop"?',
    choices: ['Swordfish II', 'Red Tail', 'Eagle One', 'Bebop'],
    correct: 'Swordfish II'
},
{
    hasContent: false,
    quest: 'What is the nickname of the character Edward Wong Hau Pepelu Tivrusky IV in "Cowboy Bebop"?',
    choices: ['Eddy', 'Radical Edward', 'Techie Ed', 'Space Hacker'],
    correct: 'Radical Edward'
},
{
    hasContent: false,
    quest: 'What musical genre heavily influences the soundtrack of "Cowboy Bebop"?',
    choices: ['Pop', 'Jazz', 'Rock', 'Hip Hop'],
    correct: 'Jazz'
},
{
    hasContent: false,
    quest: 'In "Cowboy Bebop," what is the name of Spike Spiegel\'s former crime syndicate?',
    choices: ['Red Dragon', 'Black Snake', 'Blue Crow', 'Green Tiger'],
    correct: 'Red Dragon'
},
{
    hasContent: false,
    quest: 'What is the bounty reward currency used in "Cowboy Bebop"?',
    choices: ['Bebop Coins', 'Woolongs', 'Einbucks', 'Spiegel Credits'],
    correct: 'Woolongs'
},
{
    hasContent: false,
    quest: 'What is the occupation of Jet Black, one of the main characters in "Cowboy Bebop"?',
    choices: ['Bounty Hunter', 'Pilot', 'Chef', 'Smuggler'],
    correct: 'Bounty Hunter'
},
{
    hasContent: false,
quest: 'What is the backstory of Faye Valentine, a character in "Cowboy Bebop"?',
choices: ['Amnesiac from a spaceship accident', 'Time-traveler from the future', 'Former ISSP officer', 'Lost princess from a distant planet'],
correct: 'Amnesiac from a spaceship accident'
},
{
hasContent: false,
    quest: 'What is the name of the criminal organization that Vicious belongs to in "Cowboy Bebop"?',
    choices: ['Syndicate', 'Viper Clan', 'Black Serpent', 'Red Eye'],
    correct: 'Syndicate'
},
{
hasContent: false,
    quest: 'What tragic event from Spike Spiegel\'s past is a central theme in "Cowboy Bebop"?',
    choices: ['Lost love', 'Family betrayal', 'Space accident', 'War trauma'],
    correct: 'Lost love'
},
{
hasContent: false,
    quest: 'What is the title of the final episode of "Cowboy Bebop"?',
    choices: ['The Real Folk Blues', 'Call Me Cowboy', 'Space Symphony', 'Bebop Finale'],
    correct: 'The Real Folk Blues'
},
{
hasContent: false,
    quest: 'Which character in "Cowboy Bebop" is known for playing the saxophone?',
    choices: ['Spike Spiegel', 'Jet Black', 'Faye Valentine', 'Edward'],
    correct: 'Jet Black'
},
//These questions cover various aspects of "Cowboy Bebop," including characters, plot details, and the unique musical influence on the series.
{
    hasContent: false,
    quest: 'Who is the creator of the "Bleach" manga series?',
    choices: ['Tite Kubo', 'Masashi Kishimoto', 'Eiichiro Oda', 'Hajime Isayama'],
    correct: 'Tite Kubo'
},
{
    hasContent: false,
    quest: 'What year did the "Bleach" anime first air in Japan?',
    choices: ['2002', '2004', '2006', '2008'],
    correct: '2004'
},
{
    hasContent: false,
    quest: 'What is the name of the protagonist in "Bleach"?',
    choices: ['Ichigo Kurosaki', 'Rukia Kuchiki', 'Renji Abarai', 'Orihime Inoue'],
    correct: 'Ichigo Kurosaki'
},
{
    hasContent: false,
    quest: 'What is the supernatural power that Ichigo possesses in "Bleach"?',
    choices: ['Alchemy', 'Chakra', 'Reiatsu', 'Quincy'],
    correct: 'Reiatsu'
},
{
    hasContent: false,
    quest: 'What is the name of the spiritual realm where Soul Reapers reside in "Bleach"?',
    choices: ['Soul Society', 'Hueco Mundo', 'World of the Living', 'Karakura Town'],
    correct: 'Soul Society'
},
{
    hasContent: false,
    quest: 'What is the Zanpakuto\'s name that Ichigo wields in "Bleach"?',
    choices: ['Sode no Shirayuki', 'Senbonzakura', 'Zangetsu', 'Hyorinmaru'],
    correct: 'Zangetsu'
},
{
    hasContent: false,
    quest: 'Who is the captain of the 13th Division in the Gotei 13 in "Bleach"?',
    choices: ['Byakuya Kuchiki', 'Toshiro Hitsugaya', 'Kenpachi Zaraki', 'Jushiro Ukitake'],
    correct: 'Jushiro Ukitake'
},
{
    hasContent: false,
    quest: 'What is the term for the masked entities that consume human souls in "Bleach"?',
    choices: ['Hollows', 'Arrancars', 'Visoreds', 'Bounts'],
    correct: 'Hollows'
},
{
    hasContent: false,
    quest: 'What organization is responsible for maintaining the balance between the living and the afterlife in "Bleach"?',
    choices: ['Gotei 13', 'Espada', 'Xcution', 'Quincy'],
    correct: 'Gotei 13'
},
{
    hasContent: false,
    quest: 'What is the final form of Aizen\'s Zanpakuto in "Bleach"?',
    choices: ['Kyoka Suigetsu', 'Zangetsu', 'Tensa Zangetsu', 'Sakanade'],
    correct: 'Kyoka Suigetsu'
},
{
    hasContent: false,
quest: 'What is the name of Ichigo\'s father in "Bleach"?',
choices: ['Isshin Kurosaki', 'Uryu Ishida', 'Yoruichi Shihouin', 'Kisuke Urahara'],
correct: 'Isshin Kurosaki'
},
{
hasContent: false,
    quest: 'What is the technique used by Byakuya Kuchiki, creating thousands of tiny blades in "Bleach"?',
    choices: ['Hado #90: Kurohitsugi', 'Senbonzakura Kageyoshi', 'Getsuga Tensho', 'Bankai'],
    correct: 'Senbonzakura Kageyoshi'
},
{
hasContent: false,
    quest: 'What is the name of the mysterious group with spiritual powers introduced in the "Bleach" series?',
    choices: ['Vizards', 'Fullbringers', 'Quincy', 'Bounts'],
    correct: 'Vizards'
},
{
hasContent: false,
    quest: 'Which Espada is known for his incredibly fast Sonído technique in "Bleach"?',
    choices: ['Grimmjow Jaegerjaquez', 'Ulquiorra Cifer', 'Nnoitra Gilga', 'Szayelaporro Grantz'],
    correct: 'Grimmjow Jaegerjaquez'
},
{
hasContent: false,
    quest: 'What is the primary goal of the Quincy in "Bleach"?',
    choices: ['Protecting the Soul Society', 'Becoming Soul Reapers', 'Achieving immortality', 'Eliminating Hollows'],
    correct: 'Eliminating Hollows'
},
//These questions cover various aspects of "Bleach," including characters, powers, and the spiritual realms in the series.
{
    hasContent: false,
    quest: 'Who is the creator of "Sword Art Online"?',
    choices: ['Reki Kawahara', 'Kazuma Kamachi', 'Yoshiki Tanaka', 'Nisio Isin'],
    correct: 'Reki Kawahara'
},
{
    hasContent: false,
    quest: 'In "Sword Art Online," what is the name of the virtual reality MMORPG that players get trapped in?',
    choices: ['Alfheim Online', 'Gun Gale Online', 'Ordinal Scale', 'Sword Art Online'],
    correct: 'Sword Art Online'
},
{
    hasContent: false,
    quest: 'What is the penalty for dying in "Sword Art Online"?',
    choices: ['Lose all items', 'Lose experience points', 'Permanent death', 'Get banned from the game'],
    correct: 'Permanent death'
},
{
    hasContent: false,
    quest: 'Who is the main protagonist in the "Sword Art Online" series?',
    choices: ['Kirito', 'Asuna', 'Klein', 'Sinon'],
    correct: 'Kirito'
},
{
    hasContent: false,
    quest: 'What floor does the "Sword Art Online" game start on?',
    choices: ['Floor 50', 'Floor 75', 'Floor 100', 'Floor 1'],
    correct: 'Floor 1'
},
{
    hasContent: false,
    quest: 'What is the name of the item in "Sword Art Online" that can revive a player who has died?',
    choices: ['Revival Crystal', 'Phoenix Feather', 'Life Gem', 'Rebirth Elixir'],
    correct: 'Revival Crystal'
},
{
    hasContent: false,
    quest: 'What is the name of Kirito\'s unique skill in "Sword Art Online"?',
    choices: ['Dual Blades', 'Shadow Step', 'Starburst Stream', 'Aincrad Assault'],
    correct: 'Dual Blades'
},
{
    hasContent: false,
    quest: 'In "Sword Art Online," what is the name of the guild led by Asuna?',
    choices: ['Black Cats of the Full Moon', 'Golden Apple', 'Laughing Coffin', 'Knights of the Blood'],
    correct: 'Knights of the Blood'
},
{
    hasContent: false,
    quest: 'What is the name of the AI that gains self-awareness in "Sword Art Online"?',
    choices: ['ALO', 'Yui', 'SAO', 'Cardinal'],
    correct: 'Yui'
},
{
    hasContent: false,
    quest: 'What is the name of the second VRMMORPG featured in "Sword Art Online"?',
    choices: ['Gun Gale Online', 'Alfheim Online', 'Ordinal Scale', 'Underworld'],
    correct: 'Alfheim Online'
},
{
    hasContent: false,
quest: 'What is the title of the first arc in "Sword Art Online" where players are trapped in the game?',
choices: ['Aincrad Arc', 'Fairy Dance Arc', 'Phantom Bullet Arc', 'Alicization Arc'],
correct: 'Aincrad Arc'
},
{
hasContent: false,
    quest: 'What is the real name of the player known as Asuna in "Sword Art Online"?',
    choices: ['Alice Zuberg', 'Suguha Kirigaya', 'Yuuki Konno', 'Asada Shino'],
    correct: 'Asuna Yuuki'
},
{
hasContent: false,
    quest: 'What is the goal of Kirito in the "Sword Art Online" series?',
    choices: ['Collect all rare items', 'Conquer all VRMMORPGs', 'Rescue Asuna', 'Become the strongest player'],
    correct: 'Rescue Asuna'
},
{
hasContent: false,
    quest: 'What is the name of the augmented reality game in "Sword Art Online"?',
    choices: ['Alfheim Online', 'Gun Gale Online', 'Ordinal Scale', 'Underworld'],
    correct: 'Ordinal Scale'
},
{
hasContent: false,
    quest: 'What is the subtitle of the third season of "Sword Art Online"?',
    choices: ['Alicization', 'Underworld', 'Project Alicization', 'War of the Underworld'],
    correct: 'War of the Underworld'
},
//These questions cover various aspects of "Sword Art Online," including characters, game mechanics, and story arcs in the series.
{
    hasContent: false,
    quest: 'Who is the creator of Pokémon?',
    choices: ['Satoshi Tajiri', 'Shigeru Miyamoto', 'Hajime Yatate', 'Hayao Miyazaki'],
    correct: 'Satoshi Tajiri'
},
{
    hasContent: false,
    quest: 'What is the name of the first Pokémon in the Pokédex?',
    choices: ['Bulbasaur', 'Pikachu', 'Charmander', 'Blastoise'],
    correct: 'Bulbasaur'
},
{
    hasContent: false,
    quest: 'Which Pokémon evolves into Pikachu?',
    choices: ['Raichu', 'Pichu', 'Jolteon', 'Eevee'],
    correct: 'Pichu'
},
{
    hasContent: false,
    quest: 'What is the name of the region featured in Pokémon Red and Blue?',
    choices: ['Johto', 'Kanto', 'Sinnoh', 'Unova'],
    correct: 'Kanto'
},
{
    hasContent: false,
    quest: 'Which legendary Pokémon is known as the trio master of the Legendary Birds?',
    choices: ['Mewtwo', 'Lugia', 'Mew', 'Articuno'],
    correct: 'Mewtwo'
},
{
    hasContent: false,
    quest: 'What type of Pokémon is Mewtwo?',
    choices: ['Psychic', 'Ghost', 'Dark', 'Dragon'],
    correct: 'Psychic'
},
{
    hasContent: false,
    quest: 'What is the name of Ash Ketchum\'s first Pokémon in the anime?',
    choices: ['Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle'],
    correct: 'Pikachu'
},
{
    hasContent: false,
    quest: 'Which Pokémon is known as the Flame Pokémon?',
    choices: ['Charmander', 'Vulpix', 'Growlithe', 'Ponyta'],
    correct: 'Charmander'
},
{
    hasContent: false,
    quest: 'In Pokémon, what type is effective against Water-type Pokémon?',
    choices: ['Fire', 'Electric', 'Grass', 'Fighting'],
    correct: 'Electric'
},
{
    hasContent: false,
    quest: 'What is the maximum level a Pokémon can reach in the games?',
    choices: ['50', '75', '100', '150'],
    correct: '100'
},
{
    hasContent: false,
quest: 'What is the name of the criminal organization in Pokémon Red and Blue?',
choices: ['Team Rocket', 'Team Magma', 'Team Aqua', 'Team Galactic'],
correct: 'Team Rocket'
},
{
hasContent: false,
    quest: 'Which Pokémon is known as the Thunderbolt Pokémon?',
    choices: ['Raichu', 'Jolteon', 'Zapdos', 'Pikachu'],
    correct: 'Zapdos'
},
{
hasContent: false,
    quest: 'What is the evolutionary line of the starter Pokémon in Pokémon Red and Blue?',
    choices: ['Bulbasaur, Ivysaur, Venusaur', 'Charmander, Charmeleon, Charizard', 'Squirtle, Wartortle, Blastoise', 'Pikachu, Raichu'],
    correct: 'Bulbasaur, Ivysaur, Venusaur'
},
{
hasContent: false,
    quest: 'Which Pokémon is known as the Water-type starter in Pokémon Red and Blue?',
    choices: ['Squirtle', 'Blastoise', 'Psyduck', 'Vaporeon'],
    correct: 'Squirtle'
},
{
hasContent: false,
    quest: 'What is the name of the Pokémon Professor in Pokémon Red and Blue?',
    choices: ['Professor Oak', 'Professor Elm', 'Professor Birch', 'Professor Rowan'],
    correct: 'Professor Oak'
},
//These questions cover various aspects of the Pokémon franchise, including characters, regions, and game mechanics.
{
    hasContent: false,
    quest: 'Who is the creator of Dragon Ball Z?',
    choices: ['Akira Toriyama', 'Hayao Miyazaki', 'Masashi Kishimoto', 'Eiichiro Oda'],
    correct: 'Akira Toriyama'
},
{
    hasContent: false,
    quest: 'What is the name of Goku\'s signature attack?',
    choices: ['Kamehameha', 'Spirit Bomb', 'Final Flash', 'Special Beam Cannon'],
    correct: 'Kamehameha'
},
{
    hasContent: false,
    quest: 'Which character is the prince of the Saiyan race?',
    choices: ['Gohan', 'Vegeta', 'Piccolo', 'Krillin'],
    correct: 'Vegeta'
},
{
    hasContent: false,
    quest: 'What is the name of Goku\'s Saiyan transformation that increases his power level?',
    choices: ['Super Saiyan', 'Great Ape', 'Super Saiyan Blue', 'Super Saiyan God'],
    correct: 'Super Saiyan'
},
{
    hasContent: false,
    quest: 'What is the name of Goku\'s wife?',
    choices: ['Chi-Chi', 'Bulma', 'Android 18', 'Videl'],
    correct: 'Chi-Chi'
},
{
    hasContent: false,
    quest: 'Who is the main antagonist in the Frieza Saga?',
    choices: ['Cell', 'Majin Buu', 'Frieza', 'Raditz'],
    correct: 'Frieza'
},
{
    hasContent: false,
    quest: 'What is the name of Gohan\'s mentor during the Cell Saga?',
    choices: ['Master Roshi', 'King Kai', 'Piccolo', 'Mr. Popo'],
    correct: 'Piccolo'
},
{
    hasContent: false,
    quest: 'What is the fusion dance performed by Goten and Trunks called?',
    choices: ['Fusion Dance', 'Metamoran Fusion', 'Potara Fusion', 'Spirit Fusion'],
    correct: 'Fusion Dance'
},
{
    hasContent: false,
    quest: 'What is the final form of Frieza?',
    choices: ['First Form', 'Second Form', 'Third Form', 'Fourth Form'],
    correct: 'Fourth Form'
},
{
    hasContent: false,
    quest: 'Who is the Supreme Kai of Universe 7?',
    choices: ['Shin', 'Kibito', 'Old Kai', 'Grand Supreme Kai'],
    correct: 'Shin'
},
{
    hasContent: false,
quest: 'What is the name of the androids created by Dr. Gero?',
choices: ['Android 17 and Android 18', 'Android 16 and Android 19', 'Android 20 and Android 21', 'Android 22 and Android 23'],
correct: 'Android 17 and Android 18'
},
{
hasContent: false,
    quest: 'What technique does Goku use to instantly teleport to any location?',
    choices: ['Instant Transmission', 'Solar Flare', 'Afterimage Technique', 'Shadow Clone Jutsu'],
    correct: 'Instant Transmission'
},
{
hasContent: false,
    quest: 'What is the name of Goku\'s home planet?',
    choices: ['Earth', 'Namek', 'Vegeta', 'Planet Arlia'],
    correct: 'Vegeta'
},
{
hasContent: false,
    quest: 'What is the name of the tournament where Goku first turns into a Super Saiyan?',
    choices: ['World Martial Arts Tournament', 'Cell Games', 'Universe 6 vs. Universe 7', 'Tournament of Power'],
    correct: 'Cell Games'
},
{
hasContent: false,
    quest: 'What is the Saiyan transformation that surpasses Super Saiyan 3?',
    choices: ['Super Saiyan God', 'Super Saiyan Blue', 'Ultra Instinct', 'Super Saiyan 4'],
    correct: 'Super Saiyan 4'
}
//These questions cover various aspects of Dragon Ball Z, including characters, transformations, and story arcs in the series.
];
const gamequestions = [
    {
        hasContent: false,
        quest: 'Who is the main protagonist of the "God of War" series?',
        choices: ['Ares', 'Kratos', 'Zeus', 'Hades'],
        correct: 'Kratos'
    },
    {
        hasContent: false,
        quest: 'Which Greek god does Kratos seek revenge against in the first "God of War" game?',
        choices: ['Apollo', 'Athena', 'Zeus', 'Poseidon'],
        correct: 'Zeus'
    },
    {
        hasContent: false,
        quest: 'What is the primary weapon Kratos wields in the "God of War" series?',
        choices: ['Sword of Olympus', 'Blades of Chaos', 'Leviathan Axe', 'Claws of Hades'],
        correct: 'Blades of Chaos'
    },
    {
        hasContent: false,
        quest: 'In which mythology does the later installment "God of War (2018)" take place?',
        choices: ['Greek', 'Norse', 'Egyptian', 'Roman'],
        correct: 'Norse'
    },
    {
        hasContent: false,
        quest: 'What is the name of Kratos\' son in "God of War (2018)"?',
        choices: ['Atreus', 'Deimos', 'Ares', 'Ajax'],
        correct: 'Atreus'
    },
    {
        hasContent: false,
        quest: 'Which god aids Kratos in his journey in "God of War (2018)"?',
        choices: ['Loki', 'Thor', 'Freyr', 'Odin'],
        correct: 'Loki'
    },
    {
        hasContent: false,
        quest: 'What is the name of Kratos\' wife who passed away before the events of "God of War (2018)"?',
        choices: ['Faye', 'Calliope', 'Athena', 'Pandora'],
        correct: 'Faye'
    },
    {
        hasContent: false,
        quest: 'In "God of War II," Kratos seeks the Sisters of Fate to change what event from his past?',
        choices: ['Killing Zeus', 'Slaying Ares', 'Saving his family', 'Obtaining godhood'],
        correct: 'Slaying Ares'
    },
    {
        hasContent: false,
        quest: 'What is the name of Kratos\' daughter in the "God of War" series?',
        choices: ['Athena', 'Lysandra', 'Calliope', 'Helios'],
        correct: 'Calliope'
    },
    {
        hasContent: false,
        quest: 'Which weapon does Kratos use to defeat the Colossus of Rhodes in the first "God of War"?',
        choices: ['Leviathan Axe', 'Blades of Chaos', 'Spartan Spear', 'Bow of Apollo'],
        correct: 'Blades of Chaos'
    },
    {
        hasContent: false,
    quest: 'What is the name of the boat Kratos uses to navigate the Lake of Nine in "God of War (2018)"?',
    choices: ['Aegir\'s Rowboat', 'Skidbladnir', 'Valkyrie Vessel', 'World Serpent Skiff'],
    correct: 'Skidbladnir'
},
{
    hasContent: false,
        quest: 'In "God of War III," who ultimately kills Zeus?',
        choices: ['Athena', 'Kratos', 'Hades', 'Apollo'],
        correct: 'Kratos'
    },
{
    hasContent: false,
        quest: 'What is the name of Kratos\' brother, who is also a Spartan warrior?',
        choices: ['Deimos', 'Spartacus', 'Perseus', 'Hercules'],
        correct: 'Deimos'
    },
{
    hasContent: false,
        quest: 'Which artifact allows Kratos to manipulate time in "God of War II"?',
        choices: ['Loom of Fate', 'Sword of Destiny', 'Hourglass of Eternity', 'Cronus\' Chronometer'],
        correct: 'Loom of Fate'
    },
{
    hasContent: false,
        quest: 'What is the name of the Spartan general who becomes Kratos\' ally in "God of War III"?',
        choices: ['Ares', 'Deimos', 'Spartacus', 'Kratos has no allies'],
        correct: 'Kratos has no allies'
    },
//These questions cover various aspects of the "God of War" game series, including characters, mythology, and key events in the games.
{
    hasContent: false,
    quest: 'Which company develops the Grand Theft Auto (GTA) series?',
    choices: ['Ubisoft', 'Rockstar Games', 'Electronic Arts', 'Bethesda'],
    correct: 'Rockstar Games'
},
{
    hasContent: false,
    quest: 'In which fictional city is the setting for Grand Theft Auto III?',
    choices: ['Los Santos', 'Liberty City', 'Vice City', 'San Fierro'],
    correct: 'Liberty City'
},
{
    hasContent: false,
    quest: 'Who is the protagonist of Grand Theft Auto: San Andreas?',
    choices: ['Niko Bellic', 'Tommy Vercetti', 'Carl Johnson', 'Trevor Philips'],
    correct: 'Carl Johnson'
},
{
    hasContent: false,
    quest: 'Which GTA game introduced the three playable protagonists: Michael, Trevor, and Franklin?',
    choices: ['GTA: Vice City', 'GTA: San Andreas', 'GTA V', 'GTA IV'],
    correct: 'GTA V'
},
{
    hasContent: false,
    quest: 'What is the name of the main character in Grand Theft Auto IV?',
    choices: ['CJ', 'Niko Bellic', 'Tommy Vercetti', 'Michael De Santa'],
    correct: 'Niko Bellic'
},
{
    hasContent: false,
    quest: 'Which fictional state is the setting for Grand Theft Auto V?',
    choices: ['San Andreas', 'Liberty State', 'Los Santos', 'Vice State'],
    correct: 'San Andreas'
},
{
    hasContent: false,
    quest: 'What is the name of the criminal organization in Grand Theft Auto: San Andreas?',
    choices: ['Ballers', 'The Lost', 'Grove Street Families', 'Varrios Los Aztecas'],
    correct: 'Grove Street Families'
},
{
    hasContent: false,
    quest: 'Which GTA game features a biker gang called "The Lost MC"?',
    choices: ['GTA: Vice City', 'GTA IV', 'GTA V', 'GTA: San Andreas'],
    correct: 'GTA IV'
},
{
    hasContent: false,
    quest: 'In GTA V, which character is a former military pilot suffering from post-traumatic stress disorder (PTSD)?',
    choices: ['Michael De Santa', 'Franklin Clinton', 'Trevor Philips', 'Lamar Davis'],
    correct: 'Trevor Philips'
},
{
    hasContent: false,
    quest: 'What is the main form of currency in the Grand Theft Auto series?',
    choices: ['Dollars', 'Pounds', 'Yen', 'GTA Dollars'],
    correct: 'Dollars'
},
{
    hasContent: false,
quest: 'Which radio station is known for hosting talk shows and humorous content in Grand Theft Auto games?',
choices: ['Los Santos Rock Radio', 'Radio Los Santos', 'West Coast Classics', 'WCTR'],
correct: 'WCTR'
},
{
hasContent: false,
    quest: 'Which GTA game allows players to enter "Cheat Codes" for various in-game effects?',
    choices: ['GTA III', 'GTA V', 'GTA: San Andreas', 'GTA IV'],
    correct: 'GTA: San Andreas'
},
{
hasContent: false,
    quest: 'What is the name of the protagonist in Grand Theft Auto: Vice City?',
    choices: ['Tommy Vercetti', 'CJ', 'Vic Vance', 'Trevor Philips'],
    correct: 'Tommy Vercetti'
},
{
hasContent: false,
    quest: 'Which GTA game is set in the 1980s and features a neon-soaked, fictional version of Miami?',
    choices: ['GTA: San Andreas', 'GTA IV', 'GTA V', 'GTA: Vice City'],
    correct: 'GTA: Vice City'
},
{
hasContent: false,
    quest: 'In Grand Theft Auto: San Andreas, what is the name of the corrupt officer in the Los Santos Police Department?',
    choices: ['Officer Tenpenny', 'Officer Pulaski', 'Officer Hernandez', 'Officer Ballas'],
    correct: 'Officer Tenpenny'
},
//These questions cover various aspects of the Grand Theft Auto (GTA) game series, including characters, settings, and notable features in the games.
{
    hasContent: false,
    quest: 'Who are the two main protagonists in "The Last of Us"?',
    choices: ['Joel and Ellie', 'Ellie and Abby', 'Joel and Tess', 'Tommy and Maria'],
    correct: 'Joel and Ellie'
},
{
    hasContent: false,
    quest: 'What is the primary threat in "The Last of Us" that turns people into aggressive, zombie-like creatures?',
    choices: ['Virus', 'Fungus', 'Bacteria', 'Radiation'],
    correct: 'Fungus'
},
{
    hasContent: false,
    quest: 'Which group in "The Last of Us" serves as the primary antagonists, using military force to control survivors?',
    choices: ['Fireflies', 'Hunters', 'Rattlers', 'Wolves'],
    correct: 'Fireflies'
},
{
    hasContent: false,
    quest: 'What is the name of Joel\'s daughter, who appears in the opening scene of "The Last of Us"?',
    choices: ['Sarah', 'Ellie', 'Tess', 'Maria'],
    correct: 'Sarah'
},
{
    hasContent: false,
    quest: 'In "The Last of Us Part II," which character becomes one of the playable protagonists alongside Ellie?',
    choices: ['Abby', 'Dina', 'Jessie', 'Joel'],
    correct: 'Abby'
},
{
    hasContent: false,
    quest: 'What is the primary mode of transportation for Joel and Ellie in "The Last of Us"?',
    choices: ['Horse', 'Car', 'Bicycle', 'Motorcycle'],
    correct: 'Horse'
},
{
    hasContent: false,
    quest: 'What is the name of the infected stage that occurs when the Cordyceps fungus completely takes over in "The Last of Us"?',
    choices: ['Clicker', 'Runner', 'Stalker', 'Bloater'],
    correct: 'Bloater'
},
{
    hasContent: false,
    quest: 'In "The Last of Us Part II," what is the name of Ellie\'s love interest?',
    choices: ['Abby', 'Dina', 'Jesse', 'Owen'],
    correct: 'Dina'
},
{
    hasContent: false,
    quest: 'Which character from "The Last of Us" serves as the leader of the Fireflies?',
    choices: ['Marlene', 'Tommy', 'Bill', 'Henry'],
    correct: 'Marlene'
},
{
    hasContent: false,
    quest: 'What is the primary weapon that Joel uses throughout "The Last of Us"?',
    choices: ['Bow and Arrow', 'Revolver', 'Shotgun', 'Pistol'],
    correct: 'Revolver'
},
{
    hasContent: false,
quest: 'Which city serves as the primary setting for "The Last of Us Part II"?',
choices: ['Boston', 'Seattle', 'Pittsburgh', 'Salt Lake City'],
correct: 'Seattle'
},
{
hasContent: false,
    quest: 'What is the primary goal of Joel and Ellie in "The Last of Us"?',
    choices: ['Find a cure for the infection', 'Escape from military control', 'Reach the Firefly base', 'Locate Joel\'s brother Tommy'],
    correct: 'Find a cure for the infection'
},
{
hasContent: false,
    quest: 'What is the name of the infected stage that is highly aggressive and reacts to sound in "The Last of Us"?',
    choices: ['Clicker', 'Runner', 'Stalker', 'Bloater'],
    correct: 'Clicker'
},
{
hasContent: false,
    quest: 'In "The Last of Us Part II," what is the name of the cult-like group that poses a threat to Ellie?',
    choices: ['Rattlers', 'WLF (Washington Liberation Front)', 'Seraphites', 'Scars'],
    correct: 'Seraphites'
},
{
hasContent: false,
    quest: 'What is the name of the weapon used by Ellie, featuring a retractable blade, in "The Last of Us Part II"?',
    choices: ['Machete', 'Switchblade', 'Shiv', 'Switchblade'],
    correct: 'Switchblade'
},
//These questions cover various aspects of "The Last of Us" game series, including characters, storylines, and key elements in the games.
{
    hasContent: false,
    quest: 'In which historical setting does the first Medal of Honor game primarily take place?',
    choices: ['World War I', 'World War II', 'Vietnam War', 'Gulf War'],
    correct: 'World War II'
},
{
    hasContent: false,
    quest: 'What is the name of the protagonist in the original Medal of Honor game?',
    choices: ['Sgt. James Patterson', 'Lt. Jimmy Patterson', 'Cpt. John Miller', 'Maj. Jack Barnes'],
    correct: 'Lt. Jimmy Patterson'
},
{
    hasContent: false,
    quest: 'Which Medal of Honor game features the character Lt. Mike Powell as the protagonist?',
    choices: ['Medal of Honor: Allied Assault', 'Medal of Honor: Frontline', 'Medal of Honor: Pacific Assault', 'Medal of Honor: Airborne'],
    correct: 'Medal of Honor: Allied Assault'
},
{
    hasContent: false,
    quest: 'What is the name of the elite special operations force that players often belong to in the Medal of Honor series?',
    choices: ['Delta Force', 'Navy SEALs', 'Green Berets', 'SAS (Special Air Service)'],
    correct: 'Delta Force'
},
{
    hasContent: false,
    quest: 'In which conflict is the 2010 Medal of Honor game set?',
    choices: ['World War II', 'Vietnam War', 'Afghanistan War', 'Gulf War'],
    correct: 'Afghanistan War'
},
{
    hasContent: false,
    quest: 'Which Medal of Honor game introduced a multiplayer mode developed by DICE, the creators of Battlefield?',
    choices: ['Medal of Honor (2010)', 'Medal of Honor: Warfighter', 'Medal of Honor: Airborne', 'Medal of Honor: European Assault'],
    correct: 'Medal of Honor (2010)'
},
{
    hasContent: false,
    quest: 'What is the name of the fictional country featured in Medal of Honor: Warfighter?',
    choices: ['Rostovia', 'Qatar', 'Isztan', 'Takistan'],
    correct: 'Isztan'
},
{
    hasContent: false,
    quest: 'In Medal of Honor: Frontline, what is the name of the character players rescue in the level "Arnhem Knights"?',
    choices: ['Anna', 'Sophie', 'Isabella', 'Manon'],
    correct: 'Isabella'
},
{
    hasContent: false,
    quest: 'Which Medal of Honor game features a mission called "D-Day" where players storm the beaches of Normandy?',
    choices: ['Medal of Honor: Airborne', 'Medal of Honor: Frontline', 'Medal of Honor (2010)', 'Medal of Honor: European Assault'],
    correct: 'Medal of Honor: Frontline'
},
{
    hasContent: false,
    quest: 'What is the title of the first expansion pack for the original Medal of Honor game?',
    choices: ['Allied Assault: Spearhead', 'Frontline: Breakthrough', 'Pacific Assault: Rising Sun', 'Airborne: Air Assault'],
    correct: 'Allied Assault: Spearhead'
},
{
    hasContent: false,
quest: 'In Medal of Honor: Allied Assault, which battle is depicted in the level "D-Day"?',
choices: ['Battle of Stalingrad', 'Invasion of Normandy', 'Battle of Midway', 'Battle of the Bulge'],
correct: 'Invasion of Normandy'
},
{
hasContent: false,
    quest: 'What is the title of the Medal of Honor game released for the Nintendo Wii, focusing on the Pacific Theater of World War II?',
    choices: ['Medal of Honor: Pacific Assault', 'Medal of Honor: Heroes', 'Medal of Honor: Vanguard', 'Medal of Honor: Rising Sun'],
    correct: 'Medal of Honor: Heroes'
},
{
hasContent: false,
    quest: 'In Medal of Honor: European Assault, which historical figure is portrayed as an enemy officer?',
    choices: ['Adolf Hitler', 'Heinrich Himmler', 'Hermann Göring', 'Erwin Rommel'],
    correct: 'Adolf Hitler'
},
{
hasContent: false,
    quest: 'Which Medal of Honor game is known for its emphasis on realism and authenticity, featuring real-life Tier 1 operators?',
    choices: ['Medal of Honor (2010)', 'Medal of Honor: Warfighter', 'Medal of Honor: Airborne', 'Medal of Honor: Rising Sun'],
    correct: 'Medal of Honor: Warfighter'
},
{
hasContent: false,
    quest: 'What is the title of the first Medal of Honor game released for the PlayStation 2?',
    choices: ['Medal of Honor: Underground', 'Medal of Honor: Frontline', 'Medal of Honor: European Assault', 'Medal of Honor: Rising Sun'],
    correct: 'Medal of Honor: Frontline'
},
//These questions cover various aspects of the Medal of Honor game series, including historical settings, characters, and notable features in the games.
{
    hasContent: false,
    quest: 'Which gaming company develops the Pro Evolution Soccer (PES) series?',
    choices: ['EA Sports', 'Konami', 'Ubisoft', '2K Sports'],
    correct: 'Konami'
},
{
    hasContent: false,
    quest: 'What is the primary rival of the Pro Evolution Soccer series in the football video game genre?',
    choices: ['FIFA', 'Football Manager', 'Rocket League', 'Top Eleven'],
    correct: 'FIFA'
},
{
    hasContent: false,
    quest: 'In the PES series, what is the name of the football simulation engine used to enhance gameplay realism?',
    choices: ['Frostbite Engine', 'Unreal Engine', 'Fox Engine', 'Anvil Engine'],
    correct: 'Fox Engine'
},
{
    hasContent: false,
    quest: 'Which legendary footballer has been featured prominently in the PES series as an ambassador and cover star?',
    choices: ['Lionel Messi', 'Cristiano Ronaldo', 'Andrés Iniesta', 'David Beckham'],
    correct: 'David Beckham'
},
{
    hasContent: false,
    quest: 'In PES, what is the name of the mode where players create and manage their own football team?',
    choices: ['Kick-Off Mode', 'MyClub', 'Master League', 'Become a Legend'],
    correct: 'MyClub'
},
{
    hasContent: false,
    quest: 'Which PES installment marked the transition to the current-generation consoles, PlayStation 4 and Xbox One?',
    choices: ['PES 2013', 'PES 2015', 'PES 2017', 'PES 2019'],
    correct: 'PES 2017'
},
{
    hasContent: false,
    quest: 'In PES, what is the name of the tournament mode where players compete in a knockout format to win the trophy?',
    choices: ['League Mode', 'Cup Mode', 'Tournament Mode', 'Champions League'],
    correct: 'Cup Mode'
},
{
    hasContent: false,
    quest: 'Which national team is known for being exclusively licensed to PES, providing authentic kits and player likenesses?',
    choices: ['Brazil', 'Germany', 'France', 'Argentina'],
    correct: 'Brazil'
},
{
    hasContent: false,
    quest: 'What is the name of the fictional football league featured in PES Master League mode?',
    choices: ['Premier League', 'La Liga', 'Serie A', 'PES League'],
    correct: 'PES League'
},
{
    hasContent: false,
    quest: 'In PES, what does the acronym "PES" stand for?',
    choices: ['Pro Evolution Soccer', 'Premier Elite Soccer', 'Play Every Season', 'Perfect Eleven Strategies'],
    correct: 'Pro Evolution Soccer'
},
{
    hasContent: false,
quest: 'Which PES game introduced the Real Touch system, enhancing player control and ball handling?',
choices: ['PES 2014', 'PES 2016', 'PES 2018', 'PES 2020'],
correct: 'PES 2017'
},
{
hasContent: false,
    quest: 'In PES, what is the name of the mode where players control a single player\'s career and guide them through matches?',
    choices: ['Kick-Off', 'Become a Legend', 'Master League', 'MyClub'],
    correct: 'Become a Legend'
},
{
hasContent: false,
    quest: 'Which PES installment introduced the Adaptive AI feature, allowing the computer-controlled teams to adapt to the player\'s style of play?',
    choices: ['PES 2015', 'PES 2017', 'PES 2019', 'PES 2021'],
    correct: 'PES 2017'
},
{
hasContent: false,
    quest: 'What is the name of the mobile version of PES, available for iOS and Android devices?',
    choices: ['PES Mobile', 'Pro Soccer Evolution', 'eFootball PES', 'PES Lite'],
    correct: 'eFootball PES'
},
{
hasContent: false,
    quest: 'Which PES game introduced the Finesse Dribble system, enhancing players\' ability to navigate through defenders with precision?',
    choices: ['PES 2018', 'PES 2019', 'PES 2020', 'PES 2021'],
    correct: 'PES 2020'
},
//These questions cover various aspects of the Pro Evolution Soccer (PES) football video game series, including gameplay features, modes, and notable editions.
{
    hasContent: false,
    quest: 'Which gaming company develops the FIFA series?',
    choices: ['EA Sports', 'Konami', 'Ubisoft', '2K Sports'],
    correct: 'EA Sports'
},
{
    hasContent: false,
    quest: 'What is the primary rival of the FIFA series in the football video game genre?',
    choices: ['Pro Evolution Soccer (PES)', 'Football Manager', 'Rocket League', 'Top Eleven'],
    correct: 'Pro Evolution Soccer (PES)'
},
{
    hasContent: false,
    quest: 'In FIFA, what is the name of the popular game mode where players build and manage their own football team?',
    choices: ['Kick-Off Mode', 'Career Mode', 'FIFA Ultimate Team (FUT)', 'The Journey'],
    correct: 'FIFA Ultimate Team (FUT)'
},
{
    hasContent: false,
    quest: 'Which legendary footballer has been featured prominently on FIFA covers and as an icon in the game?',
    choices: ['Lionel Messi', 'Cristiano Ronaldo', 'Andrés Iniesta', 'David Beckham'],
    correct: 'Cristiano Ronaldo'
},
{
    hasContent: false,
    quest: 'In FIFA, what is the name of the story-driven game mode that follows the career of Alex Hunter?',
    choices: ['The Journey', 'FIFA Ultimate Team (FUT)', 'Career Mode', 'Kick-Off Mode'],
    correct: 'The Journey'
},
{
    hasContent: false,
    quest: 'What is the name of the mobile version of FIFA, available for iOS and Android devices?',
    choices: ['FIFA Mobile', 'FIFA Lite', 'FIFA Touch', 'FIFA Go'],
    correct: 'FIFA Mobile'
},
{
    hasContent: false,
    quest: 'In FIFA, which national team is known for being exclusively licensed, providing authentic kits and player likenesses?',
    choices: ['Brazil', 'Germany', 'France', 'Argentina'],
    correct: 'Brazil'
},
{
    hasContent: false,
    quest: 'What is the name of the major international tournament mode in FIFA where players can compete with national teams?',
    choices: ['Champions League', 'Europa League', 'World Cup', 'Copa America'],
    correct: 'World Cup'
},
{
    hasContent: false,
    quest: 'Which FIFA installment introduced the Active Touch System, enhancing player control and ball physics?',
    choices: ['FIFA 18', 'FIFA 19', 'FIFA 20', 'FIFA 21'],
    correct: 'FIFA 19'
},
{
    hasContent: false,
    quest: 'In FIFA, what is the name of the fictional stadium that serves as the setting for the UEFA Champions League final?',
    choices: ['Old Trafford', 'Camp Nou', 'Santiago Bernabéu', 'Wanda Metropolitano'],
    correct: 'Wanda Metropolitano'
},
{
    hasContent: false,
quest: 'What is the official title of the football video game series previously known as Pro Evolution Soccer (PES)?',
choices: ['eFootball PES', 'eFootball PES Mobile', 'eFootball Pro Evolution Soccer', 'eFootball PES Lite'],
correct: 'eFootball PES'
},
{
hasContent: false,
    quest: 'Which FIFA game introduced the VOLTA Football mode, focusing on small-sided street and futsal games?',
    choices: ['FIFA 18', 'FIFA 19', 'FIFA 20', 'FIFA 21'],
    correct: 'FIFA 20'
},
{
hasContent: false,
    quest: 'In FIFA, what is the name of the mode where players control a single player\'s career and guide them through matches?',
    choices: ['Kick-Off Mode', 'Career Mode', 'FIFA Ultimate Team (FUT)', 'The Journey'],
    correct: 'Career Mode'
},
{
hasContent: false,
    quest: 'Which FIFA installment introduced the dynamic weather feature, affecting gameplay conditions during matches?',
    choices: ['FIFA 16', 'FIFA 17', 'FIFA 18', 'FIFA 19'],
    correct: 'FIFA 17'
},
{
hasContent: false,
    quest: 'In FIFA, what is the name of the mode where players simulate the management of a football club?',
    choices: ['Kick-Off Mode', 'Career Mode', 'FIFA Ultimate Team (FUT)', 'Pro Clubs'],
    correct: 'Career Mode'
},
//These questions cover various aspects of the FIFA and eFootball PES (now known as eFootball) football video game series, including game modes, features, and iconic players.
{
    hasContent: false,
    quest: 'Which company developed and produced the Xbox gaming console?',
    choices: ['Sony', 'Microsoft', 'Nintendo', 'Sega'],
    correct: 'Microsoft'
},
{
    hasContent: false,
    quest: 'What was the original release year of the first Xbox console?',
    choices: ['2000', '2001', '2002', '2003'],
    correct: '2001'
},
{
    hasContent: false,
    quest: 'What is the name of Microsoft\'s online gaming service for Xbox users?',
    choices: ['Xbox Live', 'Xbox Network', 'Xbox Online', 'Xbox Plus'],
    correct: 'Xbox Live'
},
{
    hasContent: false,
    quest: 'In terms of hardware, what is the successor to the Xbox One?',
    choices: ['Xbox Series S', 'Xbox Series X', 'Xbox One X', 'Xbox One S'],
    correct: 'Xbox Series X'
},
{
    hasContent: false,
    quest: 'Which Xbox console introduced the Kinect motion-sensing peripheral?',
    choices: ['Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series X'],
    correct: 'Xbox 360'
},
{
    hasContent: false,
    quest: 'What is the name of the cloud gaming service offered by Xbox that allows users to play games without downloading them?',
    choices: ['Xbox Cloud Gaming', 'Xbox Game Pass', 'Xbox Play Anywhere', 'Xbox Remote Play'],
    correct: 'Xbox Cloud Gaming'
},
{
    hasContent: false,
    quest: 'Which Xbox console is known for its focus on digital content delivery and lack of an optical disc drive?',
    choices: ['Xbox 360', 'Xbox One S', 'Xbox Series S', 'Xbox Series X'],
    correct: 'Xbox Series S'
},
{
    hasContent: false,
    quest: 'What is the name of the subscription service that provides access to a library of Xbox games on both console and PC?',
    choices: ['Xbox Gold', 'Xbox Game Pass', 'Xbox Live', 'Xbox Ultimate'],
    correct: 'Xbox Game Pass'
},
{
    hasContent: false,
    quest: 'Which Xbox console was released as a high-end variant of the Xbox One with upgraded hardware for enhanced performance?',
    choices: ['Xbox One S', 'Xbox One X', 'Xbox Series S', 'Xbox Series X'],
    correct: 'Xbox One X'
},
{
    hasContent: false,
    quest: 'In terms of sales, which Xbox console is considered one of the best-selling gaming consoles of all time?',
    choices: ['Xbox 360', 'Xbox One', 'Xbox Series X', 'Xbox'],
    correct: 'Xbox 360'
},
{
    hasContent: false,
    quest: 'What is the name of the handheld gaming console developed by Microsoft to compete with the PlayStation Portable (PSP)?',
    choices: ['Xbox Mini', 'Xbox Portable', 'Xbox Go', 'Xbox Vita'],
    correct: 'Xbox Portable'
},
{
    hasContent: false,
    quest: 'Which Xbox console marked the transition to the use of Blu-ray Disc technology for optical storage?',
    choices: ['Xbox', 'Xbox 360', 'Xbox One', 'Xbox Series X'],
    correct: 'Xbox One'
},
{
    hasContent: false,
quest: 'What is the name of the online subscription service that provides free monthly games to Xbox Live Gold members?',
choices: ['Games with Gold', 'Xbox Freebies', 'Gold Games Pass', 'Xbox Monthly Gifts'],
correct: 'Games with Gold'
},
{
hasContent: false,
    quest: 'Which Xbox console introduced the concept of backward compatibility, allowing users to play games from previous generations?',
    choices: ['Xbox 360', 'Xbox One', 'Xbox Series X', 'Xbox'],
    correct: 'Xbox One'
},
{
hasContent: false,
    quest: 'What is the name of the Xbox controller designed for accessibility, featuring customizable buttons and built-in joysticks?',
    choices: ['Xbox Elite Controller', 'Xbox Adaptive Controller', 'Xbox Pro Controller', 'Xbox Scuf Controller'],
    correct: 'Xbox Adaptive Controller'
},
//These questions cover various aspects of the Xbox gaming console, including its history, features, and notable accessories.
{
    hasContent: false,
    quest: 'Which company developed and produced the PlayStation gaming console?',
    choices: ['Microsoft', 'Nintendo', 'Sony', 'Sega'],
    correct: 'Sony'
},
{
    hasContent: false,
    quest: 'What was the original release year of the first PlayStation console?',
    choices: ['1992', '1994', '1996', '1998'],
    correct: '1994'
},
{
    hasContent: false,
    quest: 'What is the name of Sony\'s online gaming service for PlayStation users?',
    choices: ['PlayStation Live', 'PlayStation Network', 'PlayStation Plus', 'PlayStation Online'],
    correct: 'PlayStation Network'
},
{
    hasContent: false,
    quest: 'In terms of hardware, what is the successor to the PlayStation 3?',
    choices: ['PlayStation 4', 'PlayStation Vita', 'PlayStation 2', 'PlayStation Portable (PSP)'],
    correct: 'PlayStation 4'
},
{
    hasContent: false,
    quest: 'Which PlayStation console introduced the DualShock controller with analog sticks and vibration feedback?',
    choices: ['PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4'],
    correct: 'PlayStation'
},
{
    hasContent: false,
    quest: 'What is the name of the subscription service that provides access to a library of PlayStation games on both console and PC?',
    choices: ['PlayStation Now', 'PlayStation Plus', 'PlayStation Access', 'PlayStation Unlimited'],
    correct: 'PlayStation Now'
},
{
    hasContent: false,
    quest: 'Which PlayStation console is known for its portable design and features a dedicated lineup of handheld games?',
    choices: ['PlayStation Vita', 'PlayStation Portable (PSP)', 'PlayStation Portable Go', 'PlayStation Go'],
    correct: 'PlayStation Vita'
},
{
    hasContent: false,
    quest: 'What is the name of the handheld gaming console developed by Sony to compete with the Nintendo DS?',
    choices: ['PlayStation Portable (PSP)', 'PlayStation Vita', 'PlayStation Go', 'PlayStation DS'],
    correct: 'PlayStation Portable (PSP)'
},
{
    hasContent: false,
    quest: 'In terms of sales, which PlayStation console is considered one of the best-selling gaming consoles of all time?',
    choices: ['PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4'],
    correct: 'PlayStation 2'
},
{
    hasContent: false,
    quest: 'Which PlayStation console marked the introduction of CD-ROM technology for gaming discs?',
    choices: ['PlayStation', 'PlayStation 2', 'PlayStation 3', 'PlayStation 4'],
    correct: 'PlayStation'
},
{
    hasContent: false,
quest: 'What is the name of the virtual reality headset developed by Sony for use with the PlayStation gaming console?',
choices: ['PlayStation VR', 'PlayStation Visor', 'PlayStation Reality', 'PlayStation 3D'],
correct: 'PlayStation VR'
},
{
hasContent: false,
    quest: 'Which PlayStation console introduced the concept of Remote Play, allowing users to stream games to other devices?',
    choices: ['PlayStation 3', 'PlayStation 4', 'PlayStation 5', 'PlayStation Vita'],
    correct: 'PlayStation 4'
},
{
hasContent: false,
    quest: 'What is the name of the service that allows PlayStation users to share gameplay clips and screenshots with others?',
    choices: ['PlayStation Showcase', 'PlayStation Share', 'PlayStation Moments', 'PlayStation Gallery'],
    correct: 'PlayStation Share'
},
{
hasContent: false,
    quest: 'In terms of hardware, what is the successor to the PlayStation 4?',
    choices: ['PlayStation 5', 'PlayStation Pro', 'PlayStation Slim', 'PlayStation Neo'],
    correct: 'PlayStation 5'
},
{
hasContent: false,
    quest: 'Which PlayStation console introduced the Cross-Buy feature, allowing users to purchase a game once and play it on multiple platforms?',
    choices: ['PlayStation 3', 'PlayStation 4', 'PlayStation Vita', 'PlayStation 5'],
    correct: 'PlayStation Vita'
},
//These questions cover various aspects of the PlayStation gaming console, including its history, features, and notable accessories.
{
    hasContent: false,
    quest: 'Which company developed and produced the Sega gaming consoles?',
    choices: ['Sony', 'Nintendo', 'Sega', 'Microsoft'],
    correct: 'Sega'
},
{
    hasContent: false,
    quest: 'What was the original release year of the first Sega Genesis (Mega Drive) console?',
    choices: ['1986', '1988', '1989', '1990'],
    correct: '1988'
},
{
    hasContent: false,
    quest: 'What is the name of Sega\'s famous mascot, a speedy blue hedgehog?',
    choices: ['Knuckles', 'Tails', 'Sonic', 'Shadow'],
    correct: 'Sonic'
},
{
    hasContent: false,
    quest: 'Which Sega console introduced the Sega CD add-on for enhanced gaming experiences?',
    choices: ['Sega Master System', 'Sega Genesis (Mega Drive)', 'Sega Saturn', 'Sega Dreamcast'],
    correct: 'Sega Genesis (Mega Drive)'
},
{
    hasContent: false,
    quest: 'In terms of hardware, what is the successor to the Sega Saturn?',
    choices: ['Sega Dreamcast', 'Sega Genesis (Mega Drive)', 'Sega CD', 'Sega Master System'],
    correct: 'Sega Dreamcast'
},
{
    hasContent: false,
    quest: 'Which Sega game franchise features a speedy blue hedgehog and his adventures to thwart the plans of the evil Dr. Robotnik?',
    choices: ['Streets of Rage', 'Golden Axe', 'Sonic the Hedgehog', 'Shinobi'],
    correct: 'Sonic the Hedgehog'
},
{
    hasContent: false,
    quest: 'What is the name of the popular Sega racing game series featuring characters like Sonic and Tails?',
    choices: ['Virtua Racing', 'Out Run', 'Daytona USA', 'Sega Rally'],
    correct: 'Sega Sonic the Hedgehog'
},
{
    hasContent: false,
    quest: 'Which Sega console had a unique circular design and was released to compete with the Sony PlayStation and Nintendo 64?',
    choices: ['Sega Saturn', 'Sega CD', 'Sega Dreamcast', 'Sega 32X'],
    correct: 'Sega Saturn'
},
{
    hasContent: false,
    quest: 'What is the name of the Sega arcade game that popularized the use of isometric projection and features a knight rescuing a princess?',
    choices: ['Golden Axe', 'Altered Beast', 'Streets of Rage', 'Dragon\'s Lair'],
    correct: 'Golden Axe'
},
{
    hasContent: false,
    quest: 'Which Sega console was the first to have built-in internet connectivity for online gaming?',
    choices: ['Sega Genesis (Mega Drive)', 'Sega Saturn', 'Sega Dreamcast', 'Sega CDX'],
    correct: 'Sega Dreamcast'
},
{
    hasContent: false,
quest: 'What is the name of the Sega handheld console that competed with the Nintendo Game Boy?',
choices: ['Sega Nomad', 'Sega Game Gear', 'Sega Genesis Portable', 'Sega Pico'],
correct: 'Sega Game Gear'
},
{
hasContent: false,
    quest: 'Which Sega arcade game is known for its revolutionary use of sprite scaling technology and features a fighter battling against various enemies?',
    choices: ['Virtua Fighter', 'Street Fighter II', 'Mortal Kombat', 'Golden Axe'],
    correct: 'Virtua Fighter'
},
{
hasContent: false,
    quest: 'What is the name of the Sega console that was the first 128-bit gaming system and had a unique GD-ROM optical disc format?',
    choices: ['Sega Genesis (Mega Drive)', 'Sega Saturn', 'Sega Dreamcast', 'Sega 32X'],
    correct: 'Sega Dreamcast'
},
{
hasContent: false,
    quest: 'Which Sega franchise features a ninja warrior named Joe Musashi battling against criminal organizations?',
    choices: ['Streets of Rage', 'Golden Axe', 'Shinobi', 'Altered Beast'],
    correct: 'Shinobi'
},
{
hasContent: false,
    quest: 'What is the name of the Sega RPG series that follows the adventures of a blue-haired hero named Adol Christin?',
    choices: ['Phantasy Star', 'Shining Force', 'Ys', 'Sakura Wars'],
    correct: 'Ys'
},
//These questions cover various aspects of Sega, including its gaming consoles, iconic characters, and technological innovations.
{
    hasContent: false,
    quest: 'Which company developed and produced the Nintendo gaming consoles?',
    choices: ['Sony', 'Microsoft', 'Sega', 'Nintendo'],
    correct: 'Nintendo'
},
{
    hasContent: false,
    quest: 'What was the original release year of the first Nintendo Entertainment System (NES) console?',
    choices: ['1983', '1985', '1987', '1989'],
    correct: '1985'
},
{
    hasContent: false,
    quest: 'What is the name of Nintendo\'s flagship character, a plumber who goes on adventures to rescue Princess Peach?',
    choices: ['Link', 'Mario', 'Luigi', 'Yoshi'],
    correct: 'Mario'
},
{
    hasContent: false,
    quest: 'Which Nintendo console introduced motion-sensing controls through the use of the Wii Remote?',
    choices: ['Nintendo 64', 'Super Nintendo Entertainment System (SNES)', 'Wii', 'Nintendo GameCube'],
    correct: 'Wii'
},
{
    hasContent: false,
    quest: 'In terms of hardware, what is the successor to the Nintendo GameCube?',
    choices: ['Wii', 'Nintendo 64', 'Wii U', 'Nintendo Switch'],
    correct: 'Wii U'
},
{
    hasContent: false,
    quest: 'Which Nintendo game series features a hero named Link and the princess Zelda?',
    choices: ['Super Mario', 'The Legend of Zelda', 'Pokémon', 'Metroid'],
    correct: 'The Legend of Zelda'
},
{
    hasContent: false,
    quest: 'What is the name of the portable gaming console released by Nintendo that features two screens and a stylus?',
    choices: ['Game Boy Advance', 'Nintendo DS', 'Nintendo 3DS', 'Game Boy Color'],
    correct: 'Nintendo DS'
},
{
    hasContent: false,
    quest: 'Which Nintendo handheld console was the first to introduce 3D graphics without the need for special glasses?',
    choices: ['Game Boy', 'Game Boy Color', 'Nintendo DS', 'Nintendo 3DS'],
    correct: 'Nintendo 3DS'
},
{
    hasContent: false,
    quest: 'In terms of sales, which Nintendo console is considered one of the best-selling gaming consoles of all time?',
    choices: ['Nintendo Entertainment System (NES)', 'Super Nintendo Entertainment System (SNES)', 'Nintendo 64', 'Wii'],
    correct: 'Wii'
},
{
    hasContent: false,
quest: 'What is the name of the innovative console released by Nintendo that can be used both as a home console and a portable device?',
choices: ['Nintendo Wii U', 'Nintendo Switch', 'Nintendo 3DS', 'Nintendo DS'],
correct: 'Nintendo Switch'
},
{
hasContent: false,
    quest: 'Which Nintendo franchise features pocket monsters and became a global phenomenon in the world of gaming?',
    choices: ['The Legend of Zelda', 'Pokémon', 'Super Mario', 'Metroid'],
    correct: 'Pokémon'
},
{
hasContent: false,
    quest: 'What is the name of the handheld gaming console developed by Nintendo to compete with the Sega Game Gear?',
    choices: ['Game Boy Advance', 'Game Boy Color', 'Nintendo DS', 'Game Boy'],
    correct: 'Game Boy Color'
},
{
hasContent: false,
    quest: 'Which Nintendo console introduced the concept of backward compatibility, allowing users to play games from previous generations?',
    choices: ['Super Nintendo Entertainment System (SNES)', 'Nintendo 64', 'Wii U', 'Wii'],
    correct: 'Wii U'
},
{
hasContent: false,
    quest: 'What is the name of the popular Nintendo racing game series featuring characters like Mario, Luigi, and Bowser?',
    choices: ['Mario Kart', 'F-Zero', 'Diddy Kong Racing', 'Donkey Kong Country'],
    correct: 'Mario Kart'
},
//These questions cover various aspects of Nintendo, including its history, consoles, iconic characters, and popular game franchises.
{
    hasContent: false,
    quest: 'Which company developed and operates the Steam digital distribution platform for video games?',
    choices: ['Valve Corporation', 'Electronic Arts', 'Ubisoft', 'Activision'],
    correct: 'Valve Corporation'
},
{
    hasContent: false,
    quest: 'In what year was the Steam platform officially launched?',
    choices: ['2000', '2003', '2007', '2010'],
    correct: '2003'
},
{
    hasContent: false,
    quest: 'What is the primary function of Steam in the gaming industry?',
    choices: ['Game development', 'Hardware manufacturing', 'Digital game distribution', 'Mobile gaming'],
    correct: 'Digital game distribution'
},
{
    hasContent: false,
    quest: 'Which feature of Steam allows players to connect and play games with friends online?',
    choices: ['Steam Workshop', 'Steam Big Picture Mode', 'Steam Greenlight', 'Steam Multiplayer'],
    correct: 'Steam Multiplayer'
},
{
    hasContent: false,
    quest: 'What is the name of the digital rights management (DRM) system used by Steam to protect games from unauthorized copying?',
    choices: ['Steam Guard', 'Steamworks', 'Steam Authentication', 'Steam DRM'],
    correct: 'Steam DRM'
},
{
    hasContent: false,
    quest: 'Which Steam feature allows users to share their game libraries with friends and family members?',
    choices: ['Steam Family Sharing', 'Steam Cloud', 'Steam Trading Cards', 'Steam Broadcasting'],
    correct: 'Steam Family Sharing'
},
{
    hasContent: false,
    quest: 'What is the currency used for transactions on the Steam platform?',
    choices: ['Dollar', 'Euro', 'Pound Sterling', 'Steam Credit'],
    correct: 'Dollar'
},
{
    hasContent: false,
    quest: 'In what way does Steam support user-generated content for games?',
    choices: ['Steam Forums', 'Steam Broadcasting', 'Steam Workshop', 'Steam Trading Cards'],
    correct: 'Steam Workshop'
},
{
    hasContent: false,
    quest: 'Which Steam feature allows players to broadcast their gameplay live to friends and the Steam community?',
    choices: ['Steam Broadcasting', 'Steam Multiplayer', 'Steam Big Picture Mode', 'Steam Family Sharing'],
    correct: 'Steam Broadcasting'
},
{
    hasContent: false,
quest: 'What is the name of the annual Steam event that offers discounts on a wide range of games?',
choices: ['Steam Sale', 'Steam Festival', 'Steam Showcase', 'Steam Extravaganza'],
correct: 'Steam Sale'
},
{
hasContent: false,
    quest: 'Which platform on Steam allows users to create and sell their own games?',
    choices: ['Steam Greenlight', 'Steam Workshop', 'Steam Early Access', 'Steam Game Creator'],
    correct: 'Steam Early Access'
},
{
hasContent: false,
    quest: 'What is the name of the program on Steam that allows developers to distribute their games in a beta state and gather feedback?',
    choices: ['Steam Greenlight', 'Steam Early Access', 'Steam Workshop', 'Steam Beta Program'],
    correct: 'Steam Early Access'
},
{
hasContent: false,
    quest: 'What is the term used for the process on Steam where players can trade in-game items with each other?',
    choices: ['Steam Marketplace', 'Steam Trading Cards', 'Steam Inventory', 'Steam Trading'],
    correct: 'Steam Trading'
},
{
hasContent: false,
    quest: 'Which Steam feature enables users to organize and categorize their game collections for easy access?',
    choices: ['Steam Library', 'Steam Wishlist', 'Steam Inventory', 'Steam Cloud'],
    correct: 'Steam Library'
},
//These questions cover various aspects of the Steam platform, including its features, services, and community-related functionalities.
{
    hasContent: false,
    quest: 'Which company developed and operates the Epic Games Store?',
    choices: ['Ubisoft', 'Electronic Arts', 'Valve Corporation', 'Epic Games'],
    correct: 'Epic Games'
},
{
    hasContent: false,
    quest: 'In what year was the Epic Games Store officially launched?',
    choices: ['2015', '2017', '2018', '2019'],
    correct: '2018'
},
{
    hasContent: false,
    quest: 'What is the primary function of the Epic Games Store in the gaming industry?',
    choices: ['Game development', 'Hardware manufacturing', 'Digital game distribution', 'Mobile gaming'],
    correct: 'Digital game distribution'
},
{
    hasContent: false,
    quest: 'Which exclusive game release helped establish the Epic Games Store as a competitor to other digital distribution platforms?',
    choices: ['Fortnite', 'Apex Legends', 'Rocket League', 'Genshin Impact'],
    correct: 'Fortnite'
},
{
    hasContent: false,
    quest: 'What is the name of the game engine developed by Epic Games that powers many popular video games?',
    choices: ['Unity', 'CryEngine', 'Frostbite', 'Unreal Engine'],
    correct: 'Unreal Engine'
},
{
    hasContent: false,
    quest: 'Which feature of the Epic Games Store provides free games to users on a regular basis?',
    choices: ['Epic Games Vault', 'Epic Games Giveaway', 'Epic Games Freebies', 'Epic Games Weekly'],
    correct: 'Epic Games Freebies'
},
{
    hasContent: false,
    quest: 'In what way does the Epic Games Store support developers?',
    choices: ['Revenue sharing', 'Game reviews', 'Digital rights management (DRM)', 'Community forums'],
    correct: 'Revenue sharing'
},
{
    hasContent: false,
    quest: 'What is the revenue share percentage offered to developers on the Epic Games Store?',
    choices: ['80%', '70%', '60%', '50%'],
    correct: '88%'
},
{
    hasContent: false,
    quest: 'Which exclusive game series is available on the Epic Games Store and features a dystopian future where players battle against robot enemies?',
    choices: ['Gears of War', 'Horizon Zero Dawn', 'Metro Exodus', 'Control'],
    correct: 'Metro Exodus'
},
{
    hasContent: false,
quest: 'What is the name of the digital storefront on the Epic Games Store that showcases upcoming games and exclusive content?',
choices: ['Epic Showcase', 'Epic Expo', 'Epic Preview', 'Epic Games Showcase'],
correct: 'Epic Games Showcase'
},
{
hasContent: false,
    quest: 'Which platform on the Epic Games Store allows players to connect and play games with friends online?',
    choices: ['Epic Multiplayer', 'Epic Friends', 'Epic Network', 'Epic Online'],
    correct: 'Epic Friends'
},
{
hasContent: false,
    quest: 'What is the term used for the digital currency used for transactions on the Epic Games Store?',
    choices: ['Epic Credits', 'Epic Coins', 'Epic Points', 'Epic Dollars'],
    correct: 'Epic Credits'
},
{
hasContent: false,
    quest: 'Which feature of the Epic Games Store allows users to explore and discover new games with a focus on user-generated content?',
    choices: ['Epic Game Discover', 'Epic Games Hub', 'Epic Games Explore', 'Epic Games Discover'],
    correct: 'Epic Games Explore'
},
{
hasContent: false,
    quest: 'What is the name of the program on the Epic Games Store that offers discounts on selected games during specific events?',
    choices: ['Epic Games Sale', 'Epic Games Festival', 'Epic Games Discount', 'Epic Games Extravaganza'],
    correct: 'Epic Games Sale'
},
{
hasContent: false,
    quest: 'Which game distribution platform is a major competitor to the Epic Games Store?',
    choices: ['Steam', 'GOG', 'Origin', 'Uplay'],
    correct: 'Steam'
},
//These questions cover various aspects of the Epic Games Store, including its features, exclusives, revenue-sharing model, and user-related functionalities.
];
const mythologyQuestions = [
    {
        hasContent: false,
        quest: 'In Greek mythology, who is the king of the gods and the ruler of Mount Olympus?',
        choices: ['Zeus', 'Poseidon', 'Hades', 'Apollo'],
        correct: 'Zeus'
    },
    {
        hasContent: false,
        quest: 'Which Norse god is known for his trickery and mischief?',
        choices: ['Thor', 'Odin', 'Loki', 'Freyja'],
        correct: 'Loki'
    },
    {
        hasContent: false,
        quest: 'In Egyptian mythology, who is the god of the afterlife and the judge of the dead?',
        choices: ['Osiris', 'Anubis', 'Ra', 'Isis'],
        correct: 'Osiris'
    },
    {
        hasContent: false,
        quest: 'Which Hindu god is often depicted with blue skin and is a symbol of preservation?',
        choices: ['Shiva', 'Brahma', 'Vishnu', 'Krishna'],
        correct: 'Vishnu'
    },
    {
        hasContent: false,
        quest: 'Who is the goddess of love and beauty in Roman mythology?',
        choices: ['Athena', 'Hera', 'Aphrodite', 'Artemis'],
        correct: 'Aphrodite'
    },
    {
        hasContent: false,
        quest: 'In Norse mythology, what is the name of the hammer-wielding god associated with thunder?',
        choices: ['Odin', 'Thor', 'Freya', 'Balder'],
        correct: 'Thor'
    },
    {
        hasContent: false,
        quest: 'Which mythical creature is a part lion, part goat, and part serpent in Greek mythology?',
        choices: ['Chimera', 'Cerberus', 'Harpy', 'Minotaur'],
        correct: 'Chimera'
    },
    {
        hasContent: false,
        quest: 'In Hindu mythology, who is the monkey god known for his strength and loyalty?',
        choices: ['Hanuman', 'Garuda', 'Kali', 'Ganesha'],
        correct: 'Hanuman'
    },
    {
        hasContent: false,
        quest: 'Which legendary figure is associated with the sword Excalibur in Arthurian mythology?',
        choices: ['King Arthur', 'Merlin', 'Guinevere', 'Lancelot'],
        correct: 'King Arthur'
    },
    {
        hasContent: false,
    quest: 'In Japanese mythology, what is the name of the sun goddess and the central figure of the Shinto religion?',
    choices: ['Izanagi', 'Izanami', 'Amaterasu', 'Susano-o'],
    correct: 'Amaterasu'
},
{
    hasContent: false,
        quest: 'Which mythical bird is said to burst into flames and be consumed by fire upon death, only to be reborn from its ashes?',
        choices: ['Phoenix', 'Griffin', 'Hippogriff', 'Simurgh'],
        correct: 'Phoenix'
    },
{
    hasContent: false,
        quest: 'In Egyptian mythology, who is the god of the dead and the guardian of the underworld?',
        choices: ['Anubis', 'Osiris', 'Ra', 'Horus'],
        correct: 'Anubis'
    },
{
    hasContent: false,
        quest: 'Which mythical creature from Chinese mythology is a combination of various animals and is considered a symbol of good luck?',
        choices: ['Qilin', 'Fenghuang', 'Jingwei', 'Pixiu'],
        correct: 'Qilin'
    },
{
    hasContent: false,
        quest: 'Who is the goddess of wisdom and warfare in Greek mythology?',
        choices: ['Athena', 'Artemis', 'Demeter', 'Hera'],
        correct: 'Athena'
    },
{
    hasContent: false,
        quest: 'In Norse mythology, what is the name of the World Tree that connects the different realms of existence?',
        choices: ['Yggdrasil', 'Bifrost', 'Mímir', 'Sleipnir'],
        correct: 'Yggdrasil'
    },
//These questions cover various mythologies, including Greek, Norse, Egyptian, Hindu, Roman, Japanese, and Chinese mythologies, along with some famous figures and creatures from these traditions.

{
    hasContent: false,
    quest: 'Who is the queen of the underworld and the wife of Hades in Greek mythology?',
    choices: ['Hera', 'Athena', 'Persephone', 'Demeter'],
    correct: 'Persephone'
},
{
    hasContent: false,
    quest: 'In Greek mythology, what creature has the head of a bull and the body of a man?',
    choices: ['Minotaur', 'Centaur', 'Satyr', 'Cyclops'],
    correct: 'Minotaur'
},
{
    hasContent: false,
    quest: 'Who is the god of the sea and earthquakes in Greek mythology?',
    choices: ['Apollo', 'Hermes', 'Poseidon', 'Dionysus'],
    correct: 'Poseidon'
},
{
    hasContent: false,
    quest: 'In Greek mythology, what is the name of the winged horse that emerged from the blood of Medusa?',
    choices: ['Pegasus', 'Chimera', 'Griffin', 'Cerberus'],
    correct: 'Pegasus'
},
{
    hasContent: false,
    quest: 'Who is the goddess of the hunt, wilderness, and wild animals in Greek mythology?',
    choices: ['Artemis', 'Athena', 'Hera', 'Demeter'],
    correct: 'Artemis'
},
{
    hasContent: false,
    quest: 'In Greek mythology, who is the messenger of the gods and the god of trade, thieves, and travelers?',
    choices: ['Ares', 'Hermes', 'Apollo', 'Dionysus'],
    correct: 'Hermes'
},
{
    hasContent: false,
    quest: 'Who is the titan condemned to hold up the sky for eternity in Greek mythology?',
    choices: ['Atlas', 'Prometheus', 'Epimetheus', 'Cronus'],
    correct: 'Atlas'
},
{
    hasContent: false,
    quest: 'In Greek mythology, who is the goddess of wisdom, courage, inspiration, civilization, law, and strategic warfare?',
    choices: ['Athena', 'Artemis', 'Hera', 'Demeter'],
    correct: 'Athena'
},
{
    hasContent: false,
    quest: 'Who is the hero known for his strength and twelve labors in Greek mythology?',
    choices: ['Perseus', 'Achilles', 'Heracles', 'Theseus'],
    correct: 'Heracles'
},
{
    hasContent: false,
    quest: 'In Greek mythology, what is the name of the three-headed dog guarding the entrance to the underworld?',
    choices: ['Cerberus', 'Orthrus', 'Chimera', 'Hydra'],
    correct: 'Cerberus'
},
//Greek mythologies
{
    hasContent: false,
    quest: 'Who is the father of all gods and the ruler of Asgard in Norse mythology?',
    choices: ['Thor', 'Loki', 'Odin', 'Balder'],
    correct: 'Odin'
},
{
    hasContent: false,
    quest: 'In Norse mythology, what is the name of the legendary hammer wielded by Thor?',
    choices: ['Mjolnir', 'Gungnir', 'Tyrfing', 'Excalibur'],
    correct: 'Mjolnir'
},
{
    hasContent: false,
    quest: 'Which creature from Norse mythology is a monstrous wolf bound by magical chains until the events of Ragnarok?',
    choices: ['Fenrir', 'Jormungandr', 'Sleipnir', 'Hati'],
    correct: 'Fenrir'
},
{
    hasContent: false,
    quest: 'Who is the goddess of love and beauty in Norse mythology?',
    choices: ['Freyja', 'Frigg', 'Hel', 'Skadi'],
    correct: 'Freyja'
},
{
    hasContent: false,
    quest: 'In Norse mythology, what is the name of the World Serpent that encircles the earth?',
    choices: ['Jormungandr', 'Nidhogg', 'Fafnir', 'Midgard Serpent'],
    correct: 'Jormungandr'
},
{
    hasContent: false,
    quest: 'Which legendary Norse hero is known for slaying the dragon Fafnir?',
    choices: ['Sigurd', 'Beowulf', 'Siegfried', 'Gunnar'],
    correct: 'Sigurd'
},
{
    hasContent: false,
    quest: 'In Norse mythology, what is the name of the bridge that connects the human world (Midgard) to Asgard?',
    choices: ['Bifrost', 'Yggdrasil', 'Heimdallr', 'Gjallarbru'],
    correct: 'Bifrost'
},
{
    hasContent: false,
    quest: 'Who is the trickster god in Norse mythology, known for causing trouble among the gods and humans?',
    choices: ['Thor', 'Odin', 'Balder', 'Loki'],
    correct: 'Loki'
},
{
    hasContent: false,
    quest: 'In Norse mythology, what is the name of the giant wolf that will devour the sun during Ragnarok?',
    choices: ['Skoll', 'Hati', 'Fenrir', 'Garmr'],
    correct: 'Skoll'
},
{
    hasContent: false,
    quest: 'Who is the guardian of the Bifrost, the rainbow bridge in Norse mythology?',
    choices: ['Frigg', 'Heimdallr', 'Vidar', 'Tyr'],
    correct: 'Heimdallr'
},
{
    hasContent: false,
    quest: 'In Norse mythology, which goddess presides over the dead in Hel, the realm of the dead?',
    choices: ['Skadi', 'Hel', 'Freyja', 'Idun'],
    correct: 'Hel'
},
{
    hasContent: false,
    quest: 'What is the name of the great ash tree that connects the nine worlds in Norse cosmology?',
    choices: ['Yggdrasil', 'Ask', 'Embla', 'Irminsul'],
    correct: 'Yggdrasil'
},
{
    hasContent: false,
    quest: 'Which dwarf in Norse mythology created the magical hammer Mjolnir for the god Thor?',
    choices: ['Sindri', 'Brokkr', 'Eitri', 'Fafnir'],
    correct: 'Eitri'
},
{
    hasContent: false,
    quest: 'What is the name of the golden hall in Asgard, home of the god Odin?',
    choices: ['Valhalla', 'Alfheim', 'Midgard', 'Asgard'],
    correct: 'Valhalla'
},
{
    hasContent: false,
    quest: 'In Norse mythology, who is the god of thunder, lightning, and storms?',
    choices: ['Loki', 'Baldur', 'Freyr', 'Thor'],
    correct: 'Thor'
},
//norse (scandinavian)
{
    hasContent: false,
    quest: 'Who is the supreme god and creator in Hinduism?',
    choices: ['Shiva', 'Brahma', 'Vishnu', 'Krishna'],
    correct: 'Brahma'
},
{
    hasContent: false,
    quest: 'In Hindu mythology, who is the god of destruction and transformation?',
    choices: ['Vishnu', 'Brahma', 'Ganesha', 'Shiva'],
    correct: 'Shiva'
},
{
    hasContent: false,
    quest: 'Which avatar of Vishnu is known as the "Protector" and is often depicted with a mace?',
    choices: ['Rama', 'Krishna', 'Parashurama', 'Varaha'],
    correct: 'Parashurama'
},
{
    hasContent: false,
    quest: 'In Hindu mythology, who is the goddess of wealth, prosperity, and fortune?',
    choices: ['Lakshmi', 'Saraswati', 'Durga', 'Kali'],
    correct: 'Lakshmi'
},
{
    hasContent: false,
    quest: 'Which Hindu deity is the son of Shiva and Parvati, and is known as the elephant-headed god?',
    choices: ['Ganesha', 'Kartikeya', 'Hanuman', 'Indra'],
    correct: 'Ganesha'
},
{
    hasContent: false,
    quest: 'In the Mahabharata, who serves as the charioteer for Prince Arjuna in the Kurukshetra War?',
    choices: ['Karna', 'Drona', 'Bhishma', 'Krishna'],
    correct: 'Krishna'
},
{
    hasContent: false,
    quest: 'Who is the goddess of knowledge, music, arts, wisdom, and learning in Hinduism?',
    choices: ['Parvati', 'Lakshmi', 'Durga', 'Saraswati'],
    correct: 'Saraswati'
},
{
    hasContent: false,
    quest: 'In Hindu mythology, who is the divine serpent and the king of Nagas?',
    choices: ['Ananta', 'Vasuki', 'Kaliya', 'Manasa'],
    correct: 'Vasuki'
},
{
    hasContent: false,
    quest: 'Which demon king, with ten heads, is a central figure in the Ramayana?',
    choices: ['Ravana', 'Hiranyakashipu', 'Mahishasura', 'Duryodhana'],
    correct: 'Ravana'
},
{
    hasContent: false,
    quest: 'Who is the monkey king and a central character in the Ramayana?',
    choices: ['Hanuman', 'Vali', 'Sugriva', 'Angada'],
    correct: 'Hanuman'
},
{
    hasContent: false,
    quest: 'In Hindu mythology, who is the goddess of time, power, and change, often depicted with a necklace of skulls?',
    choices: ['Kali', 'Durga', 'Parvati', 'Saraswati'],
    correct: 'Kali'
},
{
    hasContent: false,
    quest: 'Which sacred river in Hinduism is considered the "Ganges" and is associated with the goddess Ganga?',
    choices: ['Yamuna', 'Saraswati', 'Ganges', 'Godavari'],
    correct: 'Ganges'
},
{
    hasContent: false,
    quest: 'Who is the sun god in Hindu mythology, often depicted riding a chariot drawn by seven horses?',
    choices: ['Surya', 'Vayu', 'Varuna', 'Agni'],
    correct: 'Surya'
},
{
    hasContent: false,
    quest: 'In Hindu mythology, what is the name of the divine cow and mother of all cows?',
    choices: ['Kamadhenu', 'Surabhi', 'Nandini', 'Ksheerabala'],
    correct: 'Kamadhenu'
},
{
    hasContent: false,
    quest: 'Which sacred Hindu scripture contains a conversation between Prince Arjuna and the god Krishna?',
    choices: ['Vedas', 'Upanishads', 'Bhagavad Gita', 'Ramayana'],
    correct: 'Bhagavad Gita'
},
//hindu
{
    hasContent: false,
    quest: 'Who is the king of the Persian gods in Zoroastrianism?',
    choices: ['Ahura Mazda', 'Anahita', 'Mithra', 'Ahriman'],
    correct: 'Ahura Mazda'
},
{
    hasContent: false,
    quest: 'In Persian mythology, what is the name of the divine figure associated with the guardian and protector of water?',
    choices: ['Anahita', 'Ahura Mazda', 'Mithra', 'Ahriman'],
    correct: 'Anahita'
},
{
    hasContent: false,
    quest: 'What mythical creature is often depicted as a benevolent, wise, and ancient bird in Persian folklore?',
    choices: ['Simurgh', 'Griffin', 'Anzu', 'Phoenix'],
    correct: 'Simurgh'
},
{
    hasContent: false,
    quest: 'In Persian mythology, who is the god of the sun, justice, and contract?',
    choices: ['Mithra', 'Ahura Mazda', 'Anahita', 'Ahriman'],
    correct: 'Mithra'
},
{
    hasContent: false,
    quest: 'Which legendary hero is a central figure in Persian literature and mythology, known for his battle against a monstrous dragon?',
    choices: ['Rostam', 'Fereydun', 'Jamshid', 'Zahhak'],
    correct: 'Rostam'
},
{
    hasContent: false,
    quest: 'In Persian mythology, what is the name of the demon associated with chaos, destruction, and lies?',
    choices: ['Ahriman', 'Angra Mainyu', 'Druj', 'Div-e-Sepid'],
    correct: 'Ahriman'
},
{
    hasContent: false,
    quest: 'What sacred element is highly revered in Zoroastrianism and Persian mythology?',
    choices: ['Fire', 'Water', 'Earth', 'Wind'],
    correct: 'Fire'
},
{
    hasContent: false,
    quest: 'In Persian folklore, what creature is believed to guard and protect mines of precious metals?',
    choices: ['Div-e-Sepid', 'Zahhak', 'Arzhang', 'Giv'],
    correct: 'Div-e-Sepid'
},
{
    hasContent: false,
    quest: 'What mythical creature is associated with being a symbol of justice, righteousness, and order in Persian mythology?',
    choices: ['Faravahar', 'Simurgh', 'Anzu', 'Div-e-Sepid'],
    correct: 'Faravahar'
},
{
    hasContent: false,
    quest: 'In Persian mythology, what is the name of the legendary bird that is believed to bring good fortune and happiness?',
    choices: ['Huma', 'Simurgh', 'Phoenix', 'Anzu'],
    correct: 'Huma'
},
{
    hasContent: false,
    quest: 'In Persian mythology, who is the goddess of fertility, water, and wisdom?',
    choices: ['Anahita', 'Ahura Mazda', 'Mithra', 'Spenta Armaiti'],
    correct: 'Anahita'
},
{
    hasContent: false,
    quest: 'What sacred text is the primary source of Zoroastrianism and Persian religious traditions?',
    choices: ['Avesta', 'Zend', 'Pahlavi', 'Gathas'],
    correct: 'Avesta'
},
{
    hasContent: false,
    quest: 'In Persian mythology, what is the name of the dragon-like creature that breathes fire and is often associated with darkness and chaos?',
    choices: ['Azhi Dahaka', 'Zahhak', 'Simurgh', 'Div-e-Sepid'],
    correct: 'Azhi Dahaka'
},
{
    hasContent: false,
    quest: 'What is the concept of divine energy or divine force in Zoroastrianism and Persian mythology?',
    choices: ['Khvarenah', 'Fravashi', 'Yasna', 'Asha'],
    correct: 'Khvarenah'
},
{
    hasContent: false,
    quest: 'In Persian folklore, what is the name of the mythical bird that is believed to possess healing powers and is associated with the water of life?',
    choices: ['Simurgh', 'Huma', 'Anzu', 'Div-e-Sepid'],
    correct: 'Simurgh'
},
//persian
// Chinese Mythology
{
    hasContent: false,
    quest: 'In Chinese mythology, who is the mythical ruler credited with introducing civilization, including writing and silk cultivation?',
    choices: ['Fuxi', 'Nuwa', 'Yandi', 'Shennong'],
    correct: 'Fuxi'
},
{
    hasContent: false,
    quest: 'What legendary creature, often depicted as a composite of various animals, is a symbol of good luck and protection in Chinese mythology?',
    choices: ['Qilin', 'Fenghuang', 'Pixiu', 'Nian'],
    correct: 'Qilin'
},
{
    hasContent: false,
    quest: 'Who is the goddess responsible for creating humans from clay and breathing life into them in Chinese mythology?',
    choices: ['Fuxi', 'Nuwa', 'Yandi', 'Chang\'e'],
    correct: 'Nuwa'
},
{
    hasContent: false,
    quest: 'In Chinese mythology, what is the name of the legendary archer who shot down nine of ten suns to save the Earth?',
    choices: ['Hou Yi', 'Chang\'e', 'Jingwei', 'Fu Xi'],
    correct: 'Hou Yi'
},
{
    hasContent: false,
    quest: 'What is the name of the mythical bird in Chinese mythology that is said to have one eye and one wing?',
    choices: ['Jingwei', 'Fenghuang', 'Nian', 'Xiao'],
    correct: 'Jingwei'
},
{
    hasContent: false,
    quest: 'In Chinese mythology, who is the moon goddess known for consuming the elixir of immortality and ascending to the moon?',
    choices: ['Chang\'e', 'Hou Yi', 'Yandi', 'Nuwa'],
    correct: 'Chang\'e'
},
{
    hasContent: false,
    quest: 'What mythical creature, resembling a lion with antlers, is often seen as a guardian and protector in Chinese mythology?',
    choices: ['Pixiu', 'Qilin', 'Fenghuang', 'Jingwei'],
    correct: 'Pixiu'
},
{
    hasContent: false,
    quest: 'In Chinese mythology, who is the monkey king with supernatural abilities and a major character in the novel "Journey to the West"?',
    choices: ['Sun Wukong', 'Zhu Bajie', 'Nezha', 'Ao Guang'],
    correct: 'Sun Wukong'
},
{
    hasContent: false,
    quest: 'What is the name of the dragon king of the East Sea in Chinese mythology?',
    choices: ['Ao Guang', 'Li Jing', 'Yu Lung', 'Fu Xi'],
    correct: 'Ao Guang'
},
{
    hasContent: false,
    quest: 'In Chinese mythology, what is the name of the god of war and martial arts?',
    choices: ['Nezha', 'Ao Guang', 'Zhu Bajie', 'Guanyin'],
    correct: 'Nezha'
},
{
    hasContent: false,
    quest: 'Who is the legendary archer associated with the founding of the Xia dynasty in Chinese mythology?',
    choices: ['Yandi', 'Fuxi', 'Hou Yi', 'Nuwa'],
    correct: 'Yandi'
},
{
    hasContent: false,
    quest: 'In Chinese mythology, what is the name of the goddess who guards the celestial peach garden and hosts a banquet for the immortals?',
    choices: ['Xi Wangmu', 'Chang\'e', 'Yandi', 'Nuwa'],
    correct: 'Xi Wangmu'
},
{
    hasContent: false,
    quest: 'What legendary creature, often depicted as a serpent with antlers, is associated with water and rainfall in Chinese mythology?',
    choices: ['Longmu', 'Yu Lung', 'Ao Guang', 'Xiao'],
    correct: 'Yu Lung'
},
{
    hasContent: false,
    quest: 'In Chinese mythology, what is the name of the legendary ruler credited with teaching people to fish, raise silkworms, and make nets?',
    choices: ['Shennong', 'Fuxi', 'Nuwa', 'Yandi'],
    correct: 'Shennong'
},
{
    hasContent: false,
    quest: 'What is the name of the mythical creature that is often depicted as a half-lion, half-dragon and is considered a symbol of power and protection in Chinese mythology?',
    choices: ['Pixiu', 'Qilin', 'Fenghuang', 'Nian'],
    correct: 'Pixiu'
},
// Roman Mythology
{
    hasContent: false,
    quest: 'In Roman mythology, who is the king of the gods and the ruler of Mount Olympus?',
    choices: ['Jupiter', 'Neptune', 'Pluto', 'Mars'],
    correct: 'Jupiter'
},
{
    hasContent: false,
    quest: 'Who is the goddess of love and beauty in Roman mythology?',
    choices: ['Venus', 'Juno', 'Minerva', 'Diana'],
    correct: 'Venus'
},
{
    hasContent: false,
    quest: 'In Roman mythology, who is the god of war and the son of Jupiter and Juno?',
    choices: ['Mars', 'Mercury', 'Apollo', 'Vulcan'],
    correct: 'Mars'
},
{
    hasContent: false,
    quest: 'What is the Roman name for the goddess Hera in Greek mythology?',
    choices: ['Juno', 'Vesta', 'Ceres', 'Diana'],
    correct: 'Juno'
},
{
    hasContent: false,
    quest: 'Who is the Roman equivalent of the Greek god Hermes, known as the messenger of the gods?',
    choices: ['Mercury', 'Mars', 'Apollo', 'Jupiter'],
    correct: 'Mercury'
},
{
    hasContent: false,
    quest: 'In Roman mythology, who is the god of the sea and the brother of Jupiter and Pluto?',
    choices: ['Neptune', 'Mars', 'Apollo', 'Vulcan'],
    correct: 'Neptune'
},
{
    hasContent: false,
    quest: 'What is the Roman name for the goddess Athena in Greek mythology?',
    choices: ['Minerva', 'Vesta', 'Ceres', 'Diana'],
    correct: 'Minerva'
},
{
    hasContent: false,
    quest: 'In Roman mythology, who is the goddess of agriculture and fertility?',
    choices: ['Ceres', 'Juno', 'Venus', 'Diana'],
    correct: 'Ceres'
},
{
    hasContent: false,
    quest: 'Who is the Roman equivalent of the Greek god Apollo, associated with music, poetry, and prophecy?',
    choices: ['Apollo', 'Mercury', 'Mars', 'Jupiter'],
    correct: 'Apollo'
},
{
    hasContent: false,
    quest: 'In Roman mythology, who is the god of fire and craftsmanship, equivalent to the Greek god Hephaestus?',
    choices: ['Vulcan', 'Mars', 'Mercury', 'Apollo'],
    correct: 'Vulcan'
},
{
    hasContent: false,
    quest: 'What is the Roman name for the goddess Artemis in Greek mythology?',
    choices: ['Diana', 'Vesta', 'Ceres', 'Minerva'],
    correct: 'Diana'
},
{
    hasContent: false,
    quest: 'In Roman mythology, who is the god of love and desire, equivalent to the Greek god Eros?',
    choices: ['Cupid', 'Pan', 'Bacchus', 'Pluto'],
    correct: 'Cupid'
},
{
    hasContent: false,
    quest: 'Who is the Roman equivalent of the Greek goddess Demeter, associated with agriculture and harvest?',
    choices: ['Ceres', 'Juno', 'Venus', 'Minerva'],
    correct: 'Ceres'
},
{
    hasContent: false,
    quest: 'In Roman mythology, who is the god of wine and revelry, equivalent to the Greek god Dionysus?',
    choices: ['Bacchus', 'Pan', 'Cupid', 'Pluto'],
    correct: 'Bacchus'
},
{
    hasContent: false,
    quest: 'What is the Roman name for the goddess Hestia in Greek mythology?',
    choices: ['Vesta', 'Diana', 'Ceres', 'Minerva'],
    correct: 'Vesta'
},
// Japanese Mythology
{
    hasContent: false,
    quest: 'In Japanese mythology, what is the name of the sun goddess and the central figure of the Shinto religion?',
    choices: ['Amaterasu', 'Susanoo', 'Izanagi', 'Izanami'],
    correct: 'Amaterasu'
},
{
    hasContent: false,
    quest: 'Who is the god of the sea and storms in Japanese mythology, often depicted with a beard of seaweed and a clamshell trumpet?',
    choices: ['Ryujin', 'Susanoo', 'Izanagi', 'Amaterasu'],
    correct: 'Ryujin'
},
{
    hasContent: false,
    quest: 'In Japanese mythology, what is the name of the storm god and brother of Amaterasu, associated with chaos and disorder?',
    choices: ['Susanoo', 'Izanagi', 'Izanami', 'Ryujin'],
    correct: 'Susanoo'
},
{
    hasContent: false,
    quest: 'What mythical creature, often depicted as a bird with a human face, is a messenger of the gods in Japanese mythology?',
    choices: ['Tengu', 'Kappa', 'Kitsune', 'Tanuki'],
    correct: 'Tengu'
},
{
    hasContent: false,
    quest: 'In Japanese folklore, what supernatural beings are known for their shape-shifting abilities, often taking the form of a beautiful woman?',
    choices: ['Kitsune', 'Tengu', 'Kappa', 'Yokai'],
    correct: 'Kitsune'
},
{
    hasContent: false,
    quest: 'Who is the god of creation and the first kami in Japanese mythology, along with his sister and wife Izanami?',
    choices: ['Izanagi', 'Amaterasu', 'Susanoo', 'Ryujin'],
    correct: 'Izanagi'
},
{
    hasContent: false,
    quest: 'What is the name of the underworld in Japanese mythology, ruled by the god and goddess Izanagi and Izanami?',
    choices: ['Yomi', 'Ama-no-Iwato', 'Yomi-no-Kuni', 'Takamagahara'],
    correct: 'Yomi'
},
{
    hasContent: false,
    quest: 'In Japanese mythology, what is the name of the divine sword used by the storm god Susanoo to slay the serpent Yamata no Orochi?',
    choices: ['Ame-no-Murakumo', 'Totsuka-no-Tsurugi', 'Kusanagi-no-Tsurugi', 'Ame-no-Uzume'],
    correct: 'Totsuka-no-Tsurugi'
},
{
    hasContent: false,
    quest: 'What legendary creature, resembling a humanoid with a water-filled basin on its head, is known for its mischievous behavior in Japanese folklore?',
    choices: ['Kappa', 'Tengu', 'Kitsune', 'Yokai'],
    correct: 'Kappa'
},
{
    hasContent: false,
    quest: 'In Japanese mythology, what is the name of the divine mirror, one of the three sacred treasures of the Imperial regalia?',
    choices: ['Yata-no-Kagami', 'Kusanagi-no-Tsurugi', 'Yasakani-no-Magatama', 'Ame-no-Murakumo'],
    correct: 'Yata-no-Kagami'
},
{
    hasContent: false,
    quest: 'What is the name of the sacred jewel, one of the three Imperial regalia of Japan, often associated with Amaterasu?',
    choices: ['Yasakani-no-Magatama', 'Ame-no-Murakumo', 'Totsuka-no-Tsurugi', 'Yata-no-Kagami'],
    correct: 'Yasakani-no-Magatama'
},
{
    hasContent: false,
    quest: 'In Japanese mythology, what is the name of the divine spear, one of the three sacred treasures held by the Imperial regalia?',
    choices: ['Ame-no-Uzume', 'Ame-no-Murakumo', 'Kusanagi-no-Tsurugi', 'Totsuka-no-Tsurugi'],
    correct: 'Kusanagi-no-Tsurugi'
},
{
    hasContent: false,
    quest: 'What mythical creature, often depicted as a humanoid with a raccoon-like appearance, is known for its shape-shifting abilities?',
    choices: ['Tanuki', 'Kappa', 'Tengu', 'Kitsune'],
    correct: 'Tanuki'
},
{
    hasContent: false,
    quest: 'In Japanese folklore, what type of supernatural creature is said to inhabit rivers and ponds, known for its water-filled dish on its head?',
    choices: ['Kappa', 'Tengu', 'Kitsune', 'Yokai'],
    correct: 'Kappa'
},
{
    hasContent: false,
    quest: 'What is the name of the Japanese goddess of the dawn, often associated with the Shinto sun goddess Amaterasu?',
    choices: ['Uzume', 'Inari', 'Benzaiten', 'Tsukuyomi'],
    correct: 'Uzume'
}
];
const bookquestions =[
// Books
{
    hasContent: false,
    quest: 'Who wrote the novel "1984," a dystopian classic that explores themes of totalitarianism and government surveillance?',
    choices: ['George Orwell', 'Aldous Huxley', 'Ray Bradbury', 'Margaret Atwood'],
    correct: 'George Orwell'
},
{
    hasContent: false,
    quest: 'In J.K. Rowling\'s "Harry Potter" series, what is the name of the wizarding school attended by Harry, Hermione, and Ron?',
    choices: ['Hogwarts School of Witchcraft and Wizardry', 'Ilvermorny School of Witchcraft and Wizardry', 'Beauxbatons Academy of Magic', 'Durmstrang Institute'],
    correct: 'Hogwarts School of Witchcraft and Wizardry'
},
{
    hasContent: false,
    quest: 'Which novel by Jane Austen follows the romantic relationships of Elizabeth Bennet and her sisters as they navigate societal expectations?',
    choices: ['Pride and Prejudice', 'Sense and Sensibility', 'Emma', 'Mansfield Park'],
    correct: 'Pride and Prejudice'
},
{
    hasContent: false,
    quest: 'Who is the author of "To Kill a Mockingbird," a novel addressing racial injustice and moral growth in the American South?',
    choices: ['Harper Lee', 'J.D. Salinger', 'Mark Twain', 'F. Scott Fitzgerald'],
    correct: 'Harper Lee'
},
{
    hasContent: false,
    quest: 'In the fantasy series "The Lord of the Rings," who is the author of the One Ring, the dark lord seeking to dominate Middle-earth?',
    choices: ['Sauron', 'Gollum', 'Saruman', 'Frodo Baggins'],
    correct: 'Sauron'
},
{
    hasContent: false,
    quest: 'Which dystopian novel by Aldous Huxley explores a future society where people are controlled through pleasure and conditioning?',
    choices: ['Brave New World', 'Fahrenheit 451', 'The Handmaid\'s Tale', 'The Hunger Games'],
    correct: 'Brave New World'
},
{
    hasContent: false,
    quest: 'Who wrote "The Great Gatsby," a novel set during the Roaring Twenties and exploring themes of wealth, love, and the American Dream?',
    choices: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'John Steinbeck', 'J.D. Salinger'],
    correct: 'F. Scott Fitzgerald'
},
{
    hasContent: false,
    quest: 'What classic novel by Mary Shelley tells the story of Victor Frankenstein, who creates a creature through unconventional scientific experiments?',
    choices: ['Frankenstein', 'Dracula', 'The Picture of Dorian Gray', 'Wuthering Heights'],
    correct: 'Frankenstein'
},
{
    hasContent: false,
    quest: 'In the "Hunger Games" trilogy, what is the name of the protagonist who volunteers for the Games to protect her sister Prim?',
    choices: ['Katniss Everdeen', 'Peeta Mellark', 'Gale Hawthorne', 'Effie Trinket'],
    correct: 'Katniss Everdeen'
},
{
    hasContent: false,
    quest: 'Which classic science fiction novel by Ray Bradbury depicts a future society where books are banned and "firemen" burn any that are found?',
    choices: ['Fahrenheit 451', 'Brave New World', '1984', 'The Handmaid\'s Tale'],
    correct: 'Fahrenheit 451'
},
{
    hasContent: false,
    quest: 'Who is the author of the "Game of Thrones" series, which inspired the television adaptation "Game of Thrones"?',
    choices: ['George R.R. Martin', 'J.K. Rowling', 'Stephen King', 'Tolkien'],
    correct: 'George R.R. Martin'
},
{
    hasContent: false,
    quest: 'Which classic novel by Charlotte Brontë follows the life of the orphan Jane Eyre as she becomes a governess and falls in love with Mr. Rochester?',
    choices: ['Jane Eyre', 'Wuthering Heights', 'Pride and Prejudice', 'Sense and Sensibility'],
    correct: 'Jane Eyre'
},
{
    hasContent: false,
    quest: 'In the "Divergent" series, what is the name of the protagonist who discovers she is "Divergent" and does not fit into any one faction?',
    choices: ['Tris Prior', 'Four Eaton', 'Christina', 'Eric'],
    correct: 'Tris Prior'
},
{
    hasContent: false,
    quest: 'Who wrote "The Catcher in the Rye," a novel following the experiences of Holden Caulfield in New York City?',
    choices: ['J.D. Salinger', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'Mark Twain'],
    correct: 'J.D. Salinger'
},
{
    hasContent: false,
    quest: 'In C.S. Lewis\'s "The Chronicles of Narnia" series, what is the name of the magical land that the Pevensie siblings discover?',
    choices: ['Narnia', 'Middle-earth', 'Oz', 'Neverland'],
    correct: 'Narnia'
}
];


