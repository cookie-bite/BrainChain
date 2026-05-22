const sportsQuestions = [
    {
        hasContent: false,
        quest: 'Who is known as the "Black Mamba" in basketball?',
        choices: ['LeBron James', 'Kobe Bryant', 'Michael Jordan', 'Shaquille O\'Neal'],
        correct: 'Kobe Bryant'
    },
    {
        hasContent: false,
        quest: 'Which team won the NBA championship in 2020?',
        choices: ['Miami Heat', 'Los Angeles Lakers', 'Boston Celtics', 'Denver Nuggets'],
        correct: 'Los Angeles Lakers'
    },
    {
        hasContent: false,
        quest: 'What is the term for scoring three points in a single shot in basketball?',
        choices: ['Dunk', 'Free throw', 'Three-pointer', 'Layup'],
        correct: 'Three-pointer'
    },
    {
        hasContent: false,
        quest: 'Which country won the FIFA World Cup in 2018?',
        choices: ['Brazil', 'Germany', 'France', 'Argentina'],
        correct: 'France'
    },
    {
        hasContent: false,
        quest: 'What is the regulation height of a basketball hoop?',
        choices: ['8 feet', '9 feet', '10 feet', '11 feet'],
        correct: '10 feet'
    },
    {
        hasContent: true,
        quest: 'Who invented the game of basketball?',
        content: 'Basketball is a popular sport played all around the world.',
        contentType: 'text',
        choices: ['James Naismith', 'Abner Doubleday', 'Walter Camp', 'William G. Morgan'],
        correct: 'James Naismith'
    },
    {
        hasContent: false,
        quest: 'Who is known as the "King of Football"?',
        choices: ['Diego Maradona', 'Lionel Messi', 'Cristiano Ronaldo', 'Pele'],
        correct: 'Pele'
    },
    {
        hasContent: false,
        quest: 'Which team won the UEFA Champions League in 2020?',
        choices: ['Liverpool', 'Bayern Munich', 'Paris Saint-Germain', 'Real Madrid'],
        correct: 'Bayern Munich'
    },
    {
        hasContent: true,
        quest: 'What is the term for this definition?',
        content: 'A method of restarting play in a game of football where the ball is thrown with both hands over the head.',
        choices: ['Kick-off', 'Penalty', 'Throw-in', 'Corner'],
        correct: 'Throw-in'
    },
    {
        hasContent: true,
        quest: 'What is the term for this definition?',
        content: 'A kick awarded to a player for a serious infringement of the rules, taken from the penalty spot.',
        choices: ['Free kick', 'Goal kick', 'Penalty kick', 'Corner kick'],
        correct: 'Penalty kick'
    },
    {
        hasContent: false,
        quest: 'Who won the Golden Boot in the 2018 FIFA World Cup?',
        choices: ['Lionel Messi', 'Neymar', 'Harry Kane', 'Cristiano Ronaldo'],
        correct: 'Harry Kane'
    },
    {
        hasContent: false,
        quest: 'Which country has won the most FIFA World Cup titles?',
        choices: ['Germany', 'Brazil', 'Argentina', 'France'],
        correct: 'Brazil'
    },
    {
        hasContent: false,
        quest: 'Which player has won the most FIFA World Player of the Year awards?',
        choices: ['Lionel Messi', 'Cristiano Ronaldo', 'Zinedine Zidane', 'Ronaldinho'],
        correct: 'Lionel Messi'
    },
    {
        hasContent: false,
        quest: 'Which team has won the most English Premier League titles?',
        choices: ['Liverpool', 'Manchester United', 'Arsenal', 'Chelsea'],
        correct: 'Manchester United'
    },
    {
        hasContent: false,
        quest: 'Who scored the "Hand of God" goal in the 1986 World Cup?',
        choices: ['Diego Maradona', 'Pele', 'Gary Lineker', 'Jorge Valdano'],
        correct: 'Diego Maradona'
    },
    {
        hasContent: false,
        quest: 'Which country hosted the 2014 FIFA World Cup?',
        choices: ['South Africa', 'Brazil', 'Germany', 'Russia'],
        correct: 'Brazil'
    },
    {
        hasContent: false,
        quest: 'Who is the all-time top scorer in the UEFA Champions League?',
        choices: ['Lionel Messi', 'Cristiano Ronaldo', 'Raul Gonzalez', 'Robert Lewandowski'],
        correct: 'Cristiano Ronaldo'
    },
    {
        hasContent: false,
        quest: 'Which team is known as "The Red Devils"?',
        choices: ['Liverpool', 'Manchester United', 'Arsenal', 'Chelsea'],
        correct: 'Manchester United'
    },
    {
        hasContent: false,
        quest: 'Who is the current manager of Manchester City (as of 2021)?',
        choices: ['Pep Guardiola', 'Jurgen Klopp', 'Jose Mourinho', 'Mikel Arteta'],
        correct: 'Pep Guardiola'
    },
    {
        hasContent: false,
        quest: 'Which player has won the most Ballon d\'Or awards?',
        choices: ['Lionel Messi', 'Cristiano Ronaldo', 'Michel Platini', 'Johan Cruyff'],
        correct: 'Lionel Messi'
    },
    {
        hasContent: false,
        quest: 'Which country does the footballer Neymar come from?',
        choices: ['Spain', 'Argentina', 'Brazil', 'Portugal'],
        correct: 'Brazil'
    },
    {
        hasContent: false,
        quest: 'Which football club is associated with the "Camp Nou" stadium?',
        choices: ['Real Madrid', 'Barcelona', 'Atletico Madrid', 'Sevilla'],
        correct: 'Barcelona'
    },
    {
        hasContent: false,
        quest: 'Who scored the fastest goal in Premier League history?',
        choices: ['Alan Shearer', 'Sergio Aguero', 'Mohamed Salah', 'Shane Long'],
        correct: 'Shane Long'
    },
    {
        hasContent: false,
        quest: 'Which country does the footballer Zlatan Ibrahimovic come from?',
        choices: ['Norway', 'Denmark', 'Sweden', 'Finland'],
        correct: 'Sweden'
    },
    {
        hasContent: false,
        quest: 'Who is the current captain of the England national football team (as of 2021)?',
        choices: ['Harry Kane', 'Raheem Sterling', 'Jordan Henderson', 'Marcus Rashford'],
        correct: 'Harry Kane'
    },
    {
        hasContent: false,
        quest: 'Who is known as the "Mozart of Chess"?',
        choices: ['Magnus Carlsen', 'Garry Kasparov', 'Bobby Fischer', 'Viswanathan Anand'],
        correct: 'Magnus Carlsen'
    },
    {
        hasContent: false,
        quest: 'How many squares are there on a standard chessboard?',
        choices: ['64', '72', '81', '100'],
        correct: '64'
    },
    {
        hasContent: false,
        quest: 'Which piece makes an L-shaped move?',
        choices: ['Bishop', 'Knight', 'Rook', 'Queen'],
        correct: 'Knight'
    },
    {
        hasContent: false,
        quest: 'What is the term for putting the opponent\'s king under direct attack?',
        choices: ['Check', 'Checkmate', 'Stalemate', 'Castling'],
        correct: 'Check'
    },
    {
        hasContent: false,
        quest: 'Who was the World Chess Champion from 1985 to 2000?',
        choices: ['Anatoly Karpov', 'Garry Kasparov', 'Bobby Fischer', 'Magnus Carlsen'],
        correct: 'Garry Kasparov'
    },
    {
        hasContent: false,
        quest: 'What is the only piece that can jump over other pieces?',
        choices: ['Knight', 'Bishop', 'Rook', 'Pawn'],
        correct: 'Knight'
    },
    {
        hasContent: false,
        quest: 'What is the term for a situation where any move a player makes will worsen their position?',
        choices: ['Stalemate', 'Checkmate', 'Zugzwang', 'Fork'],
        correct: 'Zugzwang'
    },
    {
        hasContent: false,
        quest: 'What is the initial setup of pawns on a chessboard?',
        choices: ['First row', 'Second row', 'Third row', 'Fourth row'],
        correct: 'Second row'
    },
    {
        hasContent: false,
        quest: 'What is the maximum number of queens a player can have on the board at once?',
        choices: ['1', '8', '16', '32'],
        correct: '9'
    },
    {
        hasContent: false,
        quest: 'What is the term for a draw due to insufficient material to checkmate?',
        choices: ['Stalemate', 'Draw by agreement', 'Threefold repetition', 'Insufficient material'],
        correct: 'Insufficient material'
    },
    {
        hasContent: false,
        quest: 'How many players are there in a volleyball team?',
        choices: ['5', '6', '7', '8'],
        correct: '6'
    },
    {
        hasContent: false,
        quest: 'What is the maximum number of times a team can touch the ball before it must cross over the net?',
        choices: ['1', '2', '3', '4'],
        correct: '3'
    },
    {
        hasContent: false,
        quest: 'What is the term for hitting the ball to the other team\'s court?',
        choices: ['Serve', 'Pass', 'Set', 'Attack'],
        correct: 'Attack'
    },
    {
        hasContent: false,
        quest: 'What is the term for a player making a save from a very difficult spike?',
        choices: ['Dig', 'Block', 'Serve', 'Set'],
        correct: 'Dig'
    },
    {
        hasContent: false,
        quest: 'What is the term for the defensive play by one or more players meant to deflect a spiked ball back to the hitter’s court?',
        choices: ['Dig', 'Block', 'Serve', 'Set'],
        correct: 'Block'
    },
    {
        hasContent: false,
        quest: 'What is the term for a serve that is not returnable and results immediately in a point?',
        choices: ['Ace', 'Kill', 'Dig', 'Block'],
        correct: 'Ace'
    },
    {
        hasContent: false,
        quest: 'What is the term for a ball that a player touches, but does not reach the opponent’s court?',
        choices: ['Fault', 'Ace', 'Kill', 'Dig'],
        correct: 'Fault'
    },
    {
        hasContent: false,
        quest: 'What is the term for a ball that is hit with force by a player on the offensive team?',
        choices: ['Spike', 'Serve', 'Set', 'Pass'],
        correct: 'Spike'
    },
    {
        hasContent: false,
        quest: 'What is the term for a ball that is set to a spiker who drives it over the net with a strong downward motion?',
        choices: ['Spike', 'Kill', 'Ace', 'Dig'],
        correct: 'Kill'
    },
    {
        hasContent: false,
        quest: 'Who is known as the "Greatest" in boxing?',
        choices: ['Mike Tyson', 'Floyd Mayweather', 'Muhammad Ali', 'Joe Frazier'],
        correct: 'Muhammad Ali'
    },
    {
        hasContent: false,
        quest: 'Which boxer was known as "Iron Mike"?',
        choices: ['Mike Tyson', 'Muhammad Ali', 'George Foreman', 'Joe Louis'],
        correct: 'Mike Tyson'
    },
    {
        hasContent: false,
        quest: 'Who won the famous "Thrilla in Manila" boxing match?',
        choices: ['Joe Frazier', 'Muhammad Ali', 'George Foreman', 'Sonny Liston'],
        correct: 'Muhammad Ali'
    },
    {
        hasContent: false,
        quest: 'Which boxer ended Mike Tyson\'s undefeated streak?',
        choices: ['Evander Holyfield', 'Lennox Lewis', 'Buster Douglas', 'Riddick Bowe'],
        correct: 'Buster Douglas'
    },
    {
        hasContent: false,
        quest: 'Who is the youngest boxer to win a heavyweight title?',
        choices: ['Muhammad Ali', 'Mike Tyson', 'Joe Frazier', 'George Foreman'],
        correct: 'Mike Tyson'
    },
    {
        hasContent: false,
        quest: 'Which boxer was known as the "Brown Bomber"?',
        choices: ['Joe Louis', 'Rocky Marciano', 'Jack Dempsey', 'Sugar Ray Robinson'],
        correct: 'Joe Louis'
    },
    {
        hasContent: false,
        quest: 'Who holds the record for the longest reigning Heavyweight Champion with 25 defenses?',
        choices: ['Joe Louis', 'Muhammad Ali', 'Mike Tyson', 'Larry Holmes'],
        correct: 'Joe Louis'
    },
    {
        hasContent: false,
        quest: 'Which boxer was known as "Sugar"?',
        choices: ['Sugar Ray Leonard', 'Sugar Ray Robinson', 'Floyd Mayweather', 'Manny Pacquiao'],
        correct: 'Sugar Ray Robinson'
    },
    {
        hasContent: false,
        quest: 'Who is the only boxer to retire with an undefeated record of 50 wins, 0 losses?',
        choices: ['Rocky Marciano', 'Floyd Mayweather', 'Joe Calzaghe', 'Andre Ward'],
        correct: 'Floyd Mayweather'
    },
    {
        hasContent: false,
        quest: 'Which boxer was known for his defensive "peek-a-boo" style?',
        choices: ['Mike Tyson', 'Floyd Patterson', 'Sonny Liston', 'Jack Johnson'],
        correct: 'Floyd Patterson'
    },
    {
        hasContent: false,
        quest: 'Who is known as the "Notorious" in MMA?',
        choices: ['Jon Jones', 'Khabib Nurmagomedov', 'Conor McGregor', 'Anderson Silva'],
        correct: 'Conor McGregor'
    },
    {
        hasContent: false,
        quest: 'Which fighter holds the record for the most title defenses in UFC history?',
        choices: ['Anderson Silva', 'Georges St-Pierre', 'Jon Jones', 'Demetrious Johnson'],
        correct: 'Demetrious Johnson'
    },
    {
        hasContent: false,
        quest: 'Who was the first woman to win a UFC Championship?',
        choices: ['Ronda Rousey', 'Amanda Nunes', 'Holly Holm', 'Cris Cyborg'],
        correct: 'Ronda Rousey'
    },
    {
        hasContent: false,
        quest: 'Which fighter is known for his phrase "I\'m not surprised, motherf***ers"?',
        choices: ['Nate Diaz', 'Conor McGregor', 'Jorge Masvidal', 'Israel Adesanya'],
        correct: 'Nate Diaz'
    },
    {
        hasContent: false,
        quest: 'Who did Conor McGregor fight in his professional boxing debut?',
        choices: ['Floyd Mayweather', 'Manny Pacquiao', 'Canelo Alvarez', 'Mike Tyson'],
        correct: 'Floyd Mayweather'
    },
    {
        hasContent: false,
        quest: 'Who is the youngest champion in UFC history?',
        choices: ['Jon Jones', 'Conor McGregor', 'Khabib Nurmagomedov', 'Israel Adesanya'],
        correct: 'Jon Jones'
    },
    {
        hasContent: false,
        quest: 'Which fighter is known as "GSP"?',
        choices: ['Georges St-Pierre', 'Gilbert Burns', 'Glover Teixeira', 'Germaine de Randamie'],
        correct: 'Georges St-Pierre'
    },
    {
        hasContent: false,
        quest: 'Who holds the record for the fastest knockout in UFC history?',
        choices: ['Jorge Masvidal', 'Conor McGregor', 'Amanda Nunes', 'Khabib Nurmagomedov'],
        correct: 'Jorge Masvidal'
    },
    {
        hasContent: false,
        quest: 'Which fighter is known as "The Last Stylebender"?',
        choices: ['Israel Adesanya', 'Jon Jones', 'Kamaru Usman', 'Dustin Poirier'],
        correct: 'Israel Adesanya'
    },
    {
        hasContent: false,
        quest: 'Who is the current UFC Heavyweight Champion (as of 2021)?',
        choices: ['Stipe Miocic', 'Francis Ngannou', 'Daniel Cormier', 'Derrick Lewis'],
        correct: 'Francis Ngannou'
    },
    {
        hasContent: false,
        quest: 'In which city were the 2008 Summer Olympics held?',
        choices: ['Beijing', 'London', 'Sydney', 'Athens'],
        correct: 'Beijing'
    },
    {
        hasContent: true,
        quest: 'Who holds the record for the most gold medals won at a single Olympic Games?',
        content: 'The Olympic Games is an international multi-sport event held every four years.',
        contentType: 'text',
        choices: ['Usain Bolt', 'Michael Phelps', 'Carl Lewis', 'Mark Spitz'],
        correct: 'Michael Phelps'
    },
    {
        hasContent: false,
        quest: 'What are the five colors of the Olympic rings?',
        choices: ['Red, Green, Blue, Yellow, Black', 'Red, Orange, Yellow, Green, Blue', 'Black, White, Red, Yellow, Blue', 'Blue, Yellow, Black, Green, Red'],
        correct: 'Blue, Yellow, Black, Green, Red'
    },
    {
        hasContent: true,
        quest: 'When were the first modern Olympic Games held?',
        content: 'The Olympic Games have a long history dating back to ancient Greece.',
        contentType: 'text',
        choices: ['1896', '1900', '1904', '1908'],
        correct: '1896'
    },
    {
        hasContent: false,
        quest: 'Which country has won the most total medals in the Summer Olympics?',
        choices: ['United States', 'Russia', 'Germany', 'China'],
        correct: 'United States'
    },
    {
        hasContent: true,
        quest: 'What is the motto of the Olympic Games?',
        content: 'The Olympic Games have a motto that encapsulates the spirit of the competition.',
        contentType: 'text',
        choices: ['Faster, Higher, Stronger', 'Swifter, Higher, Stronger', 'Quicker, Higher, Stronger', 'Faster, Higher, Braver'],
        correct: 'Faster, Higher, Stronger'
    },
    {
        hasContent: false,
        quest: 'Who was the first athlete to win five gold medals in a single Olympic Games?',
        choices: ['Jesse Owens', 'Michael Phelps', 'Usain Bolt', 'Eric Heiden'],
        correct: 'Eric Heiden'
    },
    {
        hasContent: true,
        quest: 'Which city hosted the first Winter Olympic Games?',
        content: 'The Winter Olympic Games is a major international multi-sport event held once every four years for sports practiced on snow and ice.',
        contentType: 'text',
        choices: ['Chamonix', 'St. Moritz', 'Lake Placid', 'Oslo'],
        correct: 'Chamonix'
    },
    {
        hasContent: false,
        quest: 'In what year were the first modern Olympic Games held?',
        choices: ['1896', '1900', '1904', '1908'],
        correct: '1896'
    },
    {
        hasContent: true,
        quest: 'What are the five colors of the Olympic rings?',
        content: 'The Olympic rings are five interlocking rings that stand for the five original continents.',
        contentType: 'text',
        choices: ['Blue, Yellow, Black, Green, Red', 'Blue, Yellow, Black, White, Red', 'Blue, Yellow, Black, Green, White', 'Blue, Yellow, Black, Green, Orange'],
        correct: 'Blue, Yellow, Black, Green, Red'
    },
    {
        hasContent: false,
        quest: 'Which country has hosted the most Olympic Games?',
        choices: ['United States', 'France', 'Germany', 'Japan'],
        correct: 'United States'
    },
    {
        hasContent: true,
        quest: 'Who is the most decorated Olympian of all time?',
        content: 'The most decorated Olympian of all time has won the most total medals across all Olympic Games.',
        contentType: 'text',
        choices: ['Michael Phelps', 'Larisa Latynina', 'Nikolai Andrianov', 'Boris Shakhlin'],
        correct: 'Michael Phelps'
    },
    {
        hasContent: false,
        quest: 'What is the symbol of the Olympic Games?',
        choices: ['Torch', 'Medal', 'Olympic Rings', 'Olympic Flag'],
        correct: 'Olympic Rings'
    },
    {
        hasContent: true,
        quest: 'What does the Olympic flame symbolize?',
        content: 'The Olympic flame is a symbol used in the Olympic movement. It is also a symbol of continuity between ancient and modern games.',
        contentType: 'text',
        choices: ['Victory', 'Unity', 'Peace', 'Continuity'],
        correct: 'Continuity'
    },
    {
        hasContent: false,
        quest: 'Who is known as the "Austrian Oak" in bodybuilding?',
        choices: ['Jay Cutler', 'Ronnie Coleman', 'Arnold Schwarzenegger', 'Dorian Yates'],
        correct: 'Arnold Schwarzenegger'
    },
    {
        hasContent: true,
        quest: 'What is the name of the most prestigious bodybuilding competition?',
        content: 'This competition is considered the top-level professional bodybuilding championship.',
        contentType: 'text',
        choices: ['Mr. Universe', 'Mr. Olympia', 'Arnold Classic', 'World Bodybuilding Championship'],
        correct: 'Mr. Olympia'
    },
    {
        hasContent: false,
        quest: 'What is the primary role of protein in bodybuilding?',
        choices: ['Energy production', 'Muscle growth and repair', 'Fat storage', 'Bone strengthening'],
        correct: 'Muscle growth and repair'
    },
    {
        hasContent: true,
        quest: 'Who holds the record for the most Mr. Olympia wins?',
        content: 'Mr. Olympia is an international bodybuilding competition that is held annually by the International Federation of BodyBuilding & Fitness (IFBB).',
        contentType: 'text',
        choices: ['Arnold Schwarzenegger', 'Lee Haney', 'Ronnie Coleman', 'Dorian Yates'],
        correct: 'Ronnie Coleman'
    },
    {
        hasContent: false,
        quest: 'What does the term "cutting" mean in bodybuilding?',
        choices: ['Increasing muscle size', 'Decreasing body fat', 'Increasing strength', 'Decreasing water weight'],
        correct: 'Decreasing body fat'
    },
    {
        hasContent: true,
        quest: 'What is the role of carbohydrates in bodybuilding?',
        content: 'Carbohydrates play a significant role in a bodybuilding diet.',
        contentType: 'text',
        choices: ['They provide energy', 'They promote fat loss', 'They slow down metabolism', 'They decrease muscle mass'],
        correct: 'They provide energy'
    },
    {
        hasContent: false,
        quest: 'What is a common side effect of steroid use in bodybuilding?',
        choices: ['Increased flexibility', 'Decreased appetite', 'Increased hair growth', 'Decreased aggression'],
        correct: 'Increased hair growth'
    },
    {
        hasContent: true,
        quest: 'What is the recommended amount of protein intake per day for bodybuilders?',
        content: 'Protein is a crucial nutrient for muscle growth and repair in bodybuilding.',
        contentType: 'text',
        choices: ['0.8 grams per kilogram of body weight', '1.2 grams per kilogram of body weight', '1.6 grams per kilogram of body weight', '2.0 grams per kilogram of body weight'],
        correct: '1.6 grams per kilogram of body weight'
    },
    {
        hasContent: false,
        quest: 'What is the term for the phase of intense training before a bodybuilding competition?',
        choices: ['Bulking', 'Cutting', 'Loading', 'Peaking'],
        correct: 'Peaking'
    },
    {
        hasContent: true,
        quest: 'What is the role of creatine in bodybuilding?',
        content: 'Creatine is a popular supplement used by many bodybuilders.',
        contentType: 'text',
        choices: ['It promotes fat loss', 'It increases energy', 'It boosts immunity', 'It improves flexibility'],
        correct: 'It increases energy'
    }
]
const anatomyQuestions = [{
    hasContent: false,
    quest: 'What is the hard, rigid form of connective tissue constituting most of the skeleton of vertebrates?',
    choices: ['Cartilage', 'Bone', 'Ligament', 'Tendon'],
    correct: 'Bone'
},
{
    hasContent: true,
    quest: 'What is the soft, flexible tissue that fills the interior of bones?',
    content: 'This tissue is crucial for producing blood cells.',
    contentType: 'text',
    choices: ['Bone marrow', 'Cartilage', 'Periosteum', 'Endosteum'],
    correct: 'Bone marrow'
},
{
    hasContent: false,
    quest: 'What is the term for the process of bone formation?',
    choices: ['Ossification', 'Calcification', 'Fibrosis', 'Keratinization'],
    correct: 'Ossification'
},
{
    hasContent: true,
    quest: 'What type of bone is the femur?',
    content: 'Bones can be classified into several types based on their shape.',
    contentType: 'text',
    choices: ['Long bone', 'Short bone', 'Flat bone', 'Irregular bone'],
    correct: 'Long bone'
},
{
    hasContent: false,
    quest: 'What is the outer surface of bone called?',
    choices: ['Periosteum', 'Endosteum', 'Epiphysis', 'Diaphysis'],
    correct: 'Periosteum'
},
{
    hasContent: true,
    quest: 'What type of cells are responsible for bone resorption?',
    content: 'Bone is a dynamic tissue that is constantly being broken down and rebuilt.',
    contentType: 'text',
    choices: ['Osteoblasts', 'Osteocytes', 'Osteoclasts', 'Chondrocytes'],
    correct: 'Osteoclasts'
},
{
    hasContent: false,
    quest: 'What is the name of the bone in the upper arm or forelimb, extending from the shoulder to the elbow?',
    choices: ['Humerus', 'Radius', 'Ulna', 'Femur'],
    correct: 'Humerus'
},
{
    hasContent: true,
    quest: 'What is the primary mineral found in bones?',
    content: 'Bones are composed of various minerals to provide strength and rigidity.',
    contentType: 'text',
    choices: ['Calcium', 'Iron', 'Potassium', 'Sodium'],
    correct: 'Calcium'
},
{
    hasContent: false,
    quest: 'What is the name of the bone disorder characterized by decreased bone mass and increased susceptibility to fractures?',
    choices: ['Arthritis', 'Osteoporosis', 'Rickets', 'Scoliosis'],
    correct: 'Osteoporosis'
},
{
    hasContent: true,
    quest: 'What is the name of the bone that forms the forehead?',
    content: 'The human skull is composed of several bones that form the head and face.',
    contentType: 'text',
    choices: ['Temporal bone', 'Parietal bone', 'Frontal bone', 'Occipital bone'],
    correct: 'Frontal bone'
},
{
    hasContent: false,
    quest: 'What is the largest bone in the human body?',
    choices: ['Femur', 'Humerus', 'Tibia', 'Pelvis'],
    correct: 'Femur'
},
{
    hasContent: true,
    quest: 'What is the function of the rib cage?',
    content: 'The rib cage is an important structure in the human body.',
    contentType: 'text',
    choices: ['Protects the heart and lungs', 'Supports the arms', 'Protects the brain', 'Supports the legs'],
    correct: 'Protects the heart and lungs'
},
{
    hasContent: false,
    quest: 'How many bones are there in the human hand (including the wrist)?',
    choices: ['27', '30', '32', '36'],
    correct: '27'
},
{
    hasContent: true,
    quest: 'What is the smallest bone in the human body?',
    content: 'The human body has over 200 bones of various sizes.',
    contentType: 'text',
    choices: ['Stapes', 'Malleus', 'Incus', 'Cochlea'],
    correct: 'Stapes'
},
{
    hasContent: false,
    quest: 'What is the term for the growth plate in a bone?',
    choices: ['Epiphysis', 'Diaphysis', 'Metaphysis', 'Epiphyseal plate'],
    correct: 'Epiphyseal plate'
},
{
    hasContent: true,
    quest: 'What type of joint allows for rotation, such as the neck?',
    content: 'Joints in the human body allow for various types of movement.',
    contentType: 'text',
    choices: ['Hinge joint', 'Pivot joint', 'Ball and socket joint', 'Saddle joint'],
    correct: 'Pivot joint'
},
{
    hasContent: false,
    quest: 'What is the bone that is located in the chest, between the two clavicles?',
    choices: ['Sternum', 'Scapula', 'Ribs', 'Vertebrae'],
    correct: 'Sternum'
},
{
    hasContent: true,
    quest: 'What is the function of the vertebral column?',
    content: 'The vertebral column, or spine, is a crucial part of the human skeletal system.',
    contentType: 'text',
    choices: ['Protects the spinal cord', 'Produces blood cells', 'Stores calcium', 'Allows for arm movement'],
    correct: 'Protects the spinal cord'
},
{
    hasContent: false,
    quest: 'What is the name of the first cervical vertebra that supports the head?',
    choices: ['Atlas', 'Axis', 'Vertebra prominens', 'Odontoid process'],
    correct: 'Atlas'
},
{
    hasContent: true,
    quest: 'What is the function of the patella?',
    content: 'The patella, or kneecap, is a small bone located in front of the knee joint.',
    contentType: 'text',
    choices: ['Increases knee flexibility', 'Protects the knee joint', 'Allows for leg rotation', 'Produces red blood cells'],
    correct: 'Protects the knee joint'
},
{
    hasContent: false,
    quest: 'What is the largest muscle in the human body?',
    choices: ['Gluteus Maximus', 'Latissimus Dorsi', 'Gastrocnemius', 'Pectoralis Major'],
    correct: 'Gluteus Maximus'
},
{
    hasContent: true,
    quest: 'What is the function of the biceps brachii?',
    content: 'The biceps brachii is a muscle located in the upper arm.',
    contentType: 'text',
    choices: ['Elbow extension', 'Elbow flexion', 'Knee extension', 'Knee flexion'],
    correct: 'Elbow flexion'
},
{
    hasContent: false,
    quest: 'What type of muscle is the heart made of?',
    choices: ['Skeletal muscle', 'Smooth muscle', 'Cardiac muscle', 'Connective tissue'],
    correct: 'Cardiac muscle'
},
{
    hasContent: true,
    quest: 'What is the role of the deltoid muscle?',
    content: 'The deltoid muscle is located in the shoulder.',
    contentType: 'text',
    choices: ['Hip flexion', 'Shoulder abduction', 'Elbow extension', 'Knee flexion'],
    correct: 'Shoulder abduction'
},
{
    hasContent: false,
    quest: 'What is the term for the contraction of a muscle due to a reflex?',
    choices: ['Tetanic contraction', 'Isotonic contraction', 'Isometric contraction', 'Reflexive contraction'],
    correct: 'Reflexive contraction'
},
{
    hasContent: true,
    quest: 'What is the function of the rectus abdominis?',
    content: 'The rectus abdominis is one of the main muscles targeted in abdominal exercises.',
    contentType: 'text',
    choices: ['Spinal extension', 'Spinal flexion', 'Hip abduction', 'Hip adduction'],
    correct: 'Spinal flexion'
},
{
    hasContent: false,
    quest: 'What is the primary function of the triceps brachii?',
    choices: ['Elbow flexion', 'Elbow extension', 'Shoulder flexion', 'Shoulder extension'],
    correct: 'Elbow extension'
},
{
    hasContent: true,
    quest: 'What is the role of the quadriceps femoris?',
    content: 'The quadriceps femoris is a group of muscles located in the front of the thigh.',
    contentType: 'text',
    choices: ['Knee flexion', 'Knee extension', 'Hip flexion', 'Hip extension'],
    correct: 'Knee extension'
},
{
    hasContent: false,
    quest: 'What is the smallest muscle in the human body?',
    choices: ['Stapedius', 'Tensor tympani', 'Sartorius', 'Gracilis'],
    correct: 'Stapedius'
},
{
    hasContent: true,
    quest: 'What is the function of the gastrocnemius?',
    content: 'The gastrocnemius is a large muscle located in the back part of the lower leg.',
    contentType: 'text',
    choices: ['Ankle dorsiflexion', 'Ankle plantarflexion', 'Knee flexion', 'Knee extension'],
    correct: 'Ankle plantarflexion'
},
{
    hasContent: false,
    quest: 'What is the muscle that flexes and rotates the neck?',
    choices: ['Sternocleidomastoid', 'Trapezius', 'Latissimus dorsi', 'Deltoid'],
    correct: 'Sternocleidomastoid'
},
{
    hasContent: true,
    quest: 'What is the function of the hamstrings?',
    content: 'The hamstrings are a group of muscles located at the back of the thigh.',
    contentType: 'text',
    choices: ['Knee flexion', 'Knee extension', 'Hip flexion', 'Hip extension'],
    correct: 'Knee flexion'
},
{
    hasContent: false,
    quest: 'What type of muscle is found in the walls of blood vessels?',
    choices: ['Skeletal muscle', 'Smooth muscle', 'Cardiac muscle', 'Striated muscle'],
    correct: 'Smooth muscle'
},
{
    hasContent: true,
    quest: 'What is the role of the pectoralis major?',
    content: 'The pectoralis major is a large muscle located in the chest.',
    contentType: 'text',
    choices: ['Shoulder flexion', 'Shoulder extension', 'Elbow flexion', 'Elbow extension'],
    correct: 'Shoulder flexion'
},
{
    hasContent: false,
    quest: 'What is the term for the increase in muscle size?',
    choices: ['Atrophy', 'Hypertrophy', 'Hyperplasia', 'Dystrophy'],
    correct: 'Hypertrophy'
},
{
    hasContent: true,
    quest: 'What is the function of the tibialis anterior?',
    content: 'The tibialis anterior is a muscle located in the lower leg.',
    contentType: 'text',
    choices: ['Ankle plantarflexion', 'Ankle dorsiflexion', 'Knee flexion', 'Knee extension'],
    correct: 'Ankle dorsiflexion'
},
{
    hasContent: false,
    quest: 'What is the primary function of the rotator cuff muscles?',
    choices: ['Shoulder flexion', 'Shoulder extension', 'Shoulder abduction', 'Shoulder rotation'],
    correct: 'Shoulder rotation'
},
{
    hasContent: true,
    quest: 'What is the role of the serratus anterior?',
    content: 'The serratus anterior is a muscle that originates on the surface of the upper eight ribs at the side of the chest and inserts along the entire anterior length of the medial border of the scapula.',
    contentType: 'text',
    choices: ['Scapular retraction', 'Scapular protraction', 'Scapular elevation', 'Scapular depression'],
    correct: 'Scapular protraction'
},
{
    hasContent: false,
    quest: 'What is the muscle on the back of the upper arm?',
    choices: ['Biceps brachii', 'Triceps brachii', 'Brachialis', 'Brachioradialis'],
    correct: 'Triceps brachii'
},
{
    hasContent: true,
    quest: 'What is the function of the latissimus dorsi?',
    content: 'The latissimus dorsi is one of the largest muscles in the back.',
    contentType: 'text',
    choices: ['Shoulder flexion', 'Shoulder extension', 'Shoulder abduction', 'Shoulder adduction'],
    correct: 'Shoulder extension'
},
{
    hasContent: false,
    quest: 'What is the largest artery in the human body?',
    choices: ['Aorta', 'Pulmonary artery', 'Carotid artery', 'Femoral artery'],
    correct: 'Aorta'
},
{
    hasContent: true,
    quest: 'What is the function of capillaries?',
    content: 'Capillaries are the smallest blood vessels in the body.',
    contentType: 'text',
    choices: ['Transport blood from the heart to the body', 'Transport blood from the body to the heart', 'Facilitate the exchange of oxygen and nutrients', 'Regulate blood pressure'],
    correct: 'Facilitate the exchange of oxygen and nutrients'
},
{
    hasContent: false,
    quest: 'What type of blood vessel carries blood away from the heart?',
    choices: ['Artery', 'Vein', 'Capillary', 'Ventricle'],
    correct: 'Artery'
},
{
    hasContent: true,
    quest: 'What is the function of the vena cava?',
    content: 'The vena cava is a large vein that carries deoxygenated blood into the heart.',
    contentType: 'text',
    choices: ['Carries oxygenated blood to the body', 'Carries deoxygenated blood to the lungs', 'Carries oxygenated blood to the heart', 'Carries deoxygenated blood to the heart'],
    correct: 'Carries deoxygenated blood to the heart'
},
{
    hasContent: false,
    quest: 'What is the term for the smallest blood vessels in the body?',
    choices: ['Arteries', 'Veins', 'Capillaries', 'Venules'],
    correct: 'Capillaries'
},
{
    hasContent: true,
    quest: 'What is the role of the pulmonary artery?',
    content: 'The pulmonary artery is one of the major vessels in the circulatory system.',
    contentType: 'text',
    choices: ['Carries oxygenated blood from the lungs to the heart', 'Carries deoxygenated blood from the heart to the lungs', 'Carries oxygenated blood from the heart to the body', 'Carries deoxygenated blood from the body to the heart'],
    correct: 'Carries deoxygenated blood from the heart to the lungs'
},
{
    hasContent: false,
    quest: 'What type of blood vessel carries blood towards the heart?',
    choices: ['Artery', 'Vein', 'Capillary', 'Atrium'],
    correct: 'Vein'
},
{
    hasContent: true,
    quest: 'What is the function of the carotid artery?',
    content: 'The carotid arteries are major blood vessels in the neck that supply blood to the brain, neck, and face.',
    contentType: 'text',
    choices: ['Carries blood to the lower body', 'Carries blood to the upper body', 'Carries blood to the brain', 'Carries blood to the heart'],
    correct: 'Carries blood to the brain'
},
{
    hasContent: false,
    quest: 'What is the term for the pressure of blood in the circulatory system?',
    choices: ['Heart rate', 'Cardiac output', 'Blood pressure', 'Pulse rate'],
    correct: 'Blood pressure'
},
{
    hasContent: true,
    quest: 'What is the role of the coronary arteries?',
    content: 'The coronary arteries are the vessels that supply oxygen-rich blood to the myocardium (the muscle tissue of the heart).',
    contentType: 'text',
    choices: ['Supply blood to the brain', 'Supply blood to the lungs', 'Supply blood to the heart', 'Supply blood to the lower body'],
    correct: 'Supply blood to the heart'
},
{
    hasContent: false,
    quest: 'What is the main function of red blood cells?',
    choices: ['Fight infection', 'Clot blood', 'Carry oxygen', 'Regulate blood pressure'],
    correct: 'Carry oxygen'
},
{
    hasContent: true,
    quest: 'What is the function of the venae cavae?',
    content: 'The venae cavae are the two largest veins in the body.',
    contentType: 'text',
    choices: ['Carry oxygenated blood to the heart', 'Carry deoxygenated blood to the heart', 'Carry oxygenated blood to the body', 'Carry deoxygenated blood to the body'],
    correct: 'Carry deoxygenated blood to the heart'
},
{
    hasContent: false,
    quest: 'What type of blood does the pulmonary artery carry?',
    choices: ['Oxygenated blood', 'Deoxygenated blood', 'Both oxygenated and deoxygenated blood', 'Neither oxygenated nor deoxygenated blood'],
    correct: 'Deoxygenated blood'
},
{
    hasContent: true,
    quest: 'What is the function of white blood cells?',
    content: 'White blood cells are an important part of the immune system.',
    contentType: 'text',
    choices: ['Carry oxygen', 'Fight infection', 'Clot blood', 'Carry nutrients'],
    correct: 'Fight infection'
},
{
    hasContent: false,
    quest: 'What is the function of platelets?',
    choices: ['Carry oxygen', 'Fight infection', 'Clot blood', 'Carry nutrients'],
    correct: 'Clot blood'
},
{
    hasContent: true,
    quest: 'What is the function of the aorta?',
    content: 'The aorta is the main and largest artery in the human body, originating from the left ventricle of the heart and extending down to the abdomen.',
    contentType: 'text',
    choices: ['Carries oxygenated blood from the heart to the body', 'Carries deoxygenated blood from the body to the heart', 'Carries oxygenated blood from the body to the heart', 'Carries deoxygenated blood from the heart to the body'],
    correct: 'Carries oxygenated blood from the heart to the body'
},
{
    hasContent: false,
    quest: 'What is the smallest blood vessel in the human body?',
    choices: ['Artery', 'Vein', 'Capillary', 'Arteriole'],
    correct: 'Capillary'
},
{
    hasContent: true,
    quest: 'What is the function of the pulmonary veins?',
    content: 'The pulmonary veins are a set of veins that deliver oxygenated blood from the lungs to the heart.',
    contentType: 'text',
    choices: ['Carry oxygenated blood from the lungs to the heart', 'Carry deoxygenated blood from the heart to the lungs', 'Carry oxygenated blood from the heart to the body', 'Carry deoxygenated blood from the body to the heart'],
    correct: 'Carry oxygenated blood from the lungs to the heart'
},
{
    hasContent: false,
    quest: 'What is the function of the circulatory system?',
    choices: ['Digest food', 'Remove waste products', 'Produce hormones', 'Regulate body temperature'],
    correct: 'Remove waste products'
},
{
    hasContent: true,
    quest: 'What is the function of the lymphatic system?',
    content: 'The lymphatic system is a network of tissues and organs that help rid the body of toxins, waste and other unwanted materials.',
    contentType: 'text',
    choices: ['Transport nutrients', 'Fight infection', 'Produce hormones', 'Regulate body temperature'],
    correct: 'Fight infection'
},
{
    hasContent: false,
    quest: 'What is the function of the cerebellum?',
    choices: ['Regulates body temperature', 'Controls voluntary movements', 'Regulates sleep', 'Processes sensory information'],
    correct: 'Controls voluntary movements'
},
{
    hasContent: false,
    quest: 'Which part of the brain is responsible for processing visual information?',
    choices: ['Cerebellum', 'Cerebrum', 'Occipital lobe', 'Frontal lobe'],
    correct: 'Occipital lobe'
},
{
    hasContent: false,
    quest: 'What is the name of the longest nerve in the human body?',
    choices: ['Vagus nerve', 'Sciatic nerve', 'Optic nerve', 'Spinal cord'],
    correct: 'Sciatic nerve'
},
{
    hasContent: false,
    quest: 'What is the role of the spinal cord in the nervous system?',
    choices: ['Controls heart rate', 'Regulates body temperature', 'Processes sensory information', 'Transmits signals between the brain and the rest of the body'],
    correct: 'Transmits signals between the brain and the rest of the body'
},
{
    hasContent: false,
    quest: 'Which neurotransmitter is associated with pleasure and reward?',
    choices: ['Dopamine', 'Serotonin', 'Acetylcholine', 'Endorphins'],
    correct: 'Dopamine'
},
{
    hasContent: false,
    quest: 'What is the function of the myelin sheath?',
    choices: ['Protects the brain', 'Regulates blood flow', 'Provides insulation for nerve fibers', 'Controls hormone production'],
    correct: 'Provides insulation for nerve fibers'
},
{
    hasContent: false,
    quest: 'What is the name of the junction between two neurons?',
    choices: ['Synapse', 'Nucleus', 'Axon', 'Dendrite'],
    correct: 'Synapse'
},
{
    hasContent: false,
    quest: 'Which part of the brain is responsible for regulating basic functions such as breathing and heart rate?',
    choices: ['Cerebrum', 'Cerebellum', 'Medulla oblongata', 'Pons'],
    correct: 'Medulla oblongata'
},
{
    hasContent: false,
    quest: 'What is the function of the parasympathetic nervous system?',
    choices: ['Controls fight or flight response', 'Regulates energy expenditure', 'Promotes rest and digestion', 'Regulates body temperature'],
    correct: 'Promotes rest and digestion'
},
{
    hasContent: false,
    quest: 'What is the role of the hypothalamus in the brain?',
    choices: ['Regulates body temperature', 'Controls hunger and thirst', 'Regulates sleep-wake cycles', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'Which part of the brain is responsible for processing auditory information?',
    choices: ['Occipital lobe', 'Temporal lobe', 'Parietal lobe', 'Frontal lobe'],
    correct: 'Temporal lobe'
},
{
    hasContent: false,
    quest: 'What is the function of the amygdala?',
    choices: ['Regulates body temperature', 'Controls voluntary movements', 'Processes emotions such as fear and aggression', 'Regulates sleep'],
    correct: 'Processes emotions such as fear and aggression'
},
{
    hasContent: false,
    quest: 'Which neurotransmitter is associated with mood regulation?',
    choices: ['Dopamine', 'Serotonin', 'Acetylcholine', 'Endorphins'],
    correct: 'Serotonin'
},
{
    hasContent: false,
    quest: 'What is the function of the frontal lobe?',
    choices: ['Processes visual information', 'Controls voluntary movements', 'Regulates body temperature', 'Processes emotions'],
    correct: 'Controls voluntary movements'
},
{
    hasContent: false,
    quest: 'What is the main function of the peripheral nervous system?',
    choices: ['Regulates body temperature', 'Transmits signals between the brain and spinal cord', 'Controls voluntary movements', 'Connects the central nervous system to the rest of the body'],
    correct: 'Connects the central nervous system to the rest of the body'
},
{
    hasContent: false,
    quest: 'Which part of the brain is responsible for processing sensory information such as touch and pain?',
    choices: ['Occipital lobe', 'Parietal lobe', 'Temporal lobe', 'Frontal lobe'],
    correct: 'Parietal lobe'
},
{
    hasContent: false,
    quest: 'What is the function of the autonomic nervous system?',
    choices: ['Controls voluntary movements', 'Regulates body temperature', 'Controls involuntary functions such as heart rate and digestion', 'Processes sensory information'],
    correct: 'Controls involuntary functions such as heart rate and digestion'
},
{
    hasContent: false,
    quest: 'Which part of the brain is responsible for processing language?',
    choices: ['Occipital lobe', 'Temporal lobe', 'Parietal lobe', 'Frontal lobe'],
    correct: 'Frontal lobe'
},
{
    hasContent: false,
    quest: 'What is the function of the optic nerve?',
    choices: ['Controls voluntary movements', 'Processes visual information', 'Regulates body temperature', 'Transmits signals between the brain and spinal cord'],
    correct: 'Processes visual information'
},
{
    hasContent: false,
    quest: 'Which type of neurons carry signals from the body to the brain?',
    choices: ['Sensory Neurons', 'Motor Neurons', 'Interneurons', 'Reflex Neurons'],
    correct: 'Sensory Neurons'
},
{
    hasContent: false,
    quest: 'What is the basic structural and functional unit of the nervous system?',
    choices: ['Cell', 'Tissue', 'Organ', 'Neuron'],
    correct: 'Neuron'
},
{
    hasContent: false,
    quest: 'Which division of the nervous system controls involuntary bodily functions?',
    choices: ['Central Nervous System', 'Peripheral Nervous System', 'Autonomic Nervous System', 'Somatic Nervous System'],
    correct: 'Autonomic Nervous System'
},
{
    hasContent: false,
    quest: 'What is the fatty substance that insulates and speeds up the transmission of nerve impulses?',
    choices: ['Glucose', 'Melatonin', 'Myelin', 'Serotonin'],
    correct: 'Myelin'
},
{
    hasContent: false,
    quest: 'Which neurotransmitter is associated with mood regulation and pleasure?',
    choices: ['Dopamine', 'Serotonin', 'Acetylcholine', 'GABA'],
    correct: 'Dopamine'
},
{
    hasContent: false,
    quest: 'What is the largest part of the human brain?',
    choices: ['Cerebellum', 'Medulla Oblongata', 'Cerebrum', 'Brainstem'],
    correct: 'Cerebrum'
},
{
    hasContent: false,
    quest: 'Which lobe of the brain is responsible for processing visual information?',
    choices: ['Frontal Lobe', 'Parietal Lobe', 'Occipital Lobe', 'Temporal Lobe'],
    correct: 'Occipital Lobe'
},
{
    hasContent: false,
    quest: 'What is the function of the spinal cord in the nervous system?',
    choices: ['Memory Storage', 'Movement Control', 'Pain Perception', 'Signal Transmission'],
    correct: 'Signal Transmission'
},
{
    hasContent: false,
    quest: 'Which part of the nervous system is responsible for fight or flight responses?',
    choices: ['Sympathetic Nervous System', 'Parasympathetic Nervous System', 'Somatic Nervous System', 'Enteric Nervous System'],
    correct: 'Sympathetic Nervous System'
},
{
    hasContent: false,
    quest: 'What is the main function of the cerebellum?',
    choices: ['Speech Production', 'Motor Coordination', 'Emotional Regulation', 'Memory Storage'],
    correct: 'Motor Coordination'
},
{
    hasContent: false,
    quest: 'Which cranial nerve is responsible for the sense of smell?',
    choices: ['Olfactory Nerve', 'Optic Nerve', 'Trigeminal Nerve', 'Facial Nerve'],
    correct: 'Olfactory Nerve'
},
{
    hasContent: false,
    quest: 'What is the role of the medulla oblongata?',
    choices: ['Hormone Regulation', 'Breathing and Heart Rate', 'Digestive Processes', 'Muscle Coordination'],
    correct: 'Breathing and Heart Rate'
},
{
    hasContent: false,
    quest: 'Which part of the brain is associated with memory and learning?',
    choices: ['Hippocampus', 'Amygdala', 'Thalamus', 'Hypothalamus'],
    correct: 'Hippocampus'
},
{
    hasContent: false,
    quest: 'What is the space between two neurons where communication occurs?',
    choices: ['Synapse', 'Axon', 'Dendrite', 'Neurotransmitter'],
    correct: 'Synapse'
},
{
    hasContent: false,
    quest: 'Which disorder is characterized by progressive degeneration of nerve cells in the brain?',
    choices: ['Alzheimer\'s Disease', 'Parkinson\'s Disease', 'Multiple Sclerosis', 'Epilepsy'],
    correct: 'Alzheimer\'s Disease'
},
{
    hasContent: true,
    quest: 'What is the function of the frontal lobe in the human brain?',
    content: 'This lobe is involved in decision-making, problem-solving, and personality.',
    choices: ['Motor Control', 'Language Processing', 'Emotional Control', 'Cognitive Functions'],
    correct: 'Cognitive Functions'
},
{
    hasContent: true,
    quest: 'Explain the role of the autonomic nervous system in the body.',
    content: 'This system regulates involuntary bodily functions such as heart rate, digestion, and respiratory rate.',
    choices: ['Digestive Control', 'Fight or Flight Responses', 'Voluntary Movements', 'Muscle Coordination'],
    correct: 'Fight or Flight Responses'
},
{
    hasContent: true,
    quest: 'What is the function of the thalamus in the central nervous system?',
    content: 'The thalamus serves as a relay station for sensory information, directing it to the appropriate areas of the brain.',
    choices: ['Emotional Regulation', 'Memory Storage', 'Sensory Signal Processing', 'Motor Coordination'],
    correct: 'Sensory Signal Processing'
},
{
    hasContent: true,
    quest: 'How does the peripheral nervous system differ from the central nervous system?',
    content: 'The peripheral nervous system includes nerves outside the brain and spinal cord, while the central nervous system consists of the brain and spinal cord.',
    choices: ['Spatial Orientation', 'Coordination of Movements', 'Temperature Regulation', 'Transmission of Signals'],
    correct: 'Transmission of Signals'
}
]
const astronomyQuestions = [ {
    hasContent: false,
    quest: 'What is the term for the study of the origin and evolution of the universe?',
    choices: ['Astronomy', 'Astrophysics', 'Cosmology', 'Meteorology'],
    correct: 'Cosmology'
},
{
    hasContent: false,
    quest: 'What is the estimated age of the universe in billions of years?',
    choices: ['10 billion', '13.8 billion', '5 billion', '20 billion'],
    correct: '13.8 billion'
},
{
    hasContent: false,
    quest: 'What is the name of the theory that describes the rapid expansion of the universe after the Big Bang?',
    choices: ['String Theory', 'Quantum Mechanics', 'General Relativity', 'Inflation Theory'],
    correct: 'Inflation Theory'
},
{
    hasContent: false,
    quest: 'What is the most abundant element in the universe?',
    choices: ['Oxygen', 'Hydrogen', 'Helium', 'Carbon'],
    correct: 'Hydrogen'
},
{
    hasContent: false,
    quest: 'What is the cosmic microwave background radiation?',
    choices: ['Heat emitted by stars', 'Radiation from black holes', 'Afterglow of the Big Bang', 'Light from distant galaxies'],
    correct: 'Afterglow of the Big Bang'
},
{
    hasContent: false,
    quest: 'What is dark matter?',
    choices: ['Invisible matter that emits no light', 'Concentrated star clusters', 'Hot, dense plasma', 'Cosmic gas clouds'],
    correct: 'Invisible matter that emits no light'
},
{
    hasContent: false,
    quest: 'What is dark energy?',
    choices: ['Energy emitted by black holes', 'Force causing the expansion of the universe', 'Matter within galaxies', 'Light from distant quasars'],
    correct: 'Force causing the expansion of the universe'
},
{
    hasContent: false,
    quest: 'What is the term for the boundary around a black hole beyond which nothing can escape?',
    choices: ['Event Horizon', 'Singularity', 'Ergosphere', 'Photon Sphere'],
    correct: 'Event Horizon'
},
{
    hasContent: false,
    quest: 'What is a quasar?',
    choices: ['Type of galaxy', 'Highly energetic black hole', 'Interstellar cloud of gas', 'Ancient star cluster'],
    correct: 'Highly energetic black hole'
},
{
    hasContent: false,
    quest: 'What is the primary source of energy for stars?',
    choices: ['Nuclear Fusion', 'Chemical Reactions', 'Gravitational Contraction', 'Electromagnetic Radiation'],
    correct: 'Nuclear Fusion'
},
{
    hasContent: false,
    quest: 'What is a supernova?',
    choices: ['Planet with extreme gravitational force', 'Explosion of a dying star', 'Dense core of a neutron star', 'Colliding galaxies'],
    correct: 'Explosion of a dying star'
},
{
    hasContent: false,
    quest: 'What is the Hubble Space Telescope?',
    choices: ['Radio Telescope', 'Optical Telescope', 'Infrared Telescope', 'Gamma-Ray Telescope'],
    correct: 'Optical Telescope'
},
{
    hasContent: false,
    quest: 'What is the Great Attractor?',
    choices: ['Dense star cluster', 'Dark energy concentration', 'Supermassive black hole', 'Galactic void'],
    correct: 'Dark energy concentration'
},
{
    hasContent: false,
    quest: 'What is the fate of the universe according to current cosmological theories?',
    choices: ['Eternal Expansion', 'Steady State', 'Big Crunch', 'Heat Death'],
    correct: 'Eternal Expansion'
},
{
    hasContent: false,
    quest: 'What is a wormhole?',
    choices: ['Cosmic string', 'Tunnel between galaxies', 'Black hole remnant', 'Shortcut through spacetime'],
    correct: 'Shortcut through spacetime'
},
{
    hasContent: false,
    quest: 'What is the concept of the multiverse?',
    choices: ['Parallel universes', 'Interconnected galaxies', 'Colliding black holes', 'Rotating neutron stars'],
    correct: 'Parallel universes'
},
{
    hasContent: true,
    quest: 'Explain the concept of dark energy and its role in the universe.',
    content: 'Dark energy is believed to be responsible for the accelerated expansion of the universe.',
    choices: ['Galactic Formation', 'Cosmic Microwave Background', 'Anti-gravity Force', 'Expansion of Star Clusters'],
    correct: 'Expansion of Star Clusters'
},
{
    hasContent: true,
    quest: 'Describe the difference between dark matter and ordinary matter in the universe.',
    content: 'Dark matter does not emit light or energy, while ordinary matter consists of atoms and particles that emit light.',
    choices: ['Density of Matter', 'Luminosity', 'Composition', 'Temperature'],
    correct: 'Composition'
},
{
    hasContent: true,
    quest: 'What role does cosmic inflation play in the formation of the universe?',
    content: 'Cosmic inflation is believed to explain the uniformity and large-scale structure of the universe.',
    choices: ['Formation of Galaxies', 'Early Universe Expansion', 'Planetary Accretion', 'Black Hole Formation'],
    correct: 'Early Universe Expansion'
},
{
    hasContent: true,
    quest: 'Explain the concept of a black hole and how it forms.',
    content: 'A black hole is a region of spacetime exhibiting gravitational pull so strong that nothing can escape its event horizon.',
    choices: ['Nuclear Fusion', 'Supernova Explosion', 'Gravitational Collapse', 'Red Giant Phase'],
    correct: 'Gravitational Collapse'
},
{
    hasContent: false,
    quest: 'Which planet is known as the "Red Planet"?',
    choices: ['Mars', 'Jupiter', 'Venus', 'Saturn'],
    correct: 'Mars'
},
{
    hasContent: false,
    quest: 'What is the largest planet in our solar system?',
    choices: ['Earth', 'Jupiter', 'Saturn', 'Neptune'],
    correct: 'Jupiter'
},
{
    hasContent: false,
    quest: 'Which planet is closest to the Sun?',
    choices: ['Venus', 'Mercury', 'Mars', 'Earth'],
    correct: 'Mercury'
},
{
    hasContent: false,
    quest: 'What is the Great Red Spot on Jupiter?',
    choices: ['Volcano', 'Storm', 'Desert', 'Canyon'],
    correct: 'Storm'
},
{
    hasContent: false,
    quest: 'Which planet is known as the "Evening Star" or "Morning Star"?',
    choices: ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    correct: 'Venus'
},
{
    hasContent: false,
    quest: 'What is the largest moon in our solar system?',
    choices: ['Titan', 'Ganymede', 'Io', 'Callisto'],
    correct: 'Ganymede'
},
{
    hasContent: false,
    quest: 'Which planet is often referred to as the "Blue Planet"?',
    choices: ['Earth', 'Neptune', 'Uranus', 'Saturn'],
    correct: 'Earth'
},
{
    hasContent: false,
    quest: 'What is the smallest planet in our solar system?',
    choices: ['Venus', 'Mercury', 'Mars', 'Pluto'],
    correct: 'Mercury'
},
{
    hasContent: false,
    quest: 'Which planet has the largest rings?',
    choices: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
    correct: 'Saturn'
},
{
    hasContent: false,
    quest: 'What is the Kuiper Belt?',
    choices: ['Asteroid Belt', 'Ring System', 'Dwarf Planet Zone', 'Comet Cloud'],
    correct: 'Dwarf Planet Zone'
},
{
    hasContent: false,
    quest: 'Which planet has the most substantial atmosphere?',
    choices: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correct: 'Jupiter'
},
{
    hasContent: false,
    quest: 'What is the largest volcano in our solar system?',
    choices: ['Mount St. Helens', 'Mauna Loa', 'Olympus Mons', 'Mount Everest'],
    correct: 'Olympus Mons'
},
{
    hasContent: false,
    quest: 'Which planet has a day that is longer than its year?',
    choices: ['Venus', 'Mercury', 'Mars', 'Jupiter'],
    correct: 'Venus'
},
{
    hasContent: false,
    quest: 'What is the main component of Jupiter and Saturn?',
    choices: ['Helium', 'Methane', 'Hydrogen', 'Carbon Dioxide'],
    correct: 'Hydrogen'
},
{
    hasContent: false,
    quest: 'What is the name of the spacecraft that visited Pluto in 2015?',
    choices: ['Voyager 1', 'Cassini', 'New Horizons', 'Curiosity'],
    correct: 'New Horizons'
},
{
    hasContent: false,
    quest: 'Which planet has the most moons in our solar system?',
    choices: ['Saturn', 'Jupiter', 'Uranus', 'Neptune'],
    correct: 'Jupiter'
},
{
    hasContent: false,
    quest: 'What is the term for a group of stars that form a pattern and have a name?',
    choices: ['Galaxy', 'Constellation', 'Nebula', 'Cluster'],
    correct: 'Constellation'
},
{
    hasContent: true,
    quest: 'Explain the difference between a planet and a dwarf planet.',
    content: 'This classification is based on certain characteristics defined by the International Astronomical Union.',
    choices: ['Orbit Shape', 'Size', 'Clearing Orbit Debris', 'Presence of Atmosphere'],
    correct: 'Clearing Orbit Debris'
},
{
    hasContent: true,
    quest: 'What is the Oort Cloud, and where is it located in our solar system?',
    content: 'This region contains icy bodies and is believed to be the source of long-period comets.',
    choices: ['Between Mars and Jupiter', 'Beyond Pluto', 'Around Earth', 'Inside the Sun'],
    correct: 'Beyond Pluto'
},
{
    hasContent: true,
    quest: 'Describe the composition of Saturn\'s rings and how they formed.',
    content: 'Saturn\'s rings are made up of countless particles, ranging from tiny ice grains to large boulders.',
    choices: ['Rocky Debris', 'Gas Clouds', 'Ice Particles', 'Metallic Fragments'],
    correct: 'Ice Particles'
},
{
    hasContent: false,
    quest: 'What is the primary source of energy for stars?',
    choices: ['Nuclear Fusion', 'Chemical Reactions', 'Gravitational Contraction', 'Electromagnetic Radiation'],
    correct: 'Nuclear Fusion'
},
{
    hasContent: false,
    quest: 'What is the closest star to Earth?',
    choices: ['Alpha Centauri', 'Proxima Centauri', 'Sirius', 'Betelgeuse'],
    correct: 'Proxima Centauri'
},
{
    hasContent: false,
    quest: 'What is the largest type of star?',
    choices: ['White Dwarf', 'Red Giant', 'Main Sequence', 'Blue Supergiant'],
    correct: 'Blue Supergiant'
},
{
    hasContent: false,
    quest: 'Which star is known as the "North Star" or "Polaris"?',
    choices: ['Vega', 'Sirius', 'Betelgeuse', 'Polaris'],
    correct: 'Polaris'
},
{
    hasContent: false,
    quest: 'What is the end stage of a massive star's life cycle?',
    choices: ['Black Hole', 'White Dwarf', 'Supernova', 'Neutron Star'],
    correct: 'Black Hole'
},
{
    hasContent: false,
    quest: 'What is the color of the hottest stars?',
    choices: ['Red', 'Blue', 'Yellow', 'White'],
    correct: 'Blue'
},
{
    hasContent: false,
    quest: 'What is the name of the process that powers the sun?',
    choices: ['Fission', 'Fusion', 'Combustion', 'Radioactive Decay'],
    correct: 'Fusion'
},
{
    hasContent: false,
    quest: 'Which constellation contains the bright star Sirius?',
    choices: ['Orion', 'Ursa Major', 'Leo', 'Canis Major'],
    correct: 'Canis Major'
},
{
    hasContent: false,
    quest: 'What is the measure of a star\'s brightness as observed from Earth?',
    choices: ['Luminosity', 'Magnitude', 'Temperature', 'Mass'],
    correct: 'Magnitude'
},
{
    hasContent: true,
    quest: 'Explain the life cycle of a low-mass star, such as our sun.',
    content: 'This process involves the main sequence, red giant phase, planetary nebula, and white dwarf formation.',
    choices: ['Supernova Explosion', 'Black Hole Formation', 'Solar Wind Ejection', 'Helium Fusion'],
    correct: 'Solar Wind Ejection'
},
{
    hasContent: true,
    quest: 'What is the primary source of energy in the Sun?',
    content: 'Identify the process responsible for the Sun\'s energy production.',
    choices: ['Nuclear fission', 'Nuclear fusion', 'Chemical reaction', 'Gravitational collapse'],
    correct: 'Nuclear fusion'
},
{
    hasContent: false,
    quest: 'What is the outermost layer of the Sun\'s atmosphere?',
    choices: ['Photosphere', 'Chromosphere', 'Corona', 'Core'],
    correct: 'Corona'
},
{
    hasContent: true,
    quest: 'Which solar phenomenon involves a sudden, brief increase in brightness on the Sun\'s surface?',
    content: 'Identify the phenomenon associated with solar flares.',
    choices: ['Prominence', 'Solar wind', 'Sunspots', 'Solar flare'],
    correct: 'Solar flare'
},
{
    hasContent: false,
    quest: 'What is the name for dark, cooler areas on the Sun\'s surface?',
    choices: ['Prominence', 'Solar wind', 'Sunspots', 'Solar flare'],
    correct: 'Sunspots'
},
{
    hasContent: true,
    quest: 'What is the term for a large, bright, gaseous feature extending outward from the Sun\'s surface?',
    content: 'Identify the phenomenon associated with solar prominences.',
    choices: ['Prominence', 'Solar wind', 'Sunspots', 'Solar flare'],
    correct: 'Prominence'
},
{
    hasContent: false,
    quest: 'What is the solar wind primarily composed of?',
    choices: ['Hydrogen', 'Helium', 'Electrons and protons', 'Neutrons'],
    correct: 'Electrons and protons'
},
{
    hasContent: true,
    quest: 'Which layer of the Sun's atmosphere is typically visible during a total solar eclipse?',
    content: 'Identify the layer that becomes visible due to the Moon blocking the Sun.',
    choices: ['Photosphere', 'Chromosphere', 'Corona', 'Core'],
    correct: 'Corona'
},
{
    hasContent: false,
    quest: 'What is the process by which the Sun produces energy through the fusion of hydrogen into helium?',
    choices: ['Photosynthesis', 'Nuclear fission', 'Nuclear fusion', 'Combustion'],
    correct: 'Nuclear fusion'
},
{
    hasContent: true,
    quest: 'What causes the darkening of sunspots on the Sun?',
    content: 'Identify the reason for the reduced temperature in sunspot areas.',
    choices: ['Cooler temperature', 'Magnetic activity', 'Higher gravity', 'Depleted fuel'],
    correct: 'Magnetic activity'
},
{
    hasContent: false,
    quest: 'Which layer of the Sun's atmosphere is the visible surface that emits light?',
    choices: ['Photosphere', 'Chromosphere', 'Corona', 'Core'],
    correct: 'Photosphere'
},
{
    hasContent: true,
    quest: 'What is the term for the process of the Sun losing mass through the ejection of particles into space?',
    content: 'Identify the phenomenon associated with the Sun\'s mass loss.',
    choices: ['Solar wind', 'Solar flare', 'Nuclear fusion', 'Gravitational collapse'],
    correct: 'Solar wind'
},
{
    hasContent: false,
    quest: 'Which solar feature is a loop of hot, glowing gas that extends from the Sun\'s surface into the corona?',
    choices: ['Prominence', 'Solar wind', 'Sunspots', 'Solar flare'],
    correct: 'Prominence'
},
{
    hasContent: true,
    quest: 'What is the primary force that counteracts the gravitational collapse of the Sun?',
    content: 'Identify the force responsible for maintaining the Sun\'s equilibrium.',
    choices: ['Magnetic force', 'Thermal pressure', 'Nuclear fission', 'Chemical reaction'],
    correct: 'Thermal pressure'
},
{
    hasContent: false,
    quest: 'Which layer of the Sun's atmosphere is above the photosphere and is characterized by a reddish glow?',
    choices: ['Photosphere', 'Chromosphere', 'Corona', 'Core'],
    correct: 'Chromosphere'
},
{
    hasContent: true,
    quest: 'What is the term for the darkening effect seen at the edge of the Sun\'s disk during a solar eclipse?',
    content: 'Identify the phenomenon caused by the Sun\'s limb darkening.',
    choices: ['Corona', 'Umbra', 'Penumbra', 'Photosphere'],
    correct: 'Limba darkening'
},
{
    hasContent: false,
    quest: 'What is the region at the center of the Sun where nuclear fusion reactions occur?',
    choices: ['Photosphere', 'Chromosphere', 'Corona', 'Core'],
    correct: 'Core'
},
{
    hasContent: true,
    quest: 'What is the term for the temporary decrease in the Sun\'s brightness caused by the passage of a planet in front of it?',
    content: 'Identify the phenomenon associated with planetary transits.',
    choices: ['Solar eclipse', 'Sunspot cycle', 'Solar flare', 'Planetary transit'],
    correct: 'Planetary transit'
},
{
    hasContent: false,
    quest: 'What is the name for the central, darkest part of a sunspot?',
    choices: ['Prominence', 'Umbra', 'Penumbra', 'Corona'],
    correct: 'Umbra'
},
{
    hasContent: true,
    quest: 'What is the term for the uneven distribution of mass within the Sun, resulting in a lumpy structure?',
    content: 'Identify the phenomenon associated with the Sun\'s uneven mass distribution.',
    choices: ['Helioseismology', 'Solar wind', 'Nuclear fusion', 'Gravitational collapse'],
    correct: 'Helioseismology'
},
{
    hasContent: false,
    quest: 'What is the term for the area surrounding a sunspot that is less dark?',
    choices: ['Prominence', 'Umbra', 'Penumbra', 'Corona'],
    correct: 'Penumbra'
}
]
const cinemaQuestions = [ {
    hasContent: false,
    quest: 'What defines an "art house" cinema?',
    choices: ['Large Budget Films', 'Mainstream Popularity', 'Independent and Experimental Films', 'Genre-specific Productions'],
    correct: 'Independent and Experimental Films'
},
{
    hasContent: false,
    quest: 'Which film movement is often associated with art house cinema?',
    choices: ['Film Noir', 'German Expressionism', 'Italian Neorealism', 'French New Wave'],
    correct: 'French New Wave'
},
{
    hasContent: false,
    quest: 'What is a common characteristic of art house films?',
    choices: ['Predictable Storylines', 'High Box Office Revenue', 'Innovative Cinematography', 'Mainstream Casting'],
    correct: 'Innovative Cinematography'
},
{
    hasContent: false,
    quest: 'Which director is often considered a pioneer of art house cinema?',
    choices: ['Christopher Nolan', 'Quentin Tarantino', 'Ingmar Bergman', 'Steven Spielberg'],
    correct: 'Ingmar Bergman'
},
{
    hasContent: false,
    quest: 'What is the purpose of art house cinema?',
    choices: ['Entertainment Only', 'Cultural Exploration', 'Maximizing Profits', 'Catering to Mainstream Audience'],
    correct: 'Cultural Exploration'
},
{
    hasContent: false,
    quest: 'Which film is often cited as an example of art house cinema?',
    choices: ['The Avengers', 'Pulp Fiction', 'Amélie', 'Avatar'],
    correct: 'Amélie'
},
{
    hasContent: false,
    quest: 'What distinguishes art house cinemas from commercial theaters?',
    choices: ['Budget Size', 'Ticket Prices', 'Location', 'Film Selection'],
    correct: 'Film Selection'
},
{
    hasContent: false,
    quest: 'In which country did the Dogme 95 film movement originate?',
    choices: ['Italy', 'France', 'Denmark', 'Germany'],
    correct: 'Denmark'
},
{
    hasContent: false,
    quest: 'What is the significance of foreign language films in art house cinema?',
    choices: ['Limited Accessibility', 'Cultural Diversity', 'Box Office Success', 'Technological Innovation'],
    correct: 'Cultural Diversity'
},
{
    hasContent: false,
    quest: 'What role does symbolism play in art house films?',
    choices: ['Minimized', 'None', 'Occasional', 'Prominent'],
    correct: 'Prominent'
},
{
    hasContent: false,
    quest: 'Who is known for creating "long takes" in art house films?',
    choices: ['Martin Scorsese', 'Alfred Hitchcock', 'Andrei Tarkovsky', 'Federico Fellini'],
    correct: 'Andrei Tarkovsky'
},
{
    hasContent: false,
    quest: 'What is a common theme in art house cinema?',
    choices: ['Blockbuster Action', 'Romantic Comedy', 'Existential Exploration', 'Superhero Adventures'],
    correct: 'Existential Exploration'
},
{
    hasContent: false,
    quest: 'What is the role of ambiguity in art house films?',
    choices: ['Minimal', 'None', 'Occasional', 'Integral'],
    correct: 'Integral'
},
{
    hasContent: false,
    quest: 'Which film festival is renowned for showcasing art house cinema?',
    choices: ['Sundance Film Festival', 'Cannes Film Festival', 'Venice Film Festival', 'Toronto International Film Festival'],
    correct: 'Cannes Film Festival'
},
{
    hasContent: true,
    quest: 'Explain the significance of auteur theory in art house cinema.',
    content: 'Auteur theory emphasizes the director as the "author" of a film, contributing a distinct personal style.',
    choices: ['Collaborative Filmmaking', 'Star Power', 'Studio Influence', 'Directorial Autonomy'],
    correct: 'Directorial Autonomy'
},
{
    hasContent: true,
    quest: 'Describe the impact of digital technology on art house filmmaking.',
    content: 'Digital technology has enabled lower-budget productions and increased accessibility for independent filmmakers.',
    choices: ['High Production Costs', 'Technological Limitations', 'Cinematic Uniformity', 'Increased Accessibility'],
    correct: 'Increased Accessibility'
},
{
    hasContent: true,
    quest: 'What role does experimental narrative structure play in art house cinema?',
    content: 'Art house films often challenge traditional storytelling, employing non-linear or unconventional structures.',
    choices: ['Linear Storytelling', 'Predictable Plots', 'Commercial Appeal', 'Experimental Narrative'],
    correct: 'Experimental Narrative'
},
{
    hasContent: true,
    quest: 'Explain the concept of "mise-en-scène" in art house filmmaking.',
    content: 'Mise-en-scène refers to the arrangement of visual elements within a film frame, emphasizing artistic expression.',
    choices: ['Special Effects', 'Linear Narratives', 'Commercial Appeal', 'Visual Composition'],
    correct: 'Visual Composition'
},
{
    hasContent: true,
    quest: 'How does art house cinema contribute to cultural diversity in the film industry?',
    content: 'Art house films often explore unique cultural perspectives, providing a platform for diverse voices.',
    choices: ['Mainstream Conformity', 'Cultural Homogeneity', 'Exclusive Narratives', 'Cultural Diversity'],
    correct: 'Cultural Diversity'
},
{
    hasContent: false,
    quest: 'During which decades was the black and white film era prominent?',
    choices: ['1920s-1930s', '1940s-1950s', '1960s-1970s', '1980s-1990s'],
    correct: '1920s-1930s'
},
{
    hasContent: false,
    quest: 'Which film is considered one of the earliest feature-length silent films?',
    choices: ['Citizen Kane', 'Gone with the Wind', 'The Birth of a Nation', 'Metropolis'],
    correct: 'The Birth of a Nation'
},
{
    hasContent: false,
    quest: 'Who is often regarded as the "Master of Suspense" for his work in black and white films?',
    choices: ['Alfred Hitchcock', 'Charlie Chaplin', 'Buster Keaton', 'Orson Welles'],
    correct: 'Alfred Hitchcock'
},
{
    hasContent: false,
    quest: 'Which film is known for its iconic shower scene and is considered a classic of the horror genre?',
    choices: ['Psycho', 'Casablanca', 'Sunset Boulevard', '12 Angry Men'],
    correct: 'Psycho'
},
{
    hasContent: false,
    quest: 'Who directed the 1941 film "Citizen Kane," often regarded as one of the greatest films of all time?',
    choices: ['Orson Welles', 'Frank Capra', 'Billy Wilder', 'John Ford'],
    correct: 'Orson Welles'
},
{
    hasContent: false,
    quest: 'Which iconic actor starred in films like "The Maltese Falcon" and "Casablanca" during the black and white era?',
    choices: ['Humphrey Bogart', 'Clark Gable', 'Cary Grant', 'James Stewart'],
    correct: 'Humphrey Bogart'
},
{
    hasContent: false,
    quest: 'What was the first feature-length animated film produced by Walt Disney during the black and white era?',
    choices: ['Snow White and the Seven Dwarfs', 'Cinderella', 'Sleeping Beauty', 'Beauty and the Beast'],
    correct: 'Snow White and the Seven Dwarfs'
},
{
    hasContent: false,
    quest: 'Which film, directed by Billy Wilder, is known for its biting satire of Hollywood and the film industry?',
    choices: ['Sunset Boulevard', 'Double Indemnity', 'Some Like It Hot', 'The Apartment'],
    correct: 'Sunset Boulevard'
},
{
    hasContent: false,
    quest: 'In which film does Charlie Chaplin play the iconic character "The Tramp" during the silent film era?',
    choices: ['Modern Times', 'City Lights', 'The Great Dictator', 'The Gold Rush'],
    correct: 'City Lights'
},
{
    hasContent: false,
    quest: 'Which film, directed by Frank Capra, tells the story of a man contemplating suicide on Christmas Eve?',
    choices: ['It Happened One Night', 'Mr. Smith Goes to Washington', 'It's a Wonderful Life', 'You Can't Take It with You'],
    correct: 'It's a Wonderful Life'
},
{
    hasContent: false,
    quest: 'Who directed the film "12 Angry Men," a courtroom drama that takes place almost entirely in one room?',
    choices: ['Sidney Lumet', 'Stanley Kubrick', 'Elia Kazan', 'Fritz Lang'],
    correct: 'Sidney Lumet'
},
{
    hasContent: false,
    quest: 'What is the title of the 1954 film that features a giant prehistoric ape climbing the Empire State Building?',
    choices: ['The Day the Earth Stood Still', 'King Kong', 'Invasion of the Body Snatchers', 'Creature from the Black Lagoon'],
    correct: 'King Kong'
},
{
    hasContent: false,
    quest: 'Who directed the 1957 film "Paths of Glory," a World War I drama starring Kirk Douglas?',
    choices: ['Alfred Hitchcock', 'Stanley Kubrick', 'Billy Wilder', 'John Ford'],
    correct: 'Stanley Kubrick'
},
{
    hasContent: false,
    quest: 'Which film, directed by Roman Polanski, follows the story of a pianist trying to survive in the Warsaw Ghetto during World War II?',
    choices: ['Chinatown', 'The Pianist', 'Rosemary's Baby', 'Repulsion'],
    correct: 'The Pianist'
},
{
    hasContent: true,
    quest: 'Explain the impact of the Hays Code on black and white films during the early 20th century.',
    content: 'The Hays Code was a set of industry guidelines restricting content in films, affecting storytelling and themes.',
    choices: ['Creative Freedom', 'Censorship', 'Technical Advancements', 'Genre Exploration'],
    correct: 'Censorship'
},
{
    hasContent: false,
    quest: 'Which film, directed by Frank Darabont, follows the story of a man's experiences in Shawshank State Penitentiary?',
    choices: ['The Green Mile', 'The Shawshank Redemption', 'American History X', 'Se7en'],
    correct: 'The Shawshank Redemption'
},
{
    hasContent: false,
    quest: 'Who directed the 1976 film "Taxi Driver," starring Robert De Niro as Travis Bickle?',
    choices: ['Martin Scorsese', 'Francis Ford Coppola', 'Quentin Tarantino', 'Stanley Kubrick'],
    correct: 'Martin Scorsese'
},
{
    hasContent: false,
    quest: 'Which film, directed by Christopher Nolan, explores the concept of dreams within dreams?',
    choices: ['Inception', 'Interstellar', 'The Dark Knight', 'Dunkirk'],
    correct: 'Inception'
},
{
    hasContent: false,
    quest: 'What is the title of the film that depicts the life of British mathematician and logician Alan Turing during World War II?',
    choices: ['A Beautiful Mind', 'The Imitation Game', 'Good Will Hunting', 'Hidden Figures'],
    correct: 'The Imitation Game'
},
{
    hasContent: false,
    quest: 'Which drama film, set during the Civil Rights Movement, follows the story of African-American maids working in white households?',
    choices: ['The Help', 'Hidden Figures', 'Selma', '12 Years a Slave'],
    correct: 'The Help'
},
{
    hasContent: false,
    quest: 'Who directed the 1999 film "American Beauty," which explores suburban life and existentialism?',
    choices: ['David Fincher', 'Quentin Tarantino', 'Sam Mendes', 'Darren Aronofsky'],
    correct: 'Sam Mendes'
},
{
    hasContent: false,
    quest: 'What is the title of the film that tells the story of a Holocaust survivor seeking revenge on a Nazi officer?',
    choices: ['Schindler\'s List', 'The Pianist', 'Life Is Beautiful', 'Inglourious Basterds'],
    correct: 'Inglourious Basterds'
},
{
    hasContent: false,
    quest: 'Which drama film, directed by Clint Eastwood, stars Morgan Freeman as a former boxing champion seeking redemption?',
    choices: ['Gran Torino', 'Million Dollar Baby', 'Unforgiven', 'Invictus'],
    correct: 'Million Dollar Baby'
},
{
    hasContent: false,
    quest: 'What is the title of the film that follows the journey of a young man as he travels to Alaska seeking truth and self-discovery?',
    choices: ['Into the Wild', 'Wild', 'The Revenant', '127 Hours'],
    correct: 'Into the Wild'
},
{
    hasContent: false,
    quest: 'Who directed the film "One Flew Over the Cuckoo\'s Nest," starring Jack Nicholson as a patient in a mental institution?',
    choices: ['Stanley Kubrick', 'Milos Forman', 'Francis Ford Coppola', 'Roman Polanski'],
    correct: 'Milos Forman'
},
{
    hasContent: false,
    quest: 'What is the title of the film that tells the story of a man who ages backward and experiences life in reverse?',
    choices: ['The Curious Case of Benjamin Button', 'Forrest Gump', 'Eternal Sunshine of the Spotless Mind', 'Big Fish'],
    correct: 'The Curious Case of Benjamin Button'
},
{
    hasContent: false,
    quest: 'Which drama film, set against the backdrop of the Vietnam War, follows the story of a mentally unstable war veteran?',
    choices: ['Platoon', 'Full Metal Jacket', 'Apocalypse Now', 'The Deer Hunter'],
    correct: 'The Deer Hunter'
},
{
    hasContent: false,
    quest: 'Who directed the film "The Silence of the Lambs," a psychological horror-drama featuring Hannibal Lecter?',
    choices: ['David Fincher', 'Jonathan Demme', 'Ridley Scott', 'Quentin Tarantino'],
    correct: 'Jonathan Demme'
},
{
    hasContent: false,
    quest: 'What is the title of the film that portrays the life of mathematician John Nash, who struggles with schizophrenia?',
    choices: ['Good Will Hunting', 'A Beautiful Mind', 'Rain Man', 'The Man Who Knew Infinity'],
    correct: 'A Beautiful Mind'
},
{
    hasContent: false,
    quest: 'Which drama film, set in apartheid-era South Africa, tells the story of two men who form an unlikely friendship?',
    choices: ['Cry Freedom', 'Invictus', 'Blood Diamond', 'District 9'],
    correct: 'Cry Freedom'
},
{
    hasContent: true,
    quest: 'Explain the significance of method acting in drama films.',
    content: 'Method acting involves actors immersing themselves in the emotional experiences of their characters for authentic performances.',
    choices: ['Stunt Coordination', 'Special Effects', 'Character Development', 'Theatrical Techniques'],
    correct: 'Character Development'
},
{
    hasContent: true,
    quest: 'Describe the impact of social issues on the themes explored in drama films.',
    content: 'Drama films often address social issues such as inequality, discrimination, and human rights, reflecting and challenging societal norms.',
    choices: ['Visual Effects', 'Narrative Structure', 'Costume Design', 'Social Commentary'],
    correct: 'Social Commentary'
},
{
    hasContent: true,
    quest: 'How does cinematography contribute to the emotional impact of a drama film?',
    content: 'Cinematography, including lighting, framing, and camera movement, enhances the mood and emotional resonance of a drama film.',
    choices: ['Soundtrack Selection', 'Script Writing', 'Acting Performances', 'Cinematography'],
    correct: 'Cinematography'
},
{
    hasContent: true,
    quest: 'Explain the concept of the "anti-hero" and its role in drama films.',
    content: 'An anti-hero is a protagonist with morally ambiguous qualities or unconventional characteristics, adding complexity to the narrative.',
    choices: ['Classic Hero Archetype', 'Tragic Flaw', 'Villainous Antagonist', 'Anti-Hero'],
    correct: 'Anti-Hero'
},
{
    hasContent: true,
    quest: 'Describe the impact of historical events on the portrayal of war in drama films.',
    content: 'Drama films often depict the human experience during wartime, reflecting the social, political, and emotional consequences of conflicts.',
    choices: ['Fantasy Elements', 'Documentary Style', 'Historical Accuracy', 'Genre Blending'],
    correct: 'Historical Accuracy'
},
]
const economyQuestions = [
{
    hasContent: false,
    quest: 'What is the primary function of a bank in managing money flow?',
    choices: ['Loan Approval', 'Investment Advisory', 'Currency Printing', 'Financial Intermediation'],
    correct: 'Financial Intermediation'
},
{
    hasContent: false,
    quest: 'Which term refers to the interest rate at which central banks lend money to commercial banks?',
    choices: ['Prime Rate', 'Discount Rate', 'LIBOR', 'Federal Funds Rate'],
    correct: 'Discount Rate'
},
{
    hasContent: false,
    quest: 'What is the process of creating money through lending by commercial banks called?',
    choices: ['Currency Issuance', 'Monetary Expansion', 'Fractional Reserve Banking', 'Treasury Bond Sales'],
    correct: 'Fractional Reserve Banking'
},
{
    hasContent: false,
    quest: 'Which financial institution regulates and supervises banks in the United States?',
    choices: ['International Monetary Fund (IMF)', 'Federal Reserve System', 'European Central Bank (ECB)', 'World Bank'],
    correct: 'Federal Reserve System'
},
{
    hasContent: false,
    quest: 'What is the role of the Federal Open Market Committee (FOMC) in money flow management?',
    choices: ['Loan Approval', 'Interest Rate Policy', 'Currency Printing', 'Financial Regulation'],
    correct: 'Interest Rate Policy'
},
{
    hasContent: false,
    quest: 'In the context of banking, what does the term "liquidity" refer to?',
    choices: ['Cash and Cash Equivalents', 'Long-Term Investments', 'Fixed Assets', 'Accounts Payable'],
    correct: 'Cash and Cash Equivalents'
},
{
    hasContent: false,
    quest: 'What is the primary purpose of the Reserve Requirement set by central banks?',
    choices: ['Ensuring Financial Privacy', 'Stabilizing Inflation', 'Controlling Money Supply', 'Encouraging Risk-Taking'],
    correct: 'Controlling Money Supply'
},
{
    hasContent: false,
    quest: 'What financial instrument represents a short-term loan provided by banks to businesses and governments?',
    choices: ['Treasury Bonds', 'Certificates of Deposit (CDs)', 'Commercial Paper', 'Mortgage-backed Securities'],
    correct: 'Commercial Paper'
},
{
    hasContent: true,
    quest: 'Explain the concept of currency exchange rates and how they impact international trade.',
    content: 'Currency exchange rates determine the value of one currency relative to another, influencing the cost of goods and services in international trade.',
    choices: ['Foreign Direct Investment', 'Balance of Trade', 'Monetary Policy', 'Currency Pegging'],
    correct: 'Balance of Trade'
},
{
    hasContent: false,
    quest: 'Which term describes the interest rate that banks charge each other for overnight loans?',
    choices: ['Prime Rate', 'LIBOR', 'Federal Funds Rate', 'Discount Rate'],
    correct: 'Federal Funds Rate'
},
{
    hasContent: false,
    quest: 'What is the purpose of the Dodd-Frank Wall Street Reform and Consumer Protection Act?',
    choices: ['Financial Deregulation', 'Consumer Privacy Protection', 'Monetary Policy Expansion', 'Banking Regulation Reform'],
    correct: 'Banking Regulation Reform'
},
{
    hasContent: false,
    quest: 'What is the term for the profit made by banks on the difference between interest earned and interest paid?',
    choices: ['Operating Income', 'Net Revenue', 'Profit Margin', 'Net Interest Margin (NIM)'],
    correct: 'Net Interest Margin (NIM)'
},
{
    hasContent: false,
    quest: 'Which institution acts as a lender of last resort during financial crises?',
    choices: ['World Bank', 'International Monetary Fund (IMF)', 'European Central Bank (ECB)', 'Federal Reserve System'],
    correct: 'Federal Reserve System'
},
{
    hasContent: false,
    quest: 'What is the primary goal of monetary policy conducted by central banks?',
    choices: ['Maximizing Profits', 'Stabilizing Prices', 'Encouraging Speculation', 'Increasing Government Spending'],
    correct: 'Stabilizing Prices'
},
{
    hasContent: false,
    quest: 'What is the term for the ratio of a bank\'s capital to its risk-weighted assets?',
    choices: ['Leverage Ratio', 'Profitability Index', 'Debt-to-Equity Ratio', 'Capital Adequacy Ratio'],
    correct: 'Capital Adequacy Ratio'
},
{
    hasContent: false,
    quest: 'In the context of banking, what does the term "securitization" refer to?',
    choices: ['Investment Advisory', 'Converting Assets into Tradable Securities', 'Cryptocurrency Transactions', 'Foreign Exchange Trading'],
    correct: 'Converting Assets into Tradable Securities'
},
{
    hasContent: false,
    quest: 'What is the term for the process of transferring funds between banks electronically?',
    choices: ['Wire Transfer', 'Cash Withdrawal', 'Check Clearing', 'ATM Transaction'],
    correct: 'Wire Transfer'
},
{
    hasContent: true,
    quest: 'Explain how the Central Bank influences the money supply through open market operations.',
    content: 'Open market operations involve the buying and selling of government securities to control money supply and interest rates.',
    choices: ['Currency Printing', 'Foreign Exchange Trading', 'Interest Rate Policy', 'Banking Regulation Reform'],
    correct: 'Interest Rate Policy'
},
{
    hasContent: true,
    quest: 'Describe the impact of interest rate changes on borrowing and lending in the banking system.',
    content: 'Changes in interest rates influence the cost of borrowing and the returns on lending, affecting economic activity.',
    choices: ['Currency Issuance', 'Monetary Expansion', 'Loan Approval', 'Financial Intermediation'],
    correct: 'Financial Intermediation'
},
{
    hasContent: true,
    quest: 'Explain the role of credit rating agencies in the banking system.',
    content: 'Credit rating agencies assess the creditworthiness of entities, providing information for investment and lending decisions.',
    choices: ['Risk Management', 'Financial Advisory', 'Consumer Privacy Protection', 'Banking Regulation Reform'],
    correct: 'Risk Management'
},
{
    hasContent: true,
    quest: 'Describe the concept of "too big to fail" and its implications for the banking industry.',
    content: 'The "too big to fail" concept suggests that some banks are so large that their failure could have catastrophic effects on the economy, leading to government interventions.',
    choices: ['Financial Deregulation', 'Banking Consolidation', 'Government Bailouts', 'Consumer Privacy Protection'],
    correct: 'Government Bailouts'
},
{
    hasContent: false,
    quest: 'What is inflation?',
    choices: ['Decrease in Prices', 'Stagnation of Economy', 'Increase in Prices', 'Currency Devaluation'],
    correct: 'Increase in Prices'
},
{
    hasContent: false,
    quest: 'Which index is commonly used to measure inflation in the United States?',
    choices: ['Consumer Confidence Index (CCI)', 'Producer Price Index (PPI)', 'Gini Coefficient', 'Consumer Price Index (CPI)'],
    correct: 'Consumer Price Index (CPI)'
},
{
    hasContent: false,
    quest: 'What is the term for high inflation rates that erode the real value of money?',
    choices: ['Hyperinflation', 'Stagflation', 'Deflation', 'Reflation'],
    correct: 'Hyperinflation'
},
{
    hasContent: false,
    quest: 'Which type of inflation is caused by an increase in demand for goods and services?',
    choices: ['Cost-Push Inflation', 'Demand-Pull Inflation', 'Hyperinflation', 'Stagflation'],
    correct: 'Demand-Pull Inflation'
},
{
    hasContent: false,
    quest: 'How does inflation impact the purchasing power of money?',
    choices: ['Increases Purchasing Power', 'Stabilizes Purchasing Power', 'Decreases Purchasing Power', 'No Impact on Purchasing Power'],
    correct: 'Decreases Purchasing Power'
},
{
    hasContent: false,
    quest: 'What is the term for a situation where inflation and unemployment both rise?',
    choices: ['Stagflation', 'Hyperinflation', 'Deflation', 'Recession'],
    correct: 'Stagflation'
},
{
    hasContent: false,
    quest: 'Which policy tool is used by central banks to control inflation by adjusting interest rates?',
    choices: ['Fiscal Policy', 'Monetary Policy', 'Trade Policy', 'Exchange Rate Policy'],
    correct: 'Monetary Policy'
},
{
    hasContent: false,
    quest: 'What is the consequence of deflation in an economy?',
    choices: ['Increased Consumer Spending', 'Higher Real Wages', 'Debt Becomes More Burdensome', 'Stimulated Economic Growth'],
    correct: 'Debt Becomes More Burdensome'
},
{
    hasContent: false,
    quest: 'What is the term for the expectation that prices will continue to rise in the future?',
    choices: ['Deflationary Expectations', 'Inflationary Expectations', 'Stagflation Expectations', 'Recessionary Expectations'],
    correct: 'Inflationary Expectations'
},
{
    hasContent: false,
    quest: 'Which economic theory suggests a long-run trade-off between inflation and unemployment?',
    choices: ['Keynesian Economics', 'Monetarism', 'Supply-Side Economics', 'Classical Economics'],
    correct: 'Phillips Curve'
},
{
    hasContent: false,
    quest: 'What is the impact of inflation on fixed-income earners, such as retirees?',
    choices: ['Decreased Purchasing Power', 'Increased Real Income', 'No Impact on Income', 'Stable Standard of Living'],
    correct: 'Decreased Purchasing Power'
},
{
    hasContent: false,
    quest: 'Which factor can contribute to cost-push inflation?',
    choices: ['Increased Demand', 'Decreased Production Costs', 'Supply Chain Disruptions', 'Government Tax Cuts'],
    correct: 'Supply Chain Disruptions'
},
{
    hasContent: false,
    quest: 'What is the term for the practice of adjusting prices and wages in response to inflation?',
    choices: ['Hedging', 'Indexing', 'Collateralization', 'Derivatives Trading'],
    correct: 'Indexing'
},
{
    hasContent: false,
    quest: 'What is the impact of hyperinflation on a country\'s currency?',
    choices: ['Currency Appreciation', 'Currency Depreciation', 'Currency Stability', 'No Impact on Currency'],
    correct: 'Currency Depreciation'
},
{
    hasContent: true,
    quest: 'Explain the concept of "stagflation" and its implications for an economy.',
    content: 'Stagflation is a situation characterized by high inflation rates and high unemployment, presenting challenges for traditional economic policies.',
    choices: ['Economic Expansion', 'Recessionary Expectations', 'Policy Ineffectiveness', 'Demand-Pull Inflation'],
    correct: 'Policy Ineffectiveness'
},
{
    hasContent: false,
    quest: 'What does GDP stand for in the context of macroeconomics?',
    choices: ['Gross Domestic Product', 'Government Debt Percentage', 'General Demand and Production', 'Global Development Program'],
    correct: 'Gross Domestic Product'
},
{
    hasContent: false,
    quest: 'Which economic indicator measures the overall price level of goods and services in an economy?',
    choices: ['Unemployment Rate', 'Consumer Price Index (CPI)', 'Labor Force Participation Rate', 'Producer Price Index (PPI)'],
    correct: 'Consumer Price Index (CPI)'
},
{
    hasContent: false,
    quest: 'What is the term for a prolonged period of economic downturn characterized by a decline in GDP and employment?',
    choices: ['Inflation', 'Boom Cycle', 'Recession', 'Stagflation'],
    correct: 'Recession'
},
{
    hasContent: false,
    quest: 'Which economic policy involves government spending exceeding government revenue?',
    choices: ['Monetary Policy', 'Fiscal Policy', 'Supply-Side Policy', 'Austerity Policy'],
    correct: 'Fiscal Policy'
},
{
    hasContent: false,
    quest: 'What is the role of the Federal Reserve in the United States in terms of macroeconomic policy?',
    choices: ['Fiscal Policy', 'Trade Policy', 'Monetary Policy', 'Supply-Side Policy'],
    correct: 'Monetary Policy'
},
{
    hasContent: false,
    quest: 'What is the term for the total value of all final goods and services produced within a country in a specific time period?',
    choices: ['Gross National Product (GNP)', 'Net Domestic Product (NDP)', 'Gross Domestic Product (GDP)', 'National Income'],
    correct: 'Gross Domestic Product (GDP)'
},
{
    hasContent: false,
    quest: 'Which economic theory suggests that government intervention in the economy should be limited?',
    choices: ['Keynesian Economics', 'Monetarism', 'Marxism', 'Supply-Side Economics'],
    correct: 'Supply-Side Economics'
},
{
    hasContent: false,
    quest: 'What is the term for the percentage of the labor force that is unemployed and actively seeking employment?',
    choices: ['Labor Force Participation Rate', 'Underemployment Rate', 'Inflation Rate', 'Unemployment Rate'],
    correct: 'Unemployment Rate'
},
{
    hasContent: false,
    quest: 'Which economic indicator measures the total value of goods and services produced by a country\'s residents, both domestically and abroad?',
    choices: ['Gross Domestic Product (GDP)', 'Net Exports', 'Gross National Product (GNP)', 'Consumer Price Index (CPI)'],
    correct: 'Gross National Product (GNP)'
},
{
    hasContent: false,
    quest: 'What is the term for the phenomenon where an economy experiences both inflation and high unemployment simultaneously?',
    choices: ['Stagflation', 'Hyperinflation', 'Recession', 'Deflation'],
    correct: 'Stagflation'
},
{
    hasContent: false,
    quest: 'Which economic policy focuses on influencing the overall demand for goods and services?',
    choices: ['Monetary Policy', 'Fiscal Policy', 'Supply-Side Policy', 'Trade Policy'],
    correct: 'Fiscal Policy'
},
{
    hasContent: false,
    quest: 'What is the term for the total value of a country\'s exports minus the total value of its imports?',
    choices: ['Trade Deficit', 'Current Account Balance', 'Trade Surplus', 'Balance of Payments'],
    correct: 'Trade Deficit'
},
{
    hasContent: false,
    quest: 'Which economic indicator measures the average changes in prices received by producers for their output?',
    choices: ['Consumer Price Index (CPI)', 'Inflation Rate', 'Producer Price Index (PPI)', 'Unemployment Rate'],
    correct: 'Producer Price Index (PPI)'
},
{
    hasContent: false,
    quest: 'What is the term for the general increase in prices of goods and services over time?',
    choices: ['Stagflation', 'Inflation', 'Deflation', 'Hyperinflation'],
    correct: 'Inflation'
},
{
    hasContent: false,
    quest: 'Which economic policy focuses on influencing the money supply and interest rates?',
    choices: ['Monetary Policy', 'Fiscal Policy', 'Supply-Side Policy', 'Trade Policy'],
    correct: 'Monetary Policy'
},
{
    hasContent: false,
    quest: 'What is the term for the total amount of money circulating in an economy at a specific time?',
    choices: ['Monetary Base', 'Money Supply', 'Currency in Circulation', 'Reserve Requirement'],
    correct: 'Money Supply'
},
{
    hasContent: false,
    quest: 'Which economic indicator measures the percentage change in the price of a basket of consumer goods and services?',
    choices: ['Unemployment Rate', 'Producer Price Index (PPI)', 'Gross Domestic Product (GDP)', 'Consumer Price Index (CPI)'],
    correct: 'Consumer Price Index (CPI)'
},
{
    hasContent: false,
    quest: 'What is the term for the study of how individuals and firms make decisions to allocate limited resources?',
    choices: ['Macroeconomics', 'Microeconomics', 'Behavioral Economics', 'International Economics'],
    correct: 'Microeconomics'
},
{
    hasContent: true,
    quest: 'Explain the concept of the Phillips Curve and its implications for economic policy.',
    content: 'The Phillips Curve shows an inverse relationship between inflation and unemployment, suggesting a trade-off that policymakers face when trying to manage these two economic variables.',
    choices: ['Stagflation', 'Policy Ineffectiveness', 'Economic Expansion', 'Demand-Pull Inflation'],
    correct: 'Policy Ineffectiveness'
},
{
    hasContent: false,
    quest: 'What is microeconomics?',
    choices: ['Study of the Economy as a Whole', 'Study of Individual Markets and Firms', 'Macroeconomics', 'International Economics'],
    correct: 'Study of Individual Markets and Firms'
},
{
    hasContent: false,
    quest: 'What is the law of demand in microeconomics?',
    choices: ['As price increases, quantity demanded increases', 'As price decreases, quantity demanded decreases', 'Price and quantity demanded are unrelated', 'Demand always remains constant'],
    correct: 'As price decreases, quantity demanded decreases'
},
{
    hasContent: false,
    quest: 'Which concept describes the total output of goods and services produced by a firm?',
    choices: ['Market Share', 'Revenue', 'Profit', 'Production'],
    correct: 'Production'
},
{
    hasContent: false,
    quest: 'What is the term for a market structure with only one seller dominating the market?',
    choices: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'Monopolistic Competition'],
    correct: 'Monopoly'
},
{
    hasContent: false,
    quest: 'What is the law of supply in microeconomics?',
    choices: ['As price increases, quantity supplied increases', 'As price decreases, quantity supplied decreases', 'Supply and price are unrelated', 'Supply always remains constant'],
    correct: 'As price increases, quantity supplied increases'
},
{
    hasContent: false,
    quest: 'In microeconomics, what is the term for the next best alternative foregone when a choice is made?',
    choices: ['Opportunity Cost', 'Sunk Cost', 'Marginal Cost', 'Fixed Cost'],
    correct: 'Opportunity Cost'
},
{
    hasContent: false,
    quest: 'Which market structure is characterized by many buyers and sellers with similar products?',
    choices: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'Monopolistic Competition'],
    correct: 'Perfect Competition'
},
{
    hasContent: false,
    quest: 'What is the term for a measure of how responsive quantity demanded is to a change in price?',
    choices: ['Elasticity', 'Utility', 'Surplus', 'Equilibrium'],
    correct: 'Elasticity'
},
{
    hasContent: false,
    quest: 'What is the primary goal of a profit-maximizing firm in microeconomics?',
    choices: ['Maximize Revenue', 'Maximize Market Share', 'Maximize Profit', 'Minimize Cost'],
    correct: 'Maximize Profit'
},
{
    hasContent: false,
    quest: 'In microeconomics, what is the term for the additional cost incurred by producing one more unit of a good?',
    choices: ['Average Cost', 'Marginal Cost', 'Fixed Cost', 'Variable Cost'],
    correct: 'Marginal Cost'
},
{
    hasContent: false,
    quest: 'What is the term for a measure of how much quantity demanded or supplied responds to a change in price?',
    choices: ['Equilibrium', 'Utility', 'Surplus', 'Elasticity'],
    correct: 'Elasticity'
},
{
    hasContent: false,
    quest: 'In microeconomics, what is the term for the market situation where there is only one buyer for a good or service?',
    choices: ['Monopsony', 'Oligopsony', 'Perfect Competition', 'Monopolistic Competition'],
    correct: 'Monopsony'
},
{
    hasContent: false,
    quest: 'What is the term for the range of prices and output levels at which a seller is willing to produce?',
    choices: ['Monopoly', 'Oligopoly', 'Supply Curve', 'Demand Curve'],
    correct: 'Supply Curve'
},
{
    hasContent: false,
    quest: 'Which type of goods experience an increase in demand as consumer income rises?',
    choices: ['Inferior Goods', 'Normal Goods', 'Complementary Goods', 'Substitute Goods'],
    correct: 'Normal Goods'
},
{
    hasContent: false,
    quest: 'What is the term for a market structure with a few large sellers dominating the market?',
    choices: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'Monopolistic Competition'],
    correct: 'Oligopoly'
},
{
    hasContent: false,
    quest: 'In microeconomics, what is the term for a good for which demand increases as consumer income falls?',
    choices: ['Inferior Goods', 'Normal Goods', 'Complementary Goods', 'Substitute Goods'],
    correct: 'Inferior Goods'
},
{
    hasContent: false,
    quest: 'Which market structure is characterized by many buyers but a few sellers offering differentiated products?',
    choices: ['Monopoly', 'Oligopoly', 'Perfect Competition', 'Monopolistic Competition'],
    correct: 'Monopolistic Competition'
},
{
    hasContent: true,
    quest: 'Explain the concept of market equilibrium in microeconomics.',
    content: 'Market equilibrium occurs when the quantity demanded equals the quantity supplied, resulting in a stable price and quantity for a good or service.',
    choices: ['Surplus', 'Shortage', 'Perfect Competition', 'Elasticity'],
    correct: 'Perfect Competition'
},
{
    hasContent: true,
    quest: 'Describe the concept of utility in microeconomics.',
    content: 'Utility refers to the satisfaction or pleasure a consumer derives from consuming a good or service. It is a subjective measure and varies from person to person.',
    choices: ['Elasticity', 'Surplus', 'Marginal Cost', 'Demand Curve'],
    correct: 'Demand Curve'
},
{
    hasContent: false,
    quest: 'What is the term for a share of ownership in a company?',
    choices: ['Bond', 'Stock', 'Option', 'Mutual Fund'],
    correct: 'Stock'
},
{
    hasContent: false,
    quest: 'What is the primary purpose of the stock market?',
    choices: ['Generate Interest Income', 'Facilitate Currency Exchange', 'Raise Capital for Companies', 'Provide Consumer Loans'],
    correct: 'Raise Capital for Companies'
},
{
    hasContent: false,
    quest: 'Which financial instrument represents a debt obligation of a company or government?',
    choices: ['Stock', 'Option', 'Bond', 'Derivative'],
    correct: 'Bond'
},
{
    hasContent: false,
    quest: 'What is the term for a collection of stocks, bonds, or other securities owned by a group of investors?',
    choices: ['Index Fund', 'Hedge Fund', 'Pension Fund', 'Sovereign Wealth Fund'],
    correct: 'Index Fund'
},
{
    hasContent: false,
    quest: 'What does the acronym IPO stand for in the context of stocks?',
    choices: ['Initial Public Offering', 'International Portfolio Organization', 'Investment and Portfolio Optimization', 'Intraday Price Oscillation'],
    correct: 'Initial Public Offering'
},
{
    hasContent: false,
    quest: 'What is the term for a person or institution that buys and sells financial instruments on the stock market?',
    choices: ['Investor', 'Trader', 'Broker', 'Underwriter'],
    correct: 'Trader'
},
{
    hasContent: false,
    quest: 'Which stock market index tracks the performance of the 30 largest publicly traded companies in the United States?',
    choices: ['NASDAQ Composite', 'Dow Jones Industrial Average (DJIA)', 'S&P 500', 'FTSE 100'],
    correct: 'Dow Jones Industrial Average (DJIA)'
},
{
    hasContent: false,
    quest: 'What is the term for the total value of a company\'s outstanding shares of stock?',
    choices: ['Market Cap', 'Enterprise Value', 'Book Value', 'Net Asset Value'],
    correct: 'Market Cap'
},
{
    hasContent: false,
    quest: 'In the context of stocks, what is a dividend?',
    choices: ['A type of bond', 'A share of ownership', 'A stock split', 'A distribution of profits to shareholders'],
    correct: 'A distribution of profits to shareholders'
},
{
    hasContent: false,
    quest: 'What is the term for a strategy of investing in a diverse range of assets to reduce risk?',
    choices: ['Day Trading', 'Swing Trading', 'Value Investing', 'Diversification'],
    correct: 'Diversification'
},
{
    hasContent: false,
    quest: 'What is the significance of the P/E ratio (Price-to-Earnings ratio) in stock analysis?',
    choices: ['Measures liquidity', 'Indicates dividend yield', 'Evaluates earnings relative to stock price', 'Assesses debt levels'],
    correct: 'Evaluates earnings relative to stock price'
},
{
    hasContent: false,
    quest: 'What is the term for a sudden and significant decline in the overall stock market?',
    choices: ['Bull Market', 'Correction', 'Bear Market', 'Market Capitulation'],
    correct: 'Bear Market'
},
{
    hasContent: false,
    quest: 'What is the function of a stock exchange?',
    choices: ['Facilitate trade of goods', 'Provide banking services', 'Regulate monetary policy', 'Facilitate buying and selling of financial instruments'],
    correct: 'Facilitate buying and selling of financial instruments'
},
{
    hasContent: false,
    quest: 'In stock trading, what is the term for a contract that gives the holder the right to buy or sell an asset at a specified price before a certain date?',
    choices: ['Stock Option', 'Futures Contract', 'Derivative', 'Margin Call'],
    correct: 'Stock Option'
},
{
    hasContent: false,
    quest: 'What is the term for the amount of money borrowed to purchase stocks or other financial instruments?',
    choices: ['Leverage', 'Hedging', 'Short Selling', 'Margin'],
    correct: 'Margin'
},
{
    hasContent: false,
    quest: 'Which financial statement provides a snapshot of a company\'s financial position at a specific point in time?',
    choices: ['Income Statement', 'Cash Flow Statement', 'Balance Sheet', 'Statement of Retained Earnings'],
    correct: 'Balance Sheet'
},
{
    hasContent: false,
    quest: 'What is the term for the practice of buying and selling financial instruments within the same trading day?',
    choices: ['Long-Term Investing', 'Swing Trading', 'Day Trading', 'Value Investing'],
    correct: 'Day Trading'
},
{
    hasContent: false,
    quest: 'What is the role of a stockbroker in the stock market?',
    choices: ['Provide Investment Advice', 'Facilitate Stock Trades', 'Manage Company Finances', 'Issue New Securities'],
    correct: 'Facilitate Stock Trades'
},
{
    hasContent: false,
    quest: 'What does the term "blue-chip stocks" refer to in the context of investing?',
    choices: ['Stocks with low market capitalization', 'Stocks of technology companies', 'Stocks of well-established and financially stable companies', 'Stocks with high volatility'],
    correct: 'Stocks of well-established and financially stable companies'
},
{
    hasContent: false,
    quest: 'The British Pound is also known by what symbol?',
    choices: ['€', '£', '$', '¥'],
    correct: '£'
},
{
    hasContent: true,
    quest: 'Explain the concept of a bull market in stock trading.',
    content: 'A bull market is characterized by rising stock prices and a positive investor sentiment, encouraging buying and optimism in the financial markets.',
    choices: ['Bear Market', 'Correction', 'Market Capitulation', 'Sideways Market'],
    correct: 'Sideways Market'
}
]
const geographyQuestions = [ {
    hasContent: false,
    quest: 'What is the official currency of Japan?',
    choices: ['Yuan', 'Won', 'Yen', 'Ringgit'],
    correct: 'Yen'
},
{
    hasContent: false,
    quest: 'Which European country uses the euro as its official currency?',
    choices: ['United Kingdom', 'Switzerland', 'Germany', 'France'],
    correct: 'Germany'
},
{
    hasContent: false,
    quest: 'What is the currency of Brazil?',
    choices: ['Real', 'Peso', 'Dollar', 'Sol'],
    correct: 'Real'
},
{
    hasContent: false,
    quest: 'The Swiss Franc is the official currency of which country?',
    choices: ['Sweden', 'Norway', 'Switzerland', 'Denmark'],
    correct: 'Switzerland'
},
{
    hasContent: false,
    quest: 'What is the currency of South Africa?',
    choices: ['Rand', 'Dinar', 'Baht', 'Krona'],
    correct: 'Rand'
},
{
    hasContent: false,
    quest: 'The Canadian Dollar is also known by what abbreviation?',
    choices: ['CAD', 'AUD', 'USD', 'EUR'],
    correct: 'CAD'
},
{
    hasContent: false,
    quest: 'What is the official currency of India?',
    choices: ['Rupee', 'Taka', 'Dinar', 'Pound'],
    correct: 'Rupee'
},
{
    hasContent: false,
    quest: 'The Mexican Peso is the official currency of which country?',
    choices: ['Brazil', 'Mexico', 'Argentina', 'Colombia'],
    correct: 'Mexico'
},
{
    hasContent: false,
    quest: 'What currency is used in Russia?',
    choices: ['Rublo', 'Ruble', 'Rupiah', 'Krona'],
    correct: 'Ruble'
},
{
    hasContent: false,
    quest: 'Which African country uses the Naira as its official currency?',
    choices: ['Nigeria', 'Kenya', 'South Africa', 'Ghana'],
    correct: 'Nigeria'
},
{
    hasContent: false,
    quest: 'What is the official currency of China?',
    choices: ['Yuan', 'Won', 'Yen', 'Ringgit'],
    correct: 'Yuan'
},
{
    hasContent: false,
    quest: 'What currency is used in Argentina?',
    choices: ['Peso', 'Real', 'Dollar', 'Sol'],
    correct: 'Peso'
},
{
    hasContent: false,
    quest: 'Which Middle Eastern country uses the Shekel as its official currency?',
    choices: ['Jordan', 'Saudi Arabia', 'Israel', 'Qatar'],
    correct: 'Israel'
},
{
    hasContent: false,
    quest: 'The Singapore Dollar is the official currency of which country?',
    choices: ['Singapore', 'Malaysia', 'Thailand', 'Indonesia'],
    correct: 'Singapore'
},
{
    hasContent: false,
    quest: 'What is the currency of Turkey?',
    choices: ['Lira', 'Rupee', 'Pound', 'Riyal'],
    correct: 'Lira'
},
{
    hasContent: false,
    quest: 'What is the term for the continuous, directed movement of seawater within the ocean?',
    choices: ['Ocean Flow', 'Tidal Movement', 'Water Drift', 'Ocean Current'],
    correct: 'Ocean Current'
},
{
    hasContent: false,
    quest: 'What is the Great Barrier Reef?',
    choices: ['A Deep Ocean Trench', 'A Large Underwater Cave', 'A Coral Reef System', 'A Submarine Mountain Range'],
    correct: 'A Coral Reef System'
},
{
    hasContent: false,
    quest: 'What causes ocean tides?',
    choices: ['Solar Radiation', 'Moon\'s Gravitational Pull', 'Underwater Earthquakes', 'Ocean Winds'],
    correct: 'Moon\'s Gravitational Pull'
},
{
    hasContent: false,
    quest: 'What is the Mariana Trench?',
    choices: ['A Deep Ocean Trench', 'A Volcanic Island', 'A Coral Atoll', 'A Coastal Estuary'],
    correct: 'A Deep Ocean Trench'
},
{
    hasContent: false,
    quest: 'What is the Gulf Stream?',
    choices: ['A Deep Ocean Trench', 'A Warm Ocean Current', 'An Underwater Cave System', 'A Submarine Mountain Range'],
    correct: 'A Warm Ocean Current'
},
{
    hasContent: false,
    quest: 'What is the Coriolis effect in the context of ocean currents?',
    choices: ['A Warm Ocean Current', 'An Atmospheric Phenomenon', 'The Rotation of the Earth Influencing Currents', 'A Coastal Estuary'],
    correct: 'The Rotation of the Earth Influencing Currents'
},
{
    hasContent: false,
    quest: 'What is upwelling in oceanography?',
    choices: ['A Deep Ocean Trench', 'An Upward Movement of Cold, Nutrient-Rich Water', 'A Coastal Estuary', 'A Warm Ocean Current'],
    correct: 'An Upward Movement of Cold, Nutrient-Rich Water'
},
{
    hasContent: false,
    quest: 'What is the term for a circular ocean current that rotates clockwise in the Northern Hemisphere and counterclockwise in the Southern Hemisphere?',
    choices: ['Tidal Current', 'Ocean Flow', 'Eddy Current', 'Ocean Gyre'],
    correct: 'Ocean Gyre'
},
{
    hasContent: false,
    quest: 'What is a seamount?',
    choices: ['A Shallow Coastal Area', 'A Deep Ocean Trench', 'A Submarine Volcanic Mountain', 'A Coastal Estuary'],
    correct: 'A Submarine Volcanic Mountain'
},
{
    hasContent: false,
    quest: 'What is the term for a large, rotating system of ocean currents, particularly those involved with large wind movements?',
    choices: ['Tidal Movement', 'Ocean Gyre', 'Ocean Flow', 'Turbulent Water'],
    correct: 'Ocean Gyre'
},
{
    hasContent: false,
    quest: 'What is the importance of the Sargasso Sea?',
    choices: ['A Deep Ocean Trench', 'A Large Underwater Cave', 'A Coral Reef System', 'A Region with Accumulated Floating Seaweed'],
    correct: 'A Region with Accumulated Floating Seaweed'
},
{
    hasContent: false,
    quest: 'Which ocean is the largest and covers more than 60 million square miles?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correct: 'Pacific Ocean'
},
{
    hasContent: false,
    quest: 'What is the term for the warm ocean current that influences weather patterns and brings warmth to the western coasts of North and South America?',
    choices: ['Gulf Stream', 'Kuroshio Current', 'Agulhas Current', 'California Current'],
    correct: 'Gulf Stream'
},
{
    hasContent: false,
    quest: 'Which ocean is characterized by having the Mariana Trench, the deepest point on Earth?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correct: 'Pacific Ocean'
},
{
    hasContent: false,
    quest: 'What is the term for the massive rotating ocean currents, such as the North Atlantic Drift and the South Pacific Gyre?',
    choices: ['Ocean Gyre', 'Tidal Movement', 'Upwelling', 'Ocean Flow'],
    correct: 'Ocean Gyre'
},
{
    hasContent: false,
    quest: 'Which ocean is located mostly in the Southern Hemisphere and surrounds the continent of Antarctica?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Southern Ocean'],
    correct: 'Southern Ocean'
},
{
    hasContent: false,
    quest: 'What is the name of the ocean current that flows from the Indian Ocean into the southwestern Pacific and influences climate in Australia and Indonesia?',
    choices: ['Kuroshio Current', 'Antarctic Circumpolar Current', 'Agulhas Current', 'Leeuwin Current'],
    correct: 'Leeuwin Current'
},
{
    hasContent: false,
    quest: 'Which ocean is known for its monsoon winds that impact the climate of surrounding countries like India and Southeast Asia?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correct: 'Indian Ocean'
},
{
    hasContent: false,
    quest: 'What is the term for the shallow, submerged regions near the edges of continents?',
    choices: ['Ocean Trench', 'Mid-Ocean Ridge', 'Abyssal Plain', 'Continental Shelf'],
    correct: 'Continental Shelf'
},
{
    hasContent: false,
    quest: 'Which ocean is the smallest and the shallowest among the four major oceans?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correct: 'Arctic Ocean'
},
{
    hasContent: false,
    quest: 'What is the phenomenon where warmer ocean surface temperatures in the central and eastern Pacific can lead to climate changes worldwide?',
    choices: ['Ocean Acidification', 'El Niño', 'La Niña', 'Thermohaline Circulation'],
    correct: 'El Niño'
},
{
    hasContent: false,
    quest: 'Which ocean is home to the Mid-Atlantic Ridge, a continuous mountain range running down its center?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correct: 'Atlantic Ocean'
},
{
    hasContent: false,
    quest: 'What is the term for the cold, nutrient-rich ocean current that flows northward along the western coast of South America?',
    choices: ['Peru Current', 'California Current', 'Benguela Current', 'Humboldt Current'],
    correct: 'Humboldt Current'
},
{
    hasContent: false,
    quest: 'Which ocean is connected to the Arctic Ocean and is partially covered by sea ice throughout the year?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
    correct: 'Arctic Ocean'
},
{
    hasContent: false,
    quest: 'What is the name of the ocean current that flows clockwise around the Indian subcontinent and influences the climate of the region?',
    choices: ['Leeuwin Current', 'Agulhas Current', 'East Australian Current', 'Monsoon Current'],
    correct: 'Monsoon Current'
},
{
    hasContent: false,
    quest: 'Which ocean is known for its typhoon and hurricane formation in the western Pacific?',
    choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Southern Ocean'],
    correct: 'Pacific Ocean'
},
{
    hasContent: true,
    quest: 'Describe the significance of the Pacific Ring of Fire in the Pacific Ocean.',
    content: 'The Pacific Ring of Fire is a region with high volcanic and seismic activity encircling the Pacific Ocean. It is known for frequent earthquakes and numerous active volcanoes, influencing the geology of the surrounding countries.',
    choices: ['Tectonic Plates', 'Volcanic Islands', 'Ocean Trenches', 'Earthquakes'],
    correct: 'Tectonic Plates'
},
{
    hasContent: false,
    quest: 'Which river is the longest in the world?',
    choices: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
    correct: 'Nile'
},
{
    hasContent: false,
    quest: 'Which river is the second-longest in the world?',
    choices: ['Nile', 'Amazon', 'Yangtze', 'Mississippi'],
    correct: 'Amazon'
},
{
    hasContent: false,
    quest: 'In which continent does the Amazon River flow?',
    choices: ['Africa', 'South America', 'Asia', 'North America'],
    correct: 'South America'
},
{
    hasContent: false,
    quest: 'Which river is considered the "cradle of civilization" and flows through Iraq?',
    choices: ['Nile', 'Amazon', 'Yangtze', 'Euphrates'],
    correct: 'Euphrates'
},
{
    hasContent: false,
    quest: 'What is the longest river in Europe?',
    choices: ['Danube', 'Loire', 'Volga', 'Thames'],
    correct: 'Volga'
},
{
    hasContent: false,
    quest: 'Which river is the primary river of India?',
    choices: ['Ganges', 'Yamuna', 'Brahmaputra', 'Indus'],
    correct: 'Ganges'
},
{
    hasContent: false,
    quest: 'What river is associated with the city of Cairo in Egypt?',
    choices: ['Nile', 'Amazon', 'Yangtze', 'Danube'],
    correct: 'Nile'
},
{
    hasContent: false,
    quest: 'Which river is known as the "Yellow River"?',
    choices: ['Nile', 'Amazon', 'Yangtze', 'Huang He'],
    correct: 'Huang He'
},
{
    hasContent: false,
    quest: 'In which U.S. state does the Mississippi River have its source?',
    choices: ['Minnesota', 'Louisiana', 'Mississippi', 'Missouri'],
    correct: 'Minnesota'
},
{
    hasContent: false,
    quest: 'What river is the longest in Africa?',
    choices: ['Nile', 'Congo', 'Niger', 'Zambezi'],
    correct: 'Nile'
},
{
    hasContent: false,
    quest: 'Which river is known as the "River of Gold" and is the longest river in Alaska?',
    choices: ['Yukon', 'Columbia', 'Kuskokwim', 'Tanana'],
    correct: 'Yukon'
},
{
    hasContent: false,
    quest: 'What is the longest river entirely within Russia?',
    choices: ['Ob', 'Yenisei', 'Lena', 'Amur'],
    correct: 'Lena'
},
{
    hasContent: false,
    quest: 'In which country does the Danube River have its source?',
    choices: ['Germany', 'Austria', 'Switzerland', 'Slovakia'],
    correct: 'Germany'
},
{
    hasContent: false,
    quest: 'What river is associated with the city of Rome?',
    choices: ['Tiber', 'Po', 'Arno', 'Adige'],
    correct: 'Tiber'
},
{
    hasContent: false,
    quest: 'Which river is the longest in China?',
    choices: ['Yellow River (Huang He)', 'Yangtze (Chang Jiang)', 'Mekong', 'Indus'],
    correct: 'Yangtze (Chang Jiang)'
},
{
    hasContent: false,
    quest: 'What river is the primary tributary of the Amazon River?',
    choices: ['Orinoco', 'Paraguay', 'Madeira', 'Negro'],
    correct: 'Negro'
},
{
    hasContent: false,
    quest: 'Which river forms part of the border between the United States and Mexico?',
    choices: ['Rio Grande', 'Colorado', 'Columbia', 'Brazos'],
    correct: 'Rio Grande'
},
{
    hasContent: false,
    quest: 'What river is associated with the city of Budapest in Hungary?',
    choices: ['Danube', 'Tisza', 'Sava', 'Drava'],
    correct: 'Danube'
},
{
    hasContent: false,
    quest: 'Which river is the longest in Australia?',
    choices: ['Murray', 'Darling', 'Yarra', 'Lachlan'],
    correct: 'Murray'
},
{
    hasContent: true,
    quest: 'Explain the significance of the Nile River in ancient Egyptian civilization.',
    content: 'The Nile River played a crucial role in ancient Egypt, providing fertile soil for agriculture through annual flooding. It was central to the economy, transportation, and religious beliefs of the civilization.',
    choices: ['Nile Delta', 'Pyramids', 'Pharaohs', 'Hieroglyphics'],
    correct: 'Pyramids'
},
{
    hasContent: false,
    quest: 'Which mountain is the highest in the world?',
    choices: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
    correct: 'Mount Everest'
},
{
    hasContent: false,
    quest: 'In which mountain range is Mount Everest located?',
    choices: ['Andes', 'Rocky Mountains', 'Himalayas', 'Alps'],
    correct: 'Himalayas'
},
{
    hasContent: false,
    quest: 'What is the highest peak in North America?',
    choices: ['Mount McKinley (Denali)', 'Mount Logan', 'Mount St. Elias', 'Mount Foraker'],
    correct: 'Mount McKinley (Denali)'
},
{
    hasContent: false,
    quest: 'Which mountain range is often called the "Spine of Europe"?',
    choices: ['Carpathians', 'Apennines', 'Alps', 'Pyrenees'],
    correct: 'Alps'
},
{
    hasContent: false,
    quest: 'What is the highest mountain in Africa?',
    choices: ['Kilimanjaro', 'Ras Dashen', 'Simien Mountains', 'Drakensberg'],
    correct: 'Kilimanjaro'
},
{
    hasContent: false,
    quest: 'Which mountain range stretches across Morocco, Algeria, and Tunisia in North Africa?',
    choices: ['Atlas Mountains', 'Sahara Range', 'Ahaggar Mountains', 'Tell Atlas'],
    correct: 'Atlas Mountains'
},
{
    hasContent: false,
    quest: 'What is the highest peak in South America?',
    choices: ['Aconcagua', 'Huascaran', 'Cerro Torre', 'Fitz Roy'],
    correct: 'Aconcagua'
},
{
    hasContent: false,
    quest: 'Which mountain range runs along the western edge of South America?',
    choices: ['Andes', 'Rocky Mountains', 'Himalayas', 'Alps'],
    correct: 'Andes'
},
{
    hasContent: false,
    quest: 'What is the highest peak in Europe?',
    choices: ['Mont Blanc', 'Elbrus', 'Matterhorn', 'Dufourspitze'],
    correct: 'Elbrus'
},
{
    hasContent: false,
    quest: 'In which mountain range is Mont Blanc located?',
    choices: ['Carpathians', 'Apennines', 'Alps', 'Pyrenees'],
    correct: 'Alps'
},
{
    hasContent: false,
    quest: 'What is the highest peak in Australia?',
    choices: ['Mount Kosciuszko', 'Mount Townsend', 'Mount Twynam', 'Mount Ramshead'],
    correct: 'Mount Kosciuszko'
},
{
    hasContent: false,
    quest: 'Which mountain range spans across the western United States and Canada?',
    choices: ['Andes', 'Rocky Mountains', 'Appalachian Mountains', 'Cascade Range'],
    correct: 'Rocky Mountains'
},
{
    hasContent: false,
    quest: 'What is the highest peak in Antarctica?',
    choices: ['Mount Tyree', 'Vinson Massif', 'Mount Craddock', 'Mount Shinn'],
    correct: 'Vinson Massif'
},
{
    hasContent: false,
    quest: 'Which mountain range separates Europe from Asia?',
    choices: ['Ural Mountains', 'Caucasus Mountains', 'Altai Mountains', 'Tien Shan'],
    correct: 'Ural Mountains'
},
{
    hasContent: false,
    quest: 'What is the highest peak in North America if considering its prominence?',
    choices: ['Mount McKinley (Denali)', 'Mount Logan', 'Mount St. Elias', 'Pico de Orizaba'],
    correct: 'Mount McKinley (Denali)'
},
{
    hasContent: false,
    quest: 'Which mountain range forms the backbone of the Italian Peninsula?',
    choices: ['Carpathians', 'Apennines', 'Alps', 'Dinaric Alps'],
    correct: 'Apennines'
},
{
    hasContent: false,
    quest: 'What is the highest peak in the Southern Hemisphere?',
    choices: ['Aoraki / Mount Cook', 'Mount Aspiring', 'Mount Cook', 'Mount Tasman'],
    correct: 'Aoraki / Mount Cook'
},
{
    hasContent: false,
    quest: 'Which mountain range extends from Norway to the Kola Peninsula in Russia?',
    choices: ['Scandinavian Mountains', 'Urals', 'Tatra Mountains', 'Carpathians'],
    correct: 'Scandinavian Mountains'
},
{
    hasContent: false,
    quest: 'What is the highest peak in South America if considering its prominence?',
    choices: ['Aconcagua', 'Huascaran', 'Cerro Torre', 'Chimborazo'],
    correct: 'Chimborazo'
},
{
    hasContent: true,
    quest: 'Explain the significance of the Himalayan mountain range.',
    content: 'The Himalayas, known as the "Abode of Snow," are a vast mountain range in South Asia. They play a crucial role in influencing climate, harboring diverse ecosystems, and are considered sacred in various cultures.',
    choices: ['Mount Everest', 'Ganges River', 'Buddhism', 'Yeti Myth'],
    correct: 'Buddhism'
},
{
    hasContent: false,
    quest: 'Which country is known as the "Land of the Rising Sun"?',
    choices: ['China', 'Japan', 'South Korea', 'Vietnam'],
    correct: 'Japan'
},
{
    hasContent: false,
    quest: 'In which continent is Brazil located?',
    choices: ['South America', 'Africa', 'Europe', 'Asia'],
    correct: 'South America'
},
{
    hasContent: false,
    quest: 'Which country is the smallest in terms of land area?',
    choices: ['Monaco', 'Nauru', 'San Marino', 'Liechtenstein'],
    correct: 'Monaco'
},
{
    hasContent: false,
    quest: 'What is the capital city of Australia?',
    choices: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    correct: 'Canberra'
},
{
    hasContent: false,
    quest: 'Which African country is known as the "Rainbow Nation"?',
    choices: ['Nigeria', 'Kenya', 'South Africa', 'Ghana'],
    correct: 'South Africa'
},
{
    hasContent: false,
    quest: 'In which country would you find the ancient city of Petra?',
    choices: ['Egypt', 'Iraq', 'Lebanon', 'Jordan'],
    correct: 'Jordan'
},
{
    hasContent: false,
    quest: 'What is the largest country in South America?',
    choices: ['Argentina', 'Brazil', 'Colombia', 'Peru'],
    correct: 'Brazil'
},
{
    hasContent: false,
    quest: 'Which European country is known as the "Land of a Thousand Lakes"?',
    choices: ['Sweden', 'Norway', 'Finland', 'Denmark'],
    correct: 'Finland'
},
{
    hasContent: false,
    quest: 'What is the official language of Iran?',
    choices: ['Turkish', 'Arabic', 'Farsi (Persian)', 'Kurdish'],
    correct: 'Farsi (Persian)'
},
{
    hasContent: false,
    quest: 'In which continent is the country of Madagascar located?',
    choices: ['Asia', 'Africa', 'Australia', 'South America'],
    correct: 'Africa'
},
{
    hasContent: true,
    quest: 'Explain the geography of the Scandinavian Peninsula and name the countries it comprises.',
    content: 'The Scandinavian Peninsula is located in Northern Europe and comprises the countries of Norway, Sweden, and part of Finland.',
    choices: ['Denmark', 'Iceland', 'Estonia', 'Latvia'],
    correct: 'Denmark'
},
{
    hasContent: false,
    quest: 'Which Asian country is known as the "Land of the Thunder Dragon"?',
    choices: ['Nepal', 'Bhutan', 'Thailand', 'Myanmar'],
    correct: 'Bhutan'
},
{
    hasContent: false,
    quest: 'What is the capital city of Canada?',
    choices: ['Ottawa', 'Toronto', 'Vancouver', 'Montreal'],
    correct: 'Ottawa'
},
{
    hasContent: false,
    quest: 'In which country is Mount Kilimanjaro, the highest peak in Africa, located?',
    choices: ['Kenya', 'Uganda', 'Tanzania', 'Rwanda'],
    correct: 'Tanzania'
},
{
    hasContent: false,
    quest: 'Which country is known as the "Land of the Long White Cloud"?',
    choices: ['Australia', 'New Zealand', 'Fiji', 'Papua New Guinea'],
    correct: 'New Zealand'
},
{
    hasContent: false,
    quest: 'Which sea is the largest in the world?',
    choices: ['Mediterranean Sea', 'Caspian Sea', 'Arabian Sea', 'Philippine Sea'],
    correct: 'Philippine Sea'
},
{
    hasContent: false,
    quest: 'In which sea is the Great Barrier Reef located?',
    choices: ['Andaman Sea', 'South China Sea', 'Coral Sea', 'Timor Sea'],
    correct: 'Coral Sea'
},
{
    hasContent: false,
    quest: 'What is the smallest sea in the world?',
    choices: ['Adriatic Sea', 'Baltic Sea', 'Red Sea', 'Sea of Marmara'],
    correct: 'Sea of Marmara'
},
{
    hasContent: false,
    quest: 'Which sea is known for being the saltiest body of water on Earth?',
    choices: ['Dead Sea', 'Caspian Sea', 'Aral Sea', 'Black Sea'],
    correct: 'Dead Sea'
},
{
    hasContent: false,
    quest: 'In which sea would you find the Maldives archipelago?',
    choices: ['Arabian Sea', 'Andaman Sea', 'Mozambique Channel', 'Laccadive Sea'],
    correct: 'Laccadive Sea'
},
{
    hasContent: false,
    quest: 'What is the largest inland sea in the world?',
    choices: ['Caspian Sea', 'Aral Sea', 'Mediterranean Sea', 'Black Sea'],
    correct: 'Caspian Sea'
},
{
    hasContent: false,
    quest: 'In which sea is the island of Sicily located?',
    choices: ['Adriatic Sea', 'Ionian Sea', 'Tyrrhenian Sea', 'Aegean Sea'],
    correct: 'Tyrrhenian Sea'
},
{
    hasContent: false,
    quest: 'Which sea is connected to the Atlantic Ocean by the Strait of Gibraltar?',
    choices: ['Mediterranean Sea', 'Tyrrhenian Sea', 'Ionian Sea', 'Adriatic Sea'],
    correct: 'Mediterranean Sea'
},
{
    hasContent: false,
    quest: 'In which sea would you find the islands of Java and Sumatra?',
    choices: ['Java Sea', 'Bali Sea', 'Banda Sea', 'Flores Sea'],
    correct: 'Java Sea'
},
{
    hasContent: false,
    quest: 'What is the deepest sea in the world?',
    choices: ['Bering Sea', 'Sargasso Sea', 'Japan Sea', 'Philippine Sea'],
    correct: 'Philippine Sea'
},
{
    hasContent: true,
    quest: 'Explain the ecological importance of the Sargasso Sea.',
    content: 'The Sargasso Sea, located in the North Atlantic Ocean, is known for its unique ecosystem, home to floating mats of Sargassum seaweed. It serves as a habitat for diverse marine life, including fish, turtles, and birds.',
    choices: ['Bermuda Triangle', 'Mid-Atlantic Ridge', 'Ocean Currents', 'Eel Migration'],
    correct: 'Ocean Currents'
},
{
    hasContent: false,
    quest: 'In which sea is the island of Cyprus located?',
    choices: ['Ionian Sea', 'Aegean Sea', 'Mediterranean Sea', 'Tyrrhenian Sea'],
    correct: 'Mediterranean Sea'
},
{
    hasContent: false,
    quest: 'What is the sea bordered by Saudi Arabia, Yemen, and Oman to the west and Iran and the United Arab Emirates to the north?',
    choices: ['Red Sea', 'Arabian Sea', 'Persian Gulf', 'Gulf of Aden'],
    correct: 'Arabian Sea'
},
{
    hasContent: false,
    quest: 'In which sea is the island of Tasmania located?',
    choices: ['Tasman Sea', 'Coral Sea', 'Bass Strait', 'Tonga Trench'],
    correct: 'Tasman Sea'
},
{
    hasContent: false,
    quest: 'Which sea separates the Malay Peninsula from the island of Sumatra?',
    choices: ['Java Sea', 'Andaman Sea', 'South China Sea', 'Strait of Malacca'],
    correct: 'Strait of Malacca'
},
{
    hasContent: false,
    quest: 'What is the northernmost sea in the Atlantic Ocean?',
    choices: ['North Sea', 'Norwegian Sea', 'Barents Sea', 'Irish Sea'],
    correct: 'Norwegian Sea'
},
{
    hasContent: false,
    quest: 'In which sea would you find the Balearic Islands?',
    choices: ['Tyrrhenian Sea', 'Ionian Sea', 'Adriatic Sea', 'Balearic Sea'],
    correct: 'Balearic Sea'
},
{
    hasContent: false,
    quest: 'Which sea is located between Myanmar (Burma) and Thailand?',
    choices: ['Andaman Sea', 'Gulf of Thailand', 'South China Sea', 'Java Sea'],
    correct: 'Andaman Sea'
},
{
    hasContent: false,
    quest: 'What is the shallowest sea in the world?',
    choices: ['Caspian Sea', 'Aral Sea', 'Black Sea', 'Baltic Sea'],
    correct: 'Baltic Sea'
},
{
    hasContent: false,
    quest: 'Which lake is the largest by surface area in the world?',
    choices: ['Caspian Sea', 'Lake Superior', 'Lake Victoria', 'Great Bear Lake'],
    correct: 'Caspian Sea'
},
{
    hasContent: false,
    quest: 'In which continent is Lake Baikal located?',
    choices: ['North America', 'Europe', 'Asia', 'Africa'],
    correct: 'Asia'
},
{
    hasContent: false,
    quest: 'What is the deepest lake in the world?',
    choices: ['Lake Baikal', 'Lake Tanganyika', 'Lake Malawi', 'Lake Vostok'],
    correct: 'Lake Baikal'
},
{
    hasContent: false,
    quest: 'In which U.S. state is Crater Lake located?',
    choices: ['Oregon', 'California', 'Washington', 'Idaho'],
    correct: 'Oregon'
},
{
    hasContent: false,
    quest: 'Which lake is the largest by volume in North America?',
    choices: ['Lake Superior', 'Great Slave Lake', 'Lake Michigan', 'Lake Huron'],
    correct: 'Great Slave Lake'
},
{
    hasContent: false,
    quest: 'In which country is Lake Titicaca located?',
    choices: ['Peru', 'Chile', 'Argentina', 'Bolivia'],
    correct: 'Peru'
},
{
    hasContent: false,
    quest: 'What is the largest glacial lake in North America?',
    choices: ['Lake Tahoe', 'Lake Winnipeg', 'Lake Champlain', 'Great Bear Lake'],
    correct: 'Great Bear Lake'
},
{
    hasContent: false,
    quest: 'In which African country is Lake Malawi located?',
    choices: ['Kenya', 'Tanzania', 'Malawi', 'Zambia'],
    correct: 'Malawi'
},
{
    hasContent: false,
    quest: 'Which lake is the largest by surface area in Africa?',
    choices: ['Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Lake Turkana'],
    correct: 'Lake Victoria'
},
{
    hasContent: false,
    quest: 'In which U.S. state is Lake Tahoe located?',
    choices: ['California', 'Nevada', 'Colorado', 'Arizona'],
    correct: 'California'
},
{
    hasContent: true,
    quest: 'Explain the significance of the Great Lakes in North America.',
    content: 'The Great Lakes, consisting of Superior, Michigan, Huron, Erie, and Ontario, are the largest group of freshwater lakes in the world. They play a crucial role in shipping, trade, and are vital to the region\'s ecology.',
    choices: ['St. Lawrence River', 'Erie Canal', 'Appalachian Mountains', 'Great Divide'],
    correct: 'St. Lawrence River'
},
{
    hasContent: false,
    quest: 'In which country is Lake Geneva located?',
    choices: ['France', 'Italy', 'Switzerland', 'Germany'],
    correct: 'Switzerland'
},
{
    hasContent: false,
    quest: 'What is the largest lake entirely within the borders of Canada?',
    choices: ['Great Slave Lake', 'Lake Winnipeg', 'Lake Athabasca', 'Reindeer Lake'],
    correct: 'Great Slave Lake'
},
{
    hasContent: false,
    quest: 'In which U.S. state is Flathead Lake located?',
    choices: ['Montana', 'Idaho', 'Wyoming', 'North Dakota'],
    correct: 'Montana'
},
{
    hasContent: false,
    quest: 'Which lake is known for its pink color due to high salinity and algae?',
    choices: ['Lake Nakuru', 'Lake Retba', 'Great Salt Lake', 'Lake Hillier'],
    correct: 'Lake Hillier'
},
{
    hasContent: false,
    quest: 'In which U.S. state is Lake Okeechobee located?',
    choices: ['Florida', 'Louisiana', 'Texas', 'Georgia'],
    correct: 'Florida'
},
{
    hasContent: false,
    quest: 'What is the largest lake entirely within the borders of Russia?',
    choices: ['Lake Baikal', 'Lake Ladoga', 'Lake Onega', 'Caspian Sea'],
    correct: 'Lake Ladoga'
},
{
    hasContent: false,
    quest: 'In which U.S. state is Lake Powell located?',
    choices: ['Arizona', 'Utah', 'Colorado', 'New Mexico'],
    correct: 'Utah'
},
{
    hasContent: false,
    quest: 'Which lake is the largest by surface area in South America?',
    choices: ['Lake Titicaca', 'Lake Maracaibo', 'Lake Poopo', 'Lake Argentino'],
    correct: 'Lake Titicaca'
}
]
const musicQuestions = [ 
{
    hasContent: false,
    quest: 'Who is often referred to as the "King of Rock and Roll"?',
    choices: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly', 'Little Richard'],
    correct: 'Elvis Presley'
},
{
    hasContent: false,
    quest: 'Which rock band released the album "The Dark Side of the Moon"?',
    choices: ['The Rolling Stones', 'Led Zeppelin', 'Pink Floyd', 'The Who'],
    correct: 'Pink Floyd'
},
{
    hasContent: false,
    quest: 'What is the title of Queen\'s epic six-minute suite that became a rock anthem?',
    choices: ['Bohemian Rhapsody', 'We Will Rock You', 'Somebody to Love', 'Under Pressure'],
    correct: 'Bohemian Rhapsody'
},
{
    hasContent: false,
    quest: 'Which rock guitarist is known for his iconic guitar riff in the song "Smoke on the Water"?',
    choices: ['Jimi Hendrix', 'Jimmy Page', 'Eric Clapton', 'Ritchie Blackmore'],
    correct: 'Ritchie Blackmore'
},
{
    hasContent: false,
    quest: 'Who is the lead singer of the band U2?',
    choices: ['Bono', 'Chris Martin', 'Mick Jagger', 'Freddie Mercury'],
    correct: 'Bono'
},
{
    hasContent: true,
    quest: 'Explain the significance of Woodstock in the history of rock music.',
    content: 'Woodstock was a legendary music festival held in 1969, symbolizing the counterculture of the 1960s. It featured iconic rock performances and became a symbol of peace, love, and the spirit of the hippie movement.',
    choices: ['Monterey Pop Festival', 'Isle of Wight Festival', 'Glastonbury Festival', 'Coachella'],
    correct: 'Monterey Pop Festival'
},
{
    hasContent: false,
    quest: 'What rock band is often associated with the song "Stairway to Heaven"?',
    choices: ['The Eagles', 'Led Zeppelin', 'The Who', 'Queen'],
    correct: 'Led Zeppelin'
},
{
    hasContent: false,
    quest: 'Which rock band had an animated film adaptation of their concept album "The Wall"?',
    choices: ['The Rolling Stones', 'The Beatles', 'Pink Floyd', 'The Doors'],
    correct: 'Pink Floyd'
},
{
    hasContent: false,
    quest: 'Who was the guitarist for the rock band Nirvana?',
    choices: ['Kurt Cobain', 'Dave Grohl', 'Krist Novoselic', 'Pat Smear'],
    correct: 'Kurt Cobain'
},
{
    hasContent: false,
    quest: 'Which rock band is known for their hits "Sweet Child o\' Mine" and "November Rain"?',
    choices: ['Guns N\' Roses', 'AC/DC', 'Metallica', 'Def Leppard'],
    correct: 'Guns N\' Roses'
},
{
    hasContent: false,
    quest: 'What is the title of The Beatles\' final studio album?',
    choices: ['Abbey Road', 'Sgt. Pepper\'s Lonely Hearts Club Band', 'Let It Be', 'The White Album'],
    correct: 'Let It Be'
},
{
    hasContent: false,
    quest: 'Which rock band is often associated with the song "Hotel California"?',
    choices: ['The Eagles', 'Fleetwood Mac', 'The Doors', 'The Rolling Stones'],
    correct: 'The Eagles'
},
{
    hasContent: false,
    quest: 'Who is the lead singer of the rock band The Who?',
    choices: ['Roger Waters', 'Roger Daltrey', 'Pete Townshend', 'John Entwistle'],
    correct: 'Roger Daltrey'
},
{
    hasContent: false,
    quest: 'What rock band is known for their album "Back in Black" and hit "Highway to Hell"?',
    choices: ['Led Zeppelin', 'AC/DC', 'Deep Purple', 'Queen'],
    correct: 'AC/DC'
},
{
    hasContent: true,
    quest: 'Explain the concept of a "concept album" in the context of rock music.',
    content: 'A concept album is an album where all the tracks contribute to a single overall theme or story. It often involves a narrative or a cohesive musical and lyrical theme, enhancing the listening experience.',
    choices: ['Rock Opera', 'Progressive Rock', 'Album Suite', 'Musical Journey'],
    correct: 'Rock Opera'
},
{
    hasContent: false,
    quest: 'Who is known as the "Lizard King" and was the lead singer of The Doors?',
    choices: ['Jim Morrison', 'Ray Manzarek', 'Robbie Krieger', 'John Densmore'],
    correct: 'Jim Morrison'
},
{
    hasContent: false,
    quest: 'Which rock band is often associated with the hit song "Boys of Summer"?',
    choices: ['Eagles', 'The Police', 'Dire Straits', 'Don Henley'],
    correct: 'Don Henley'
},
{
    hasContent: false,
    quest: 'What is the title of Led Zeppelin\'s debut studio album?',
    choices: ['Led Zeppelin II', 'Physical Graffiti', 'Houses of the Holy', 'Led Zeppelin'],
    correct: 'Led Zeppelin'
},
{
    hasContent: false,
    quest: 'Who is the lead guitarist for the rock band The Rolling Stones?',
    choices: ['Keith Richards', 'Mick Jagger', 'Brian Jones', 'Ronnie Wood'],
    correct: 'Keith Richards'
},
{
    hasContent: false,
    quest: 'Who is known as the "Queen of Pop"?',
    choices: ['Madonna', 'Beyoncé', 'Taylor Swift', 'Lady Gaga'],
    correct: 'Madonna'
},
{
    hasContent: false,
    quest: 'Which pop singer released the album "Thriller," the best-selling album of all time?',
    choices: ['Michael Jackson', 'Prince', 'Elton John', 'George Michael'],
    correct: 'Michael Jackson'
},
{
    hasContent: false,
    quest: 'What is the title of Taylor Swift\'s debut studio album?',
    choices: ['Fearless', 'Speak Now', 'Red', 'Taylor Swift'],
    correct: 'Taylor Swift'
},
{
    hasContent: false,
    quest: 'Who is the lead singer of the pop band Maroon 5?',
    choices: ['Adam Levine', 'Bruno Mars', 'Ed Sheeran', 'Justin Timberlake'],
    correct: 'Adam Levine'
},
{
    hasContent: false,
    quest: 'Which British singer-songwriter is known for hits like "Someone Like You" and "Rolling in the Deep"?',
    choices: ['Adele', 'Sam Smith', 'Ed Sheeran', 'Dua Lipa'],
    correct: 'Adele'
},
{
    hasContent: true,
    quest: 'Explain the impact of MTV on the popularity of pop music.',
    content: 'MTV (Music Television) revolutionized the music industry by introducing the concept of music videos. It played a crucial role in promoting pop artists, enhancing their visual appeal, and creating a new form of entertainment that shaped pop culture.',
    choices: ['VH1', 'BET', 'CMT', 'ABC'],
    correct: 'VH1'
},
{
    hasContent: false,
    quest: 'Which pop group is known for hits like "Wannabe" and "Spice Up Your Life"?',
    choices: ['Destiny\'s Child', 'Backstreet Boys', 'NSYNC', 'Spice Girls'],
    correct: 'Spice Girls'
},
{
    hasContent: false,
    quest: 'What is the title of Justin Bieber\'s debut studio album?',
    choices: ['Purpose', 'Believe', 'My World', 'Changes'],
    correct: 'My World'
},
{
    hasContent: false,
    quest: 'Who is the lead singer of the pop band Coldplay?',
    choices: ['Chris Martin', 'Brandon Flowers', 'Dave Grohl', 'Tom Chaplin'],
    correct: 'Chris Martin'
},
{
    hasContent: false,
    quest: 'Which pop singer starred in the film "A Star is Born" alongside Bradley Cooper?',
    choices: ['Lady Gaga', 'Katy Perry', 'Rihanna', 'Ariana Grande'],
    correct: 'Lady Gaga'
},
{
    hasContent: false,
    quest: 'What is the title of Beyoncé\'s visual album released in 2016?',
    choices: ['Lemonade', 'Formation', 'B\'Day', '4'],
    correct: 'Lemonade'
},
{
    hasContent: false,
    quest: 'Who is known as the "King of Pop"?',
    choices: ['Michael Jackson', 'Prince', 'Elton John', 'George Michael'],
    correct: 'Michael Jackson'
},
{
    hasContent: true,
    quest: 'Explain the concept of a "boy band" in the context of pop music.',
    content: 'A boy band is a musical group consisting of male singers who typically harmonize and perform pop music. They are often marketed for their attractiveness, dance routines, and catchy tunes. Examples include Backstreet Boys and NSYNC.',
    choices: ['Girl Group', 'Rock Band', 'Jazz Ensemble', 'Orchestra'],
    correct: 'Girl Group'
},
{
    hasContent: false,
    quest: 'Which pop artist is known for the hit songs "Havana" and "Señorita"?',
    choices: ['Ariana Grande', 'Selena Gomez', 'Camila Cabello', 'Dua Lipa'],
    correct: 'Camila Cabello'
},
{
    hasContent: false,
    quest: 'What is the title of Ed Sheeran\'s third studio album?',
    choices: ['x', '÷', '+', '%'],
    correct: '÷'
},
{
    hasContent: false,
    quest: 'Who is known as the "Material Girl" in the world of pop music?',
    choices: ['Madonna', 'Beyoncé', 'Lady Gaga', 'Taylor Swift'],
    correct: 'Madonna'
},
{
    hasContent: false,
    quest: 'Which pop band released the albums "ABBA" and "Arrival"?',
    choices: ['The Beatles', 'ABBA', 'The Bee Gees', 'The Supremes'],
    correct: 'ABBA'
},
{
    hasContent: false,
    quest: 'What is the title of Katy Perry\'s debut studio album?',
    choices: ['Teenage Dream', 'Prism', 'One of the Boys', 'Witness'],
    correct: 'One of the Boys'
},
{
    hasContent: true,
    quest: 'Explain the influence of social media on the promotion of pop music.',
    content: 'Social media platforms like Instagram, Twitter, and TikTok have become powerful tools for artists to connect with fans, share music, and promote their image. Viral trends and challenges on these platforms significantly impact the popularity of pop songs.',
    choices: ['Facebook', 'Snapchat', 'LinkedIn', 'YouTube'],
    correct: 'YouTube'
},
{
    hasContent: false,
    quest: 'Who is often referred to as the "Godfather of Hip Hop"?',
    choices: ['Dr. Dre', 'Jay-Z', 'Tupac Shakur', 'DJ Kool Herc'],
    correct: 'DJ Kool Herc'
},
{
    hasContent: false,
    quest: 'Which rapper is known for the albums "The Chronic" and "2001"?',
    choices: ['Eminem', 'Snoop Dogg', 'Ice Cube', 'Dr. Dre'],
    correct: 'Dr. Dre'
},
{
    hasContent: false,
    quest: 'What is the stage name of the rapper born Marshall Mathers?',
    choices: ['Jay-Z', '50 Cent', 'Eminem', 'Kanye West'],
    correct: 'Eminem'
},
{
    hasContent: false,
    quest: 'Which rap group released the album "Straight Outta Compton"?',
    choices: ['Public Enemy', 'N.W.A', 'Wu-Tang Clan', 'OutKast'],
    correct: 'N.W.A'
},
{
    hasContent: false,
    quest: 'Who is known for the hit single "Empire State of Mind" with Alicia Keys?',
    choices: ['Nas', 'Jay-Z', 'Kendrick Lamar', 'Biggie Smalls'],
    correct: 'Jay-Z'
},
{
    hasContent: true,
    quest: 'Explain the origins and significance of "freestyle rap" in hip hop culture.',
    content: 'Freestyle rap involves spontaneous, improvised rhyming and wordplay. It originated in the Bronx as a form of street poetry. Freestyle battles showcase a rapper\'s ability to think on their feet and demonstrate lyrical skill.',
    choices: ['Battle Rap', 'Cypher', 'Graffiti', 'Breakdancing'],
    correct: 'Battle Rap'
},
{
    hasContent: false,
    quest: 'Which rapper is known for the albums "Illmatic" and "It Was Written"?',
    choices: ['Biggie Smalls', 'Tupac Shakur', 'Nas', 'Jay-Z'],
    correct: 'Nas'
},
{
    hasContent: false,
    quest: 'What is the title of Kendrick Lamar\'s critically acclaimed album released in 2015?',
    choices: ['DAMN.', 'To Pimp a Butterfly', 'Good Kid, M.A.A.D City', 'Section.80'],
    correct: 'To Pimp a Butterfly'
},
{
    hasContent: false,
    quest: 'Who is known for the hit song "Gin and Juice"?',
    choices: ['Snoop Dogg', 'Ice Cube', 'Dr. Dre', 'Eminem'],
    correct: 'Snoop Dogg'
},
{
    hasContent: false,
    quest: 'Which rapper is the co-founder of the record label Roc-A-Fella Records?',
    choices: ['50 Cent', 'Kanye West', 'Jay-Z', 'Nas'],
    correct: 'Jay-Z'
},
{
    hasContent: false,
    quest: 'What is the birthplace of hip hop music?',
    choices: ['Los Angeles', 'Chicago', 'Detroit', 'The Bronx'],
    correct: 'The Bronx'
},
{
    hasContent: false,
    quest: 'Who is known for the hit singles "Hotline Bling" and "Started From the Bottom"?',
    choices: ['Travis Scott', 'Drake', 'Future', 'Kendrick Lamar'],
    correct: 'Drake'
},
{
    hasContent: true,
    quest: 'Explain the concept of "sampling" in rap music production.',
    content: 'Sampling involves taking a portion of a sound recording and reusing it in a different song or piece. In rap music, producers often use samples from other songs to create new beats and melodies, adding a layer of creativity to the production.',
    choices: ['Remix', 'Mashup', 'Scratching', 'Looping'],
    correct: 'Remix'
},
{
    hasContent: false,
    quest: 'Which rapper is known for the albums "Get Rich or Die Tryin\'" and "The Massacre"?',
    choices: ['Kanye West', '50 Cent', 'Eminem', 'Jay-Z'],
    correct: '50 Cent'
},
{
    hasContent: false,
    quest: 'Who is known for the hit single "Lose Yourself" from the movie "8 Mile"?',
    choices: ['Eminem', 'Nas', 'Jay-Z', 'Kendrick Lamar'],
    correct: 'Eminem'
},
{
    hasContent: false,
    quest: 'What is the title of Kanye West\'s debut studio album?',
    choices: ['My Beautiful Dark Twisted Fantasy', 'The College Dropout', 'Late Registration', '808s & Heartbreak'],
    correct: 'The College Dropout'
},
{
    hasContent: false,
    quest: 'Who is known for the hit single "Mo Money Mo Problems" with Puff Daddy and Faith Evans?',
    choices: ['Biggie Smalls', 'Tupac Shakur', 'Nas', 'Jay-Z'],
    correct: 'Biggie Smalls'
},
{
    hasContent: true,
    quest: 'Explain the significance of the term "bling" in rap culture.',
    content: '"Bling" refers to flashy, ostentatious jewelry, often worn by rappers as a symbol of wealth and success. It became a prominent aspect of rap culture, reflecting the aspiration for financial prosperity and a luxurious lifestyle.',
    choices: ['Ice Grill', 'Drip', 'Swag', 'Baller'],
    correct: 'Ice Grill'
},
{
    hasContent: false,
    quest: 'Which rap group is known for the hit singles "Sabotage" and "Intergalactic"?',
    choices: ['Beastie Boys', 'Wu-Tang Clan', 'Public Enemy', 'Run-D.M.C.'],
    correct: 'Beastie Boys'
},
{
    hasContent: false,
    quest: 'Who is known for the albums "All Eyez on Me" and "Me Against the World"?',
    choices: ['Dr. Dre', 'Ice Cube', 'Tupac Shakur', 'Snoop Dogg'],
    correct: 'Tupac Shakur'
},
{
    hasContent: false,
    quest: 'Who is known as the "Queen of Soul"?',
    choices: ['Diana Ross', 'Whitney Houston', 'Aretha Franklin', 'Tina Turner'],
    correct: 'Aretha Franklin'
},
{
    hasContent: false,
    quest: 'Which legendary guitarist is often called "Slowhand"?',
    choices: ['Jimi Hendrix', 'Jimmy Page', 'Eric Clapton', 'Stevie Ray Vaughan'],
    correct: 'Eric Clapton'
},
{
    hasContent: false,
    quest: 'What is the title of Michael Jackson\'s best-selling album?',
    choices: ['Thriller', 'Bad', 'Off the Wall', 'Dangerous'],
    correct: 'Thriller'
},
{
    hasContent: false,
    quest: 'Who is known as the "King of Pop Punk" and the lead vocalist of Green Day?',
    choices: ['Billie Joe Armstrong', 'Tom DeLonge', 'Mark Hoppus', 'Travis Barker'],
    correct: 'Billie Joe Armstrong'
},
{
    hasContent: false,
    quest: 'What is the term for a musical composition for four voices or instruments?',
    choices: ['Duet', 'Quartet', 'Trio', 'Solo'],
    correct: 'Quartet'
},
{
    hasContent: true,
    quest: 'Explain the significance of the term "cover song" in the music industry.',
    content: 'A cover song is a new performance or recording of a previously recorded song. Artists often reinterpret and release covers of popular songs, offering their own unique take on the material. Cover songs can become hits and pay homage to the original artist.',
    choices: ['Remix', 'Mashup', 'Medley', 'Sample'],
    correct: 'Medley'
},
{
    hasContent: false,
    quest: 'Which musical instrument is known as the "king of instruments"?',
    choices: ['Piano', 'Violin', 'Trumpet', 'Flute'],
    correct: 'Piano'
},
{
    hasContent: false,
    quest: 'Who is known for the hit songs "Superstition" and "I Just Called to Say I Love You"?',
    choices: ['Stevie Wonder', 'Ray Charles', 'James Brown', 'Marvin Gaye'],
    correct: 'Stevie Wonder'
},
{
    hasContent: false,
    quest: 'What is the title of The Beatles\' final studio album?',
    choices: ['Abbey Road', 'Sgt. Pepper\'s Lonely Hearts Club Band', 'Let It Be', 'The White Album'],
    correct: 'Let It Be'
},
{
    hasContent: false,
    quest: 'Who is the lead singer of the band U2?',
    choices: ['Bono', 'Chris Martin', 'Mick Jagger', 'Freddie Mercury'],
    correct: 'Bono'
},
{
    hasContent: false,
    quest: 'Which composer is known for his iconic "Moonlight Sonata" and "Symphony No. 9"?',
    choices: ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach', 'Franz Schubert'],
    correct: 'Ludwig van Beethoven'
},
{
    hasContent: false,
    quest: 'What is the title of Bob Marley\'s greatest hits compilation album?',
    choices: ['Exodus', 'Natty Dread', 'Legend', 'Burnin\''],
    correct: 'Legend'
},
{
    hasContent: true,
    quest: 'Explain the concept of "pitch" in music.',
    content: 'Pitch refers to the perceived frequency of a sound or note. It determines whether a sound is high or low. In music, pitch is a crucial element that contributes to melody and harmony. Instruments and voices produce different pitches to create musical compositions.',
    choices: ['Timbre', 'Tone', 'Rhythm', 'Harmony'],
    correct: 'Timbre'
},
{
    hasContent: false,
    quest: 'Which composer is known for his famous "Eine kleine Nachtmusik"?',
    choices: ['Ludwig van Beethoven', 'Wolfgang Amadeus Mozart', 'Johann Sebastian Bach', 'Franz Schubert'],
    correct: 'Wolfgang Amadeus Mozart'
},
{
    hasContent: false,
    quest: 'What is the title of Elvis Presley\'s first studio album?',
    choices: ['Blue Hawaii', 'Love Me Tender', 'Elvis Presley', 'King Creole'],
    correct: 'Elvis Presley'
},
{
    hasContent: false,
    quest: 'Who is known for the hit single "Purple Haze" and is considered one of the greatest guitarists of all time?',
    choices: ['Eric Clapton', 'Jimi Hendrix', 'Jimmy Page', 'Stevie Ray Vaughan'],
    correct: 'Jimi Hendrix'
},
{
    hasContent: false,
    quest: 'What is the term for a composition that features a solo instrument with orchestral accompaniment?',
    choices: ['Symphony', 'Sonata', 'Concerto', 'Overture'],
    correct: 'Concerto'
},
{
    hasContent: true,
    quest: 'Explain the significance of the term "duet" in music.',
    content: 'A duet is a musical composition or performance featuring two singers or instrumentalists. It often involves a conversation or interaction between the two performers. Duet performances can create harmony, contrast, and emotional depth in a musical piece.',
    choices: ['Trio', 'Quartet', 'Quintet', 'Solo'],
    correct: 'Trio'
},
{
    hasContent: false,
    quest: 'Who is known for the albums "Purple Rain" and "Sign o\' the Times"?',
    choices: ['Michael Jackson', 'Prince', 'David Bowie', 'George Michael'],
    correct: 'Prince'
},
{
    hasContent: false,
    quest: 'What is the title of Adele\'s best-selling album?',
    choices: ['25', '21', '19', '30'],
    correct: '21'
},
{
    hasContent: false,
    quest: 'Who composed "Symphony No. 9 in D minor, Op. 125," commonly known as the "Choral Symphony"?',
    choices: ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach', 'Franz Schubert'],
    correct: 'Ludwig van Beethoven'
},
{
    hasContent: false,
    quest: 'What is the term for a composition written for a solo instrument, often featuring virtuosic display?',
    choices: ['Concerto', 'Sonata', 'Symphony', 'Overture'],
    correct: 'Concerto'
},
{
    hasContent: false,
    quest: 'Who composed the famous opera "The Magic Flute"?',
    choices: ['Richard Wagner', 'Wolfgang Amadeus Mozart', 'Giuseppe Verdi', 'Gioachino Rossini'],
    correct: 'Wolfgang Amadeus Mozart'
},
{
    hasContent: false,
    quest: 'What is the term for a gradual increase in loudness in music?',
    choices: ['Crescendo', 'Decrescendo', 'Allegro', 'Pianissimo'],
    correct: 'Crescendo'
},
{
    hasContent: false,
    quest: 'Which Russian composer is known for works like "Swan Lake" and "The Nutcracker"?',
    choices: ['Sergei Prokofiev', 'Dmitri Shostakovich', 'Pyotr Ilyich Tchaikovsky', 'Igor Stravinsky'],
    correct: 'Pyotr Ilyich Tchaikovsky'
},
{
    hasContent: true,
    quest: 'Explain the role of a conductor in an orchestra.',
    content: 'A conductor is a musical leader who directs a musical performance by guiding the ensemble through gestures, expressions, and cues. They interpret the composer\'s intent, shape the interpretation of the music, and ensure synchronization among the musicians.',
    choices: ['Composer', 'Soloist', 'Maestro', 'Concertmaster'],
    correct: 'Maestro'
},
{
    hasContent: false,
    quest: 'Who is known for the composition "Canon in D," a popular piece for weddings?',
    choices: ['Antonio Vivaldi', 'Johann Sebastian Bach', 'George Frideric Handel', 'Johann Pachelbel'],
    correct: 'Johann Pachelbel'
},
{
    hasContent: false,
    quest: 'What is the title of Ludwig van Beethoven\'s only opera?',
    choices: ['Fidelio', 'The Magic Flute', 'Carmen', 'Don Giovanni'],
    correct: 'Fidelio'
},
{
    hasContent: false,
    quest: 'Which Italian composer is known for the operas "La Traviata" and "Rigoletto"?',
    choices: ['Wolfgang Amadeus Mozart', 'Giuseppe Verdi', 'Giacomo Puccini', 'Gioachino Rossini'],
    correct: 'Giuseppe Verdi'
},
{
    hasContent: false,
    quest: 'What is the term for a musical composition written for three vocalists or instrumentalists?',
    choices: ['Quintet', 'Trio', 'Quartet', 'Duet'],
    correct: 'Trio'
},
{
    hasContent: false,
    quest: 'Who composed the famous "Ride of the Valkyries" from the opera "Die Walküre"?',
    choices: ['Richard Wagner', 'Johann Sebastian Bach', 'Gioachino Rossini', 'Pyotr Ilyich Tchaikovsky'],
    correct: 'Richard Wagner'
},
{
    hasContent: false,
    quest: 'What is the term for a musical work for one or more instruments, typically in three or four movements?',
    choices: ['Symphony', 'Sonata', 'Concerto', 'Overture'],
    correct: 'Sonata'
},
{
    hasContent: true,
    quest: 'Explain the significance of the term "opera" in classical music.',
    content: 'Opera is a form of musical theater that combines vocal and instrumental music, acting, and often dance. It tells a dramatic story through a combination of music, singing, and staging. Operas are typically performed in theaters and involve collaboration between composers, librettists, singers, and designers.',
    choices: ['Ballet', 'Operetta', 'Oratorio', 'Cantata'],
    correct: 'Ballet'
},
{
    hasContent: false,
    quest: 'Who is known for the composition "The Four Seasons," featuring violin concertos representing each season?',
    choices: ['Antonio Vivaldi', 'Johann Sebastian Bach', 'George Frideric Handel', 'Wolfgang Amadeus Mozart'],
    correct: 'Antonio Vivaldi'
},
{
    hasContent: false,
    quest: 'What is the term for a rapid alternation between two adjacent notes in a musical piece?',
    choices: ['Tremolo', 'Trill', 'Glissando', 'Portamento'],
    correct: 'Trill'
},
{
    hasContent: false,
    quest: 'Which German composer is known for the symphonies "No. 5" and "No. 9"?',
    choices: ['Franz Schubert', 'Johannes Brahms', 'Ludwig van Beethoven', 'Richard Strauss'],
    correct: 'Ludwig van Beethoven'
},
{
    hasContent: false,
    quest: 'What is the term for a slow, lyrical piece of music for solo instrument or voice?',
    choices: ['Allegro', 'Andante', 'Adagio', 'Presto'],
    correct: 'Adagio'
},
{
    hasContent: false,
    quest: 'Who is known for the composition "Ave Maria," based on a work by Franz Schubert?',
    choices: ['Giacomo Puccini', 'Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Franz Liszt'],
    correct: 'Franz Liszt'
},
{
    hasContent: false,
    quest: 'What is the term for a musical composition written for four vocalists or instrumentalists?',
    choices: ['Quintet', 'Trio', 'Quartet', 'Duet'],
    correct: 'Quartet'
},
{
    hasContent: true,
    quest: 'Explain the concept of "sonata-allegro form" in classical music composition.',
    content: 'Sonata-allegro form is a structural design used in the first movement of many classical symphonies, sonatas, and concertos. It typically consists of three main sections: exposition, development, and recapitulation. This form allows for the presentation and transformation of musical themes, creating a balanced and cohesive composition.',
    choices: ['Rondo', 'Coda', 'Theme and Variations', 'Fugue'],
    correct: 'Theme and Variations'
},
{
    hasContent: false,
    quest: 'Who composed the famous "Brandenburg Concertos"?',
    choices: ['Johann Sebastian Bach', 'George Frideric Handel', 'Antonio Vivaldi', 'Wolfgang Amadeus Mozart'],
    correct: 'Johann Sebastian Bach'
},
{
    hasContent: false,
    quest: 'Which instrument is known as the "king of instruments"?',
    choices: ['Piano', 'Violin', 'Trumpet', 'Flute'],
    correct: 'Piano'
},
{
    hasContent: false,
    quest: 'What is the largest and lowest-pitched woodwind instrument?',
    choices: ['Flute', 'Oboe', 'Bassoon', 'Clarinet'],
    correct: 'Bassoon'
},
{
    hasContent: false,
    quest: 'Which percussion instrument consists of a set of tuned metal bars?',
    choices: ['Marimba', 'Xylophone', 'Steel Drum', 'Glockenspiel'],
    correct: 'Glockenspiel'
},
{
    hasContent: false,
    quest: 'What is the primary material used to make bagpipes?',
    choices: ['Wood', 'Brass', 'Plastic', 'Leather'],
    correct: 'Wood'
},
{
    hasContent: false,
    quest: 'Which brass instrument has a sliding tube that changes the length of the air column?',
    choices: ['Trumpet', 'Trombone', 'French Horn', 'Tuba'],
    correct: 'Trombone'
},
{
    hasContent: true,
    quest: 'Explain the mechanism of a double reed in woodwind instruments.',
    content: 'A double reed consists of two thin pieces of cane bound together. When air is blown between the reeds, they vibrate against each other, producing sound. Woodwind instruments like the oboe and bassoon use double reeds to create their distinctive tones.',
    choices: ['Single Reed', 'Flute Mechanism', 'Brass Valve', 'Finger Holes'],
    correct: 'Single Reed'
},
{
    hasContent: false,
    quest: 'Which string instrument has the highest pitch in the violin family?',
    choices: ['Violin', 'Viola', 'Cello', 'Double Bass'],
    correct: 'Violin'
},
{
    hasContent: false,
    quest: 'What is the primary material used to make the body of a classical guitar?',
    choices: ['Maple', 'Rosewood', 'Mahogany', 'Spruce'],
    correct: 'Spruce'
},
{
    hasContent: false,
    quest: 'Which keyboard instrument produces sound by striking strings with hammers?',
    choices: ['Piano', 'Organ', 'Harpsichord', 'Accordion'],
    correct: 'Piano'
},
{
    hasContent: false,
    quest: 'What is the primary material used to make the body of a saxophone?',
    choices: ['Brass', 'Wood', 'Plastic', 'Aluminum'],
    correct: 'Brass'
},
{
    hasContent: false,
    quest: 'Which percussion instrument is played by striking metal discs together?',
    choices: ['Cymbals', 'Tambourine', 'Triangle', 'Castanets'],
    correct: 'Cymbals'
},
{
    hasContent: true,
    quest: 'Explain the difference between an acoustic and an electric guitar.',
    content: 'An acoustic guitar produces sound acoustically, using the vibration of the strings and resonance of the body. In contrast, an electric guitar uses pickups to convert string vibrations into electrical signals, which are then amplified to produce sound.',
    choices: ['Steel Strings', 'Fretboard Material', 'Amplification', 'Body Shape'],
    correct: 'Amplification'
},
{
    hasContent: false,
    quest: 'Which percussion instrument is played by striking a membrane stretched across a frame?',
    choices: ['Drum Set', 'Timpani', 'Bongo Drums', 'Snare Drum'],
    correct: 'Snare Drum'
},
{
    hasContent: false,
    quest: 'What is the primary material used to make the body of a clarinet?',
    choices: ['Wood', 'Brass', 'Plastic', 'Metal'],
    correct: 'Wood'
},
{
    hasContent: false,
    quest: 'Which brass instrument has a coiled shape and a distinctive "mellow" tone?',
    choices: ['Trumpet', 'Trombone', 'French Horn', 'Tuba'],
    correct: 'French Horn'
},
{
    hasContent: false,
    quest: 'What is the primary material used to make the body of a flute?',
    choices: ['Wood', 'Metal', 'Plastic', 'Bamboo'],
    correct: 'Metal'
},
{
    hasContent: false,
    quest: 'Which keyboard instrument uses air to produce sound by forcing it through pipes?',
    choices: ['Piano', 'Organ', 'Harpsichord', 'Accordion'],
    correct: 'Organ'
},
{
    hasContent: false,
    quest: 'What is the primary material used to make the body of a trumpet?',
    choices: ['Brass', 'Wood', 'Plastic', 'Aluminum'],
    correct: 'Brass'
},
{
    hasContent: true,
    quest: 'Explain the difference between a violin and a viola.',
    content: 'The violin and viola are both string instruments, but the viola is slightly larger and has a deeper tone. Additionally, the viola is tuned lower than the violin. While they share similar designs, the viola's size and tuning contribute to its distinctive sound.',
    choices: ['Bow Material', 'Tuning', 'Size', 'Number of Strings'],
    correct: 'Size'
},
{
    hasContent: false,
    quest: 'Which percussion instrument is played by striking metal tubes of different lengths?',
    choices: ['Xylophone', 'Marimba', 'Steel Drum', 'Glockenspiel'],
    correct: 'Xylophone'
},
]
const techQuestions = [
{
    hasContent: false,
    quest: 'What does the acronym "AI" stand for?',
    choices: ['Artificial Intelligence', 'Automated Interaction', 'Advanced Interface', 'Algorithmic Integration'],
    correct: 'Artificial Intelligence'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Machine Learning" in AI.',
    content: 'Machine Learning is a subset of AI that enables systems to learn and improve from experience without being explicitly programmed. It involves algorithms that allow machines to analyze data, identify patterns, and make decisions or predictions.',
    choices: ['Deep Learning', 'Neural Networks', 'Data Mining', 'Supervised Learning'],
    correct: 'Data Mining'
},
{
    hasContent: false,
    quest: 'Which programming language is commonly used for AI development?',
    choices: ['Java', 'C++', 'Python', 'JavaScript'],
    correct: 'Python'
},
{
    hasContent: false,
    quest: 'What is the term for the ability of an AI system to understand and interpret human language?',
    choices: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Text-to-Speech'],
    correct: 'Natural Language Processing'
},
{
    hasContent: false,
    quest: 'Which AI technique involves imitating the way the human brain works, using artificial neural networks?',
    choices: ['Genetic Algorithms', 'Expert Systems', 'Fuzzy Logic', 'Neural Networks'],
    correct: 'Neural Networks'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Deep Learning" in AI.',
    content: 'Deep Learning is a subset of Machine Learning that involves neural networks with multiple layers (deep neural networks). It can automatically learn to represent data through the hierarchical learning of features, enabling complex pattern recognition.',
    choices: ['Reinforcement Learning', 'Unsupervised Learning', 'Transfer Learning', 'Neural Networks'],
    correct: 'Neural Networks'
},
{
    hasContent: false,
    quest: 'What is the purpose of a chatbot in AI?',
    choices: ['Speech Recognition', 'Text-to-Speech', 'Conversational Interaction', 'Facial Recognition'],
    correct: 'Conversational Interaction'
},
{
    hasContent: false,
    quest: 'Which AI application involves teaching a computer system to perform tasks without explicit programming?',
    choices: ['Machine Learning', 'Natural Language Processing', 'Expert Systems', 'Fuzzy Logic'],
    correct: 'Machine Learning'
},
{
    hasContent: false,
    quest: 'What is the term for the ability of an AI system to recognize and interpret visual information from the world?',
    choices: ['Speech Recognition', 'Natural Language Processing', 'Computer Vision', 'Voice Synthesis'],
    correct: 'Computer Vision'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Reinforcement Learning" in AI.',
    content: 'Reinforcement Learning is a type of Machine Learning where an agent learns to make decisions by interacting with an environment. The agent receives feedback in the form of rewards or penalties, allowing it to optimize its behavior over time.',
    choices: ['Supervised Learning', 'Unsupervised Learning', 'Transfer Learning', 'Q-Learning'],
    correct: 'Q-Learning'
},
{
    hasContent: false,
    quest: 'Which AI technique involves using algorithms inspired by the process of natural selection?',
    choices: ['Genetic Algorithms', 'Expert Systems', 'Fuzzy Logic', 'Neural Networks'],
    correct: 'Genetic Algorithms'
},
{
    hasContent: false,
    quest: 'What is the term for the ability of an AI system to imitate or simulate human speech?',
    choices: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Text-to-Speech'],
    correct: 'Voice Synthesis'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Natural Language Processing" in AI.',
    content: 'Natural Language Processing (NLP) is a branch of AI that enables computers to understand, interpret, and generate human language. It involves the interaction between computers and natural language, allowing systems to process, analyze, and respond to text or speech.',
    choices: ['Speech Recognition', 'Text-to-Speech', 'Voice Synthesis', 'Conversational Interaction'],
    correct: 'Text-to-Speech'
},
{
    hasContent: false,
    quest: 'What is the term for the ability of an AI system to recognize and interpret spoken language?',
    choices: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Text-to-Speech'],
    correct: 'Speech Recognition'
},
{
    hasContent: false,
    quest: 'Which AI technique involves creating rules and knowledge-based systems to simulate human decision-making?',
    choices: ['Machine Learning', 'Natural Language Processing', 'Expert Systems', 'Fuzzy Logic'],
    correct: 'Expert Systems'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Computer Vision" in AI.',
    content: 'Computer Vision is an interdisciplinary field that enables computers to interpret and make decisions based on visual data. It involves tasks such as image recognition, object detection, and scene understanding, allowing machines to "see" and understand the visual world.',
    choices: ['Image Processing', 'Pattern Recognition', 'Video Analysis', 'Deep Learning'],
    correct: 'Deep Learning'
},
{
    hasContent: false,
    quest: 'Which AI application involves recognizing and verifying the identity of individuals based on unique physical or behavioral characteristics?',
    choices: ['Speech Recognition', 'Natural Language Processing', 'Facial Recognition', 'Voice Synthesis'],
    correct: 'Facial Recognition'
},
{
    hasContent: false,
    quest: 'What is the term for the ability of an AI system to generate human-like text or speech?',
    choices: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Text-to-Speech'],
    correct: 'Voice Synthesis'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Transfer Learning" in AI.',
    content: 'Transfer Learning is a Machine Learning technique where a model trained on one task is repurposed for a related task. It allows pre-trained models to be adapted and applied to new tasks, saving time and resources in training.',
    choices: ['Reinforcement Learning', 'Unsupervised Learning', 'Q-Learning', 'Neural Networks'],
    correct: 'Q-Learning'
},
{
    hasContent: false,
    quest: 'What is the term for the ability of an AI system to generate synthesized human-like voices?',
    choices: ['Speech Recognition', 'Natural Language Processing', 'Voice Synthesis', 'Text-to-Speech'],
    correct: 'Text-to-Speech'
},
{
    hasContent: false,
    quest: 'Which company introduced the first commercially available smartphone?',
    choices: ['Apple', 'Samsung', 'Motorola', 'Nokia'],
    correct: 'IBM'
},
{
    hasContent: false,
    quest: 'What does the term "OS" stand for in the context of smartphones?',
    choices: ['Operating System', 'Optical Sensor', 'Online Service', 'Output Sound'],
    correct: 'Operating System'
},
{
    hasContent: false,
    quest: 'Which smartphone feature allows users to unlock their devices using their fingerprints?',
    choices: ['Face Recognition', 'Iris Scanner', 'Fingerprint Scanner', 'Voice Recognition'],
    correct: 'Fingerprint Scanner'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Dual SIM" in smartphones.',
    content: 'Dual SIM functionality allows a smartphone to support two SIM cards simultaneously. Users can have two phone numbers on a single device, which is useful for managing personal and business contacts or using different mobile carriers.',
    choices: ['Triple SIM', 'SIM Swap', 'eSIM', 'SIM Card Adapter'],
    correct: 'eSIM'
},
{
    hasContent: false,
    quest: 'Which smartphone operating system is developed by Google?',
    choices: ['iOS', 'Windows Phone', 'Android', 'BlackBerry'],
    correct: 'Android'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Wireless Charging" in smartphones.',
    content: 'Wireless charging allows smartphones to be charged without the need for physical cables. It involves placing the device on a charging pad or stand that uses electromagnetic fields to transfer energy to the phone\'s battery.',
    choices: ['Fast Charging', 'USB-C Charging', 'Inductive Charging', 'Solar Charging'],
    correct: 'Inductive Charging'
},
{
    hasContent: false,
    quest: 'What is the term for the high-speed mobile data network that succeeded 3G?',
    choices: ['4G', '2G', 'LTE', '5G'],
    correct: '4G'
},
{
    hasContent: false,
    quest: 'Which smartphone company uses the slogan "Designed by Apple in California"?',
    choices: ['Samsung', 'Google', 'Huawei', 'Apple'],
    correct: 'Apple'
},
{
    hasContent: false,
    quest: 'What is the term for the small programs that enhance the functionality of smartphones?',
    choices: ['Widgets', 'Apps', 'Extensions', 'Plugins'],
    correct: 'Apps'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Augmented Reality (AR)" in smartphones.',
    content: 'Augmented Reality enhances the real-world environment by overlaying digital information, such as graphics, text, or 3D models, onto the user's view through the smartphone's camera. AR apps provide interactive and immersive experiences.',
    choices: ['Virtual Reality (VR)', 'Mixed Reality (MR)', 'Holographic Display', 'AR Emoji'],
    correct: 'Mixed Reality (MR)'
},
{
    hasContent: false,
    quest: 'Which smartphone feature allows users to take high-quality photos in low-light conditions?',
    choices: ['Dual Camera', 'Portrait Mode', 'Night Mode', 'HDR'],
    correct: 'Night Mode'
},
{
    hasContent: false,
    quest: 'What is the term for the device that amplifies the sound output of a smartphone?',
    choices: ['Speaker', 'Headphones', 'Amplifier', 'Earbuds'],
    correct: 'Speaker'
},
{
    hasContent: true,
    quest: 'Explain the concept of "IP Rating" in smartphones.',
    content: 'IP Rating (Ingress Protection) indicates a smartphone\'s resistance to dust and water. The rating consists of two digits, where the first represents dust resistance on a scale from 0 to 6, and the second represents water resistance on a scale from 0 to 9.',
    choices: ['Waterproof Certification', 'Drop Protection', 'Scratch Resistance', 'Shockproof Design'],
    correct: 'Waterproof Certification'
},
{
    hasContent: false,
    quest: 'Which smartphone feature provides a secure and convenient way to make payments?',
    choices: ['NFC', 'Bluetooth', 'Wi-Fi', 'Infrared'],
    correct: 'NFC'
},
{
    hasContent: false,
    quest: 'What is the term for the high-speed mobile data network that succeeded 4G?',
    choices: ['3G', '5G', 'LTE-A', 'Wi-Fi 6'],
    correct: '5G'
},
{
    hasContent: false,
    quest: 'Which smartphone company uses the slogan "The Next Big Thing"?',
    choices: ['Apple', 'Google', 'Samsung', 'OnePlus'],
    correct: 'Samsung'
},
{
    hasContent: true,
    quest: 'Explain the concept of "OLED Display" in smartphones.',
    content: 'OLED (Organic Light-Emitting Diode) displays use organic compounds to emit light when an electric current is applied. They provide vibrant colors, deep blacks, and high contrast ratios, offering an improved visual experience compared to traditional LCD screens.',
    choices: ['AMOLED Display', 'Retina Display', 'Super Retina XDR', 'IPS LCD'],
    correct: 'AMOLED Display'
},
{
    hasContent: false,
    quest: 'Which smartphone feature enhances the security of the device by scanning the user\'s unique facial features?',
    choices: ['Fingerprint Scanner', 'Retina Scanner', 'Iris Scanner', 'Face Recognition'],
    correct: 'Face Recognition'
},
{
    hasContent: true,
    quest: 'Explain the concept of "USB-C" in smartphones.',
    content: 'USB-C is a universal connectivity standard for smartphones, providing a reversible and versatile USB connection. It supports faster data transfer, higher power delivery, and compatibility with various devices through a single compact port.',
    choices: ['Micro USB', 'Lightning Connector', 'USB 3.0', 'Thunderbolt'],
    correct: 'Micro USB'
},
{
    hasContent: false,
    quest: 'What is the term for the protective glass covering the front of a smartphone?',
    choices: ['Gorilla Glass', 'Sapphire Glass', 'Tempered Glass', 'Dragontrail Glass'],
    correct: 'Gorilla Glass'
},
{
    hasContent: false,
    quest: 'Which computer pioneer is often referred to as the "father of modern computers"?',
    choices: ['Bill Gates', 'Alan Turing', 'Charles Babbage', 'Ada Lovelace'],
    correct: 'Charles Babbage'
},
{
    hasContent: false,
    quest: 'What does the acronym "CPU" stand for in the context of computers?',
    choices: ['Computer Processing Unit', 'Central Processing Unit', 'Central Programming Unit', 'Control Processing Unit'],
    correct: 'Central Processing Unit'
},
{
    hasContent: false,
    quest: 'Which programming language was created by James Gosling and Mike Sheridan at Sun Microsystems in 1995?',
    choices: ['Java', 'Python', 'C++', 'Ruby'],
    correct: 'Java'
},
{
    hasContent: true,
    quest: 'Explain the concept of "RAM" in computers.',
    content: 'RAM (Random Access Memory) is a type of computer memory that provides fast and temporary storage for running programs and data. It allows quick access to information but loses its content when the computer is powered off.',
    choices: ['ROM', 'Cache Memory', 'Virtual Memory', 'Hard Disk Drive'],
    correct: 'Cache Memory'
},
{
    hasContent: false,
    quest: 'Which computer company was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976?',
    choices: ['Microsoft', 'IBM', 'Apple', 'Dell'],
    correct: 'Apple'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Operating System" in computers.',
    content: 'An Operating System (OS) is software that manages computer hardware and provides services for computer programs. It acts as an intermediary between users and the computer hardware, facilitating tasks such as file management, memory allocation, and process control.',
    choices: ['Utility Software', 'Application Software', 'Kernel', 'BIOS'],
    correct: 'Kernel'
},
{
    hasContent: false,
    quest: 'What is the term for a malicious software that disrupts normal computer functions or gathers sensitive information?',
    choices: ['Firewall', 'Virus', 'Spam', 'Trojan Horse'],
    correct: 'Virus'
},
{
    hasContent: false,
    quest: 'Which computer component is responsible for storing data permanently?',
    choices: ['RAM', 'Cache Memory', 'Hard Disk Drive', 'CPU'],
    correct: 'Hard Disk Drive'
},
{
    hasContent: false,
    quest: 'What is the term for the physical circuitry that makes up a computer system?',
    choices: ['Software', 'Firmware', 'Hardware', 'Middleware'],
    correct: 'Hardware'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Binary Code" in computers.',
    content: 'Binary code is the representation of text, computer processor instructions, or other data using the binary numeral system, which uses only two digits: 0 and 1. It is the fundamental language of computers, allowing them to process and store information.',
    choices: ['Octal Code', 'Hexadecimal Code', 'ASCII Code', 'Unicode'],
    correct: 'ASCII Code'
},
{
    hasContent: false,
    quest: 'Which computer scientist and mathematician is considered the "father of the World Wide Web"?',
    choices: ['Tim Berners-Lee', 'Vint Cerf', 'Alan Turing', 'Larry Page'],
    correct: 'Tim Berners-Lee'
},
{
    hasContent: false,
    quest: 'What is the term for a collection of interconnected networks, forming a global network of computers?',
    choices: ['Internet', 'Intranet', 'LAN', 'WAN'],
    correct: 'Internet'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Firewall" in computers.',
    content: 'A firewall is a security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks, preventing unauthorized access and potential cyber threats.',
    choices: ['Antivirus Software', 'Encryption', 'Proxy Server', 'Network Address Translation (NAT)'],
    correct: 'Proxy Server'
},
{
    hasContent: false,
    quest: 'What is the term for a program or set of instructions that performs a specific task on a computer?',
    choices: ['Operating System', 'Software', 'Algorithm', 'Compiler'],
    correct: 'Software'
},
{
    hasContent: false,
    quest: 'Which computer peripheral is used to input data by pointing and clicking?',
    choices: ['Monitor', 'Keyboard', 'Mouse', 'Printer'],
    correct: 'Mouse'
},
{
    hasContent: false,
    quest: 'What is the term for a small program that performs a specific task and is designed to run within a larger application?',
    choices: ['Driver', 'Application Software', 'Utility Software', 'Widget'],
    correct: 'Widget'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Cloud Computing" in computers.',
    content: 'Cloud Computing refers to the delivery of computing services, including storage, processing power, and software, over the internet. Users can access and use these resources remotely, eliminating the need for physical infrastructure and allowing scalability and flexibility.',
    choices: ['Virtualization', 'Grid Computing', 'Edge Computing', 'Infrastructure as a Service (IaaS)'],
    correct: 'Infrastructure as a Service (IaaS)'
},
{
    hasContent: false,
    quest: 'What is the term for a computer program designed to replicate itself and spread to other computers?',
    choices: ['Spyware', 'Malware', 'Worm', 'Phishing'],
    correct: 'Worm'
},
{
    hasContent: true,
    quest: 'Explain the concept of "CPU Cache" in computers.',
    content: 'CPU Cache is a small-sized type of volatile computer memory that provides high-speed data access to a processor and stores frequently used computer programs, applications, and data. It helps reduce the average time to access data from the main memory, improving overall system performance.',
    choices: ['Disk Cache', 'L1 Cache', 'Page Cache', 'Swap Space'],
    correct: 'L1 Cache'
},
{
    hasContent: false,
    quest: 'Which computer scientist developed the programming language known as C?',
    choices: ['Bill Gates', 'Dennis Ritchie', 'Alan Turing', 'Ada Lovelace'],
    correct: 'Dennis Ritchie'
},
{
    hasContent: false,
    quest: 'Who is credited with introducing the concept of blockchain through the creation of Bitcoin?',
    choices: ['Vitalik Buterin', 'Satoshi Nakamoto', 'Charlie Lee', 'Gavin Andresen'],
    correct: 'Satoshi Nakamoto'
},
{
    hasContent: false,
    quest: 'What is the primary purpose of a blockchain?',
    choices: ['Decentralization', 'Centralization', 'Censorship', 'Monopoly'],
    correct: 'Decentralization'
},
{
    hasContent: false,
    quest: 'In a blockchain, what is a "block"?',
    choices: ['A unit of cryptocurrency', 'A sequence of transactions', 'A decentralized application', 'A cryptographic key'],
    correct: 'A sequence of transactions'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Decentralized Consensus" in blockchain.',
    content: 'Decentralized Consensus is the mechanism through which all nodes in a blockchain network agree on the validity of transactions without the need for a central authority. It ensures that the distributed ledger is consistent and secure.',
    choices: ['Proof of Work', 'Consensus Algorithm', 'Smart Contracts', 'Double Spending'],
    correct: 'Proof of Work'
},
{
    hasContent: false,
    quest: 'Which term describes the process of adding a new block to a blockchain?',
    choices: ['Mining', 'Forging', 'Smelting', 'Quarrying'],
    correct: 'Mining'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Smart Contracts" in blockchain.',
    content: 'Smart Contracts are self-executing contracts with the terms directly written into code. They automatically execute and enforce the terms of an agreement when predefined conditions are met, eliminating the need for intermediaries.',
    choices: ['Decentralized Autonomous Organization (DAO)', 'Distributed Ledger', 'Cryptographic Hash', 'Merkle Tree'],
    correct: 'Decentralized Autonomous Organization (DAO)'
},
{
    hasContent: false,
    quest: 'Which consensus algorithm is commonly associated with Ethereum 2.0?',
    choices: ['Proof of Work (PoW)', 'Delegated Proof of Stake (DPoS)', 'Proof of Authority (PoA)', 'Proof of Stake (PoS)'],
    correct: 'Proof of Stake (PoS)'
},
{
    hasContent: false,
    quest: 'What is the term for the process of verifying transactions on a blockchain network?',
    choices: ['Consensus', 'Mining', 'Validation', 'Confirmation'],
    correct: 'Validation'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Public Key Cryptography" in blockchain.',
    content: 'Public Key Cryptography involves the use of a pair of cryptographic keys: a public key, which is shared openly, and a private key, which is kept secret. It provides secure communication and ensures the integrity and authenticity of data on the blockchain.',
    choices: ['Elliptic Curve Cryptography (ECC)', 'RSA Algorithm', 'Symmetric Encryption', 'Asymmetric Encryption'],
    correct: 'Asymmetric Encryption'
},
{
    hasContent: false,
    quest: 'Which term describes the process of an individual or group controlling more than 51% of a blockchain network?',
    choices: ['Decentralization', 'Double Spending', '51% Attack', 'Consensus'],
    correct: '51% Attack'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Immutable Ledger" in blockchain.',
    content: 'An Immutable Ledger is a key characteristic of blockchain, indicating that once data is recorded on the blockchain, it cannot be altered or deleted. This ensures the integrity and permanence of recorded transactions.',
    choices: ['Mutable Ledger', 'Tamper-Proof', 'Censorship-Resistant', 'Dynamic Ledger'],
    correct: 'Tamper-Proof'
},
{
    hasContent: false,
    quest: 'What is the term for the process of converting information into a fixed-size string of characters?',
    choices: ['Hash Function', 'Encryption', 'Decryption', 'Compression'],
    correct: 'Hash Function'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Fork" in blockchain.',
    content: 'A Fork in blockchain refers to a split or divergence in the blockchain's protocol. It can be a result of a software update or a disagreement among network participants. Forks can be classified as soft forks or hard forks.',
    choices: ['Hard Fork', 'Merge Mining', 'Consensus Upgrade', 'Segregated Witness (SegWit)'],
    correct: 'Soft Fork'
},
{
    hasContent: false,
    quest: 'Which blockchain network introduced the concept of "Gas"?',
    choices: ['Bitcoin', 'Ethereum', 'Ripple', 'Litecoin'],
    correct: 'Ethereum'
},
{
    hasContent: false,
    quest: 'What is the term for a permissioned blockchain where participants must be invited to join?',
    choices: ['Public Blockchain', 'Hybrid Blockchain', 'Private Blockchain', 'Consortium Blockchain'],
    correct: 'Consortium Blockchain'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Double Spending" in blockchain.',
    content: 'Double Spending is a potential issue in digital currencies where the same cryptocurrency is spent more than once. Blockchain prevents double spending through consensus mechanisms like Proof of Work, which validates transactions and ensures they are unique.',
    choices: ['Transaction Malleability', '51% Attack', 'Sybil Attack', 'Front Running'],
    correct: 'Transaction Malleability'
},
{
    hasContent: false,
    quest: 'What is the term for a blockchain network designed for a specific use case or industry?',
    choices: ['Universal Blockchain', 'Industry Blockchain', 'Private Blockchain', 'Specialized Blockchain'],
    correct: 'Specialized Blockchain'
},
{
    hasContent: false,
    quest: 'Which cryptocurrency is known for its focus on privacy and anonymity?',
    choices: ['Bitcoin', 'Ethereum', 'Monero', 'Ripple'],
    correct: 'Monero'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Tokenization" in blockchain.',
    content: 'Tokenization is the process of converting rights to an asset into a digital token on a blockchain. These tokens can represent various assets, including real estate, stocks, or other forms of value, enabling fractional ownership and increased liquidity.',
    choices: ['ICO (Initial Coin Offering)', 'STO (Security Token Offering)', 'ERC-20 Token', 'NFT (Non-Fungible Token)'],
    correct: 'ERC-20 Token'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Consensus Algorithm" in blockchain.',
    content: 'A Consensus Algorithm is a set of rules and protocols used to achieve agreement among participants in a blockchain network. It ensures that all nodes in the network validate and agree on the state of the blockchain, preventing double spending and maintaining consistency.',
    choices: ['Byzantine Fault Tolerance (BFT)', 'Distributed Ledger', 'Atomic Swap', 'Hard Fork'],
    correct: 'Byzantine Fault Tolerance (BFT)'
},
{
    hasContent: false,
    quest: 'What is the primary characteristic of analog computers?',
    choices: ['Digital data representation', 'Quantum computing', 'Continuous data representation', 'Binary coding'],
    correct: 'Continuous data representation'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Analog Computing" and its applications.',
    content: 'Analog Computing processes continuous data using physical quantities, such as voltage or electrical currents, to represent information. It is well-suited for tasks like simulations, control systems, and scientific modeling due to its ability to handle real-world, continuous signals.',
    choices: ['Digital Signal Processing', 'Numerical Analysis', 'Finite Element Analysis', 'Machine Learning'],
    correct: 'Finite Element Analysis'
},
{
    hasContent: false,
    quest: 'Which scientist is credited with developing the first practical analog computer, known as the "Differential Analyzer," in the 1930s?',
    choices: ['Alan Turing', 'John von Neumann', 'Claude Shannon', 'Vannevar Bush'],
    correct: 'Vannevar Bush'
},
{
    hasContent: false,
    quest: 'What is the term for the process of solving mathematical problems through the simulation of physical phenomena using analog computers?',
    choices: ['Algorithmic Computing', 'Numerical Analysis', 'Physics Simulation', 'Quantum Computing'],
    correct: 'Physics Simulation'
},
{
    hasContent: true,
    quest: 'Explain the concept of the "Rebirth of Analog Computers" in modern times.',
    content: 'The rebirth of analog computers involves renewed interest in their applications, particularly in solving complex problems that benefit from parallel processing and continuous data representation. Researchers explore hybrid systems combining analog and digital components for improved computational efficiency.',
    choices: ['Neuromorphic Computing', 'Quantum Supremacy', 'Edge Computing', 'Cognitive Computing'],
    correct: 'Neuromorphic Computing'
},
{
    hasContent: false,
    quest: 'Which term describes the phenomenon where analog computers can potentially outperform digital computers in certain tasks?',
    choices: ['Digital Supremacy', 'Analog Advantage', 'Quantum Advantage', 'Moore\'s Law'],
    correct: 'Analog Advantage'
},
{
    hasContent: false,
    quest: 'What is the key advantage of analog computers in processing continuous signals?',
    choices: ['Precision', 'Versatility', 'Speed', 'Scalability'],
    correct: 'Speed'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Quantum Computing" and its potential advantages.',
    content: 'Quantum Computing leverages the principles of quantum mechanics to perform computations using quantum bits (qubits). It has the potential to solve complex problems exponentially faster than classical computers, making it suitable for tasks like factoring large numbers, optimization, and simulating quantum systems.',
    choices: ['Superposition', 'Entanglement', 'Quantum Tunneling', 'Quantum Encryption'],
    correct: 'Entanglement'
},
{
    hasContent: false,
    quest: 'Which quantum computing company is known for developing the D-Wave quantum annealing machines?',
    choices: ['IBM', 'Google', 'Microsoft', 'D-Wave Systems'],
    correct: 'D-Wave Systems'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Quantum Supremacy" in quantum computing.',
    content: 'Quantum Supremacy refers to the point where a quantum computer can perform a specific task more efficiently than the most advanced classical computers. It demonstrates the superiority of quantum computers in certain computational problems.',
    choices: ['Quantum Entanglement', 'Quantum Advantage', 'Quantum Error Correction', 'Quantum Teleportation'],
    correct: 'Quantum Advantage'
},
{
    hasContent: false,
    quest: 'What is the term for the process of correcting errors in quantum computers caused by decoherence and other quantum effects?',
    choices: ['Quantum Error Correction', 'Quantum Superposition', 'Quantum Teleportation', 'Quantum Encryption'],
    correct: 'Quantum Error Correction'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Quantum Entanglement" in quantum computing.',
    content: 'Quantum Entanglement is a phenomenon where two or more qubits become correlated and interdependent, regardless of the physical distance between them. Changes in the state of one qubit instantly affect the state of the entangled qubits, enabling powerful computational capabilities.',
    choices: ['Quantum Superposition', 'Quantum Tunneling', 'Quantum Teleportation', 'Quantum Interference'],
    correct: 'Quantum Teleportation'
},
{
    hasContent: false,
    quest: 'Which algorithm, proposed by Peter Shor, demonstrated the potential of quantum computers for efficiently factoring large numbers?',
    choices: ['Grover\'s Algorithm', 'Deutsch-Josza Algorithm', 'Shor\'s Algorithm', 'Simons Algorithm'],
    correct: 'Shor\'s Algorithm'
},
{
    hasContent: false,
    quest: 'What is the term for the smallest unit of quantum information in quantum computing?',
    choices: ['Quantum Byte', 'Quantum Bit (Qubit)', 'Quantum Megabit', 'Quantum Ternary'],
    correct: 'Quantum Bit (Qubit)'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Quantum Annealing" in quantum computing.',
    content: 'Quantum Annealing is a quantum computing approach that leverages quantum effects to find the global minimum of a complex problem's energy landscape. D-Wave Systems is a prominent company using this approach to solve optimization problems.',
    choices: ['Quantum Supremacy', 'Quantum Teleportation', 'Quantum Error Correction', 'Quantum Cryptography'],
    correct: 'Quantum Cryptography'
},
{
    hasContent: false,
    quest: 'Which quantum computing concept involves the use of multiple quantum bits to encode information?',
    choices: ['Quantum Tunneling', 'Quantum Entanglement', 'Quantum Superposition', 'Quantum Parallelism'],
    correct: 'Quantum Superposition'
},
{
    hasContent: true,
    quest: 'Explain the challenges associated with "Quantum Decoherence" in quantum computing.',
    content: 'Quantum Decoherence refers to the loss of coherence and stability in quantum systems, leading to errors in quantum computations. It poses a significant challenge in maintaining the delicate quantum states necessary for reliable quantum computing.',
    choices: ['Quantum Error Correction', 'Quantum Tunneling', 'Quantum Entanglement', 'Quantum Parallelism'],
    correct: 'Quantum Error Correction'
},
{
    hasContent: false,
    quest: 'What is the term for the hypothetical point in the future when quantum computers can perform tasks surpassing the capabilities of classical computers?',
    choices: ['Quantum Advantage', 'Quantum Leap', 'Quantum Singularity', 'Quantum Revolution'],
    correct: 'Quantum Revolution'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Quantum Parallelism" in quantum computing.',
    content: 'Quantum Parallelism allows quantum computers to process multiple possibilities simultaneously. Unlike classical computers, which perform sequential computations, quantum computers can explore multiple solutions in parallel, providing a potential speedup for certain algorithms.',
    choices: ['Quantum Entanglement', 'Quantum Supremacy', 'Quantum Tunneling', 'Quantum Cryptography'],
    correct: 'Quantum Cryptography'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Analog Quantum Computing" and its potential advantages.',
    content: 'Analog Quantum Computing combines the continuous data representation of analog computing with the principles of quantum mechanics. It aims to harness quantum effects for computation, offering potential advantages in solving optimization and simulation problems.',
    choices: ['Digital Quantum Computing', 'Quantum Superposition', 'Quantum Error Correction', 'Quantum Annealing'],
    correct: 'Digital Quantum Computing'
},
{
    hasContent: false,
    quest: 'Which type of headphones typically covers the entire ear and provides good noise isolation?',
    choices: ['In-Ear', 'On-Ear', 'Over-Ear', 'Earbuds'],
    correct: 'Over-Ear'
},
{
    hasContent: true,
    quest: 'Explain the term "Noise Cancellation" in headphones and its benefits.',
    content: 'Noise Cancellation is a technology that uses microphones to pick up external sounds and then generates sound waves to cancel them out. This helps in reducing ambient noise, providing a more immersive audio experience and better clarity during calls.',
    choices: ['Passive Noise Isolation', 'Active Noise Cancellation (ANC)', 'Soundstage', 'Bass Boost'],
    correct: 'Active Noise Cancellation (ANC)'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for connecting headphones to devices without the need for cables?',
    choices: ['Bluetooth', 'Wi-Fi', 'NFC', 'Infrared'],
    correct: 'Bluetooth'
},
{
    hasContent: true,
    quest: 'Explain the term "Frequency Response" in headphones and its significance.',
    content: 'Frequency Response refers to the range of frequencies a pair of headphones can reproduce. It is usually measured in Hertz (Hz). A wider frequency response generally indicates that headphones can produce a broader range of sounds, providing a more accurate and detailed audio experience.',
    choices: ['Impedance', 'Sensitivity', 'Treble', 'Bass'],
    correct: 'Treble'
},
{
    hasContent: false,
    quest: 'Which type of headphones are designed to fit snugly into the ear canal?',
    choices: ['Over-Ear', 'On-Ear', 'Earbuds', 'Bone Conduction'],
    correct: 'Earbuds'
},
{
    hasContent: true,
    quest: 'Explain the term "Impedance" in headphones and its impact on audio quality.',
    content: 'Impedance is the measure of opposition a pair of headphones presents to the electrical current flowing through them. Higher impedance headphones may require more power to achieve optimal performance. Matching the impedance with the device's output can improve audio quality.',
    choices: ['Frequency Response', 'Sensitivity', 'Bass Boost', 'Treble'],
    correct: 'Sensitivity'
},
{
    hasContent: false,
    quest: 'Which feature allows headphones to detect when they are being worn and automatically pause or play music accordingly?',
    choices: ['Touch Controls', 'Voice Assistant Integration', 'Auto-Pause/Auto-Play', 'Foldable Design'],
    correct: 'Auto-Pause/Auto-Play'
},
{
    hasContent: true,
    quest: 'Explain the term "Driver" in headphones and its role in sound production.',
    content: 'The Driver is the component in headphones responsible for converting electrical signals into sound. It consists of a diaphragm and a magnet and plays a crucial role in determining the headphone's sound quality. Different types of drivers can impact the overall audio characteristics.',
    choices: ['Noise Cancellation', 'Soundstage', 'Bass Boost', 'Treble'],
    correct: 'Soundstage'
},
{
    hasContent: false,
    quest: 'Which headphone type allows users to hear ambient sounds while wearing them?',
    choices: ['Closed-Back', 'Open-Back', 'Semi-Open', 'In-Ear Monitors'],
    correct: 'Open-Back'
},
{
    hasContent: true,
    quest: 'Explain the term "Sensitivity" in headphones and its importance.',
    content: 'Sensitivity is a measure of how efficiently headphones convert electrical signals into sound. Higher sensitivity headphones require less power to produce the same volume, making them suitable for portable devices with lower power output.',
    choices: ['Impedance', 'Frequency Response', 'Treble', 'Bass'],
    correct: 'Impedance'
},
{
    hasContent: false,
    quest: 'Which material is commonly used for the padding on over-ear headphones to provide comfort during extended use?',
    choices: ['Velvet', 'Leather', 'Memory Foam', 'Silicone'],
    correct: 'Memory Foam'
},
{
    hasContent: true,
    quest: 'Explain the term "Closed-Back" in headphones and its advantages.',
    content: 'Closed-Back headphones have a sealed design, isolating the listener from external noise and preventing sound leakage. This design is beneficial for immersive listening experiences and situations where privacy is important.',
    choices: ['Open-Back', 'Semi-Open', 'Noise Cancellation', 'Wireless Connectivity'],
    correct: 'Noise Cancellation'
},
{
    hasContent: false,
    quest: 'Which type of headphones transmits sound through vibrations in the bones of the face rather than through the air?',
    choices: ['Bone Conduction', 'In-Ear Monitors', 'Wireless Earbuds', 'Noise-Canceling'],
    correct: 'Bone Conduction'
},
{
    hasContent: true,
    quest: 'Explain the term "Passive Noise Isolation" in headphones and how it works.',
    content: 'Passive Noise Isolation relies on the physical design of headphones, such as ear cup padding and ear canal seals, to block out ambient noise. It doesn\'t involve electronic components and is effective in reducing external sounds passively.',
    choices: ['Active Noise Cancellation (ANC)', 'Soundstage', 'Bass Boost', 'Treble'],
    correct: 'Soundstage'
},
{
    hasContent: false,
    quest: 'Which feature allows headphones to be folded or collapsed for convenient storage and portability?',
    choices: ['Swivel Ear Cups', 'Auto-Pause/Auto-Play', 'Foldable Design', 'Touch Controls'],
    correct: 'Foldable Design'
},
{
    hasContent: true,
    quest: 'Explain the term "Wireless Charging" in headphones and its benefits.',
    content: 'Wireless Charging allows users to charge their headphones without using cables. Simply placing the headphones on a compatible charging pad or dock can initiate the charging process, providing convenience and reducing cable clutter.',
    choices: ['Fast Charging', 'USB-C Connectivity', 'Battery Life', 'Voice Assistant Integration'],
    correct: 'Battery Life'
},
{
    hasContent: false,
    quest: 'Which term describes the spatial dimension of sound reproduction in headphones?',
    choices: ['Bass Boost', 'Sensitivity', 'Soundstage', 'Noise Cancellation'],
    correct: 'Soundstage'
},
{
    hasContent: true,
    quest: 'Explain the term "Bluetooth Codec" in wireless headphones and its role in audio quality.',
    content: 'Bluetooth Codecs are compression algorithms used to transmit audio wirelessly between devices. Different codecs offer varying levels of audio quality and latency. Common Bluetooth codecs include SBC, AAC, aptX, and LDAC.',
    choices: ['Wireless Range', 'Noise Cancellation', 'Battery Life', 'Frequency Response'],
    correct: 'Frequency Response'
},
{
    hasContent: false,
    quest: 'Which headphone type is designed to sit on the outer ear without fully enclosing it?',
    choices: ['In-Ear Monitors', 'Closed-Back', 'On-Ear', 'Earbuds'],
    correct: 'On-Ear'
},
{
    hasContent: true,
    quest: 'Explain the term "Sound Signature" in headphones and its impact on audio perception.',
    content: 'Sound Signature refers to the unique tonal characteristics of headphones, including the emphasis on certain frequencies (bass, mids, treble). Different headphones may have a warm, neutral, or bright sound signature, catering to personal preferences.',
    choices: ['Bass Boost', 'Treble', 'Impedance', 'Noise Cancellation'],
    correct: 'Treble'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for short-range communication between devices such as smartphones and headphones?',
    choices: ['Wi-Fi', 'Bluetooth', 'NFC', '4G LTE'],
    correct: 'Bluetooth'
},
{
    hasContent: true,
    quest: 'Explain the term "Wi-Fi" and its primary purpose in wireless communication.',
    content: 'Wi-Fi, short for Wireless Fidelity, refers to a set of wireless communication standards that enable devices to connect to a local area network (LAN) and access the internet without physical cables. It is widely used in homes, businesses, and public spaces for wireless networking.',
    choices: ['Bluetooth', '3G', '4G LTE', 'NFC'],
    correct: 'Bluetooth'
},
{
    hasContent: false,
    quest: 'Which wireless technology is often used for contactless payments and data transfer by bringing devices close together?',
    choices: ['Bluetooth', 'Wi-Fi', 'NFC', '5G'],
    correct: 'NFC'
},
{
    hasContent: true,
    quest: 'Explain the term "5G" in wireless communication and its key features.',
    content: '5G, the fifth generation of wireless technology, brings faster data transfer speeds, lower latency, and increased capacity compared to its predecessors. It aims to support emerging technologies like the Internet of Things (IoT), augmented reality (AR), and autonomous vehicles.',
    choices: ['3G', '4G LTE', 'Bluetooth', 'Wi-Fi'],
    correct: '4G LTE'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for cellular communication, providing high-speed internet access on mobile devices?',
    choices: ['Bluetooth', 'Wi-Fi', '5G', '4G LTE'],
    correct: '4G LTE'
},
{
    hasContent: true,
    quest: 'Explain the term "Mesh Networking" in wireless communication and its advantages.',
    content: 'Mesh Networking involves a network of interconnected devices that work together to distribute data. Each device in the network, known as a node, helps relay data to other nodes, improving coverage and reducing the reliance on a central hub. This technology is beneficial for creating robust and scalable wireless networks.',
    choices: ['Bluetooth', 'Wi-Fi', 'NFC', '4G LTE'],
    correct: 'Bluetooth'
},
{
    hasContent: false,
    quest: 'Which wireless technology is known for its short-range communication and is commonly used for file sharing between devices?',
    choices: ['4G LTE', 'Bluetooth', 'Wi-Fi', 'NFC'],
    correct: 'Bluetooth'
},
{
    hasContent: true,
    quest: 'Explain the term "Latency" in wireless communication and its impact on user experience.',
    content: 'Latency refers to the time delay between sending a signal and receiving a response. In wireless communication, high latency can result in slower response times and affect the performance of real-time applications such as online gaming and video calls.',
    choices: ['Bandwidth', 'Jitter', 'Packet Loss', 'Signal Strength'],
    correct: 'Signal Strength'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for creating personal area networks (PANs) and connecting devices like laptops and smartphones?',
    choices: ['5G', 'Bluetooth', 'Wi-Fi', 'NFC'],
    correct: 'Bluetooth'
},
{
    hasContent: true,
    quest: 'Explain the term "Beamforming" in wireless communication and its benefits.',
    content: 'Beamforming is a technique that focuses wireless signals in a specific direction, improving the reliability and efficiency of communication between devices. It helps enhance signal strength, reduce interference, and extend the range of wireless networks.',
    choices: ['4G LTE', 'Bluetooth', 'Wi-Fi', 'NFC'],
    correct: 'Wi-Fi'
},
{
    hasContent: false,
    quest: 'Which wireless technology is designed for short-range communication between devices and is commonly used for wireless mice and keyboards?',
    choices: ['Wi-Fi', '5G', 'Bluetooth', 'NFC'],
    correct: 'Bluetooth'
},
{
    hasContent: true,
    quest: 'Explain the term "IoT" (Internet of Things) in the context of wireless technologies.',
    content: 'The Internet of Things (IoT) refers to the network of interconnected devices that can communicate and share data over the internet. Wireless technologies play a crucial role in enabling communication between IoT devices, allowing them to collect, exchange, and analyze information.',
    choices: ['Bluetooth', 'Wi-Fi', '5G', 'NFC'],
    correct: '4G LTE'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for connecting devices to the internet over longer distances, such as in homes and offices?',
    choices: ['Bluetooth', '5G', 'Wi-Fi', 'NFC'],
    correct: 'Wi-Fi'
},
{
    hasContent: true,
    quest: 'Explain the term "Frequency Bands" in wireless communication and their significance.',
    content: 'Frequency Bands represent the range of frequencies allocated for wireless communication. Different frequency bands have varying characteristics, such as coverage area and data transfer speeds. Understanding frequency bands is crucial for optimizing wireless networks and minimizing interference.',
    choices: ['4G LTE', 'Bluetooth', 'NFC', 'Wi-Fi'],
    correct: '4G LTE'
},
{
    hasContent: false,
    quest: 'Which wireless technology allows devices to connect seamlessly and securely without manual configuration?',
    choices: ['Wi-Fi', 'Bluetooth', 'NFC', '5G'],
    correct: 'Wi-Fi'
},
{
    hasContent: false,
    quest: 'Which technology enhances the real-world environment with digital elements, providing an interactive experience?',
    choices: ['Virtual Reality (VR)', 'Mixed Reality (MR)', 'Augmented Reality (AR)', 'Simulated Reality'],
    correct: 'Augmented Reality (AR)'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Virtual Reality (VR)" and its key characteristics.',
    content: 'Virtual Reality (VR) immerses users in a simulated environment, isolating them from the real world. It often involves the use of headsets to create a fully immersive experience, allowing users to interact with and explore the virtual environment.',
    choices: ['Augmented Reality (AR)', 'Mixed Reality (MR)', 'Simulated Reality', 'Holographic Reality'],
    correct: 'Augmented Reality (AR)'
},
{
    hasContent: false,
    quest: 'Which technology creates a completely digital environment that users can interact with and explore?',
    choices: ['Augmented Reality (AR)', 'Mixed Reality (MR)', 'Virtual Reality (VR)', 'Simulated Reality'],
    correct: 'Virtual Reality (VR)'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Augmented Reality (AR)" and its applications.',
    content: 'Augmented Reality (AR) overlays digital information onto the real-world environment, enhancing the user\'s perception of reality. AR can be experienced through smartphones, tablets, AR glasses, or other devices, offering applications in gaming, education, navigation, and more.',
    choices: ['Virtual Reality (VR)', 'Mixed Reality (MR)', 'Simulated Reality', 'Holographic Reality'],
    correct: 'Virtual Reality (VR)'
},
{
    hasContent: false,
    quest: 'Which technology combines elements of both the real and virtual worlds, allowing interaction with both environments?',
    choices: ['Virtual Reality (VR)', 'Augmented Reality (AR)', 'Mixed Reality (MR)', 'Simulated Reality'],
    correct: 'Mixed Reality (MR)'
},
{
    hasContent: true,
    quest: 'Explain the term "Immersive Experience" in the context of AR and VR.',
    content: 'An Immersive Experience refers to the sense of presence and engagement felt by users in virtual or augmented environments. It involves creating a convincing and captivating experience that fully engages the user\'s senses, often through realistic visuals, spatial audio, and interactive elements.',
    choices: ['Holographic Reality', 'Simulated Reality', 'Augmented Reality (AR)', 'Mixed Reality (MR)'],
    correct: 'Virtual Reality (VR)'
},
{
    hasContent: false,
    quest: 'Which term describes a technology that simulates physical presence in a virtual or augmented environment?',
    choices: ['Spatial Computing', 'Immersive Experience', 'Simulated Reality', 'Holographic Reality'],
    correct: 'Immersive Experience'
},
{
    hasContent: true,
    quest: 'Explain the term "Spatial Computing" and its role in AR and VR.',
    content: 'Spatial Computing involves the use of computer algorithms to understand and interact with the spatial environment. In AR and VR, spatial computing enables realistic positioning of virtual objects in relation to the user and the physical world, enhancing the overall experience.',
    choices: ['Holographic Reality', 'Simulated Reality', 'Virtual Reality (VR)', 'Mixed Reality (MR)'],
    correct: 'Mixed Reality (MR)'
},
{
    hasContent: false,
    quest: 'Which technology creates a simulated reality that mimics the physical world and its laws?',
    choices: ['Augmented Reality (AR)', 'Mixed Reality (MR)', 'Simulated Reality', 'Virtual Reality (VR)'],
    correct: 'Simulated Reality'
},
{
    hasContent: true,
    quest: 'Explain the term "Holographic Reality" and its potential applications.',
    content: 'Holographic Reality involves the projection of holograms into the real-world environment. This technology goes beyond traditional AR by creating three-dimensional holographic images that users can interact with. Potential applications include holographic displays, telepresence, and advanced visualization.',
    choices: ['Virtual Reality (VR)', 'Mixed Reality (MR)', 'Simulated Reality', 'Augmented Reality (AR)'],
    correct: 'Virtual Reality (VR)'
},
{
    hasContent: false,
    quest: 'Which term describes a simulated environment that replicates the physical world and its properties?',
    choices: ['Virtual Reality (VR)', 'Augmented Reality (AR)', 'Simulated Reality', 'Mixed Reality (MR)'],
    correct: 'Simulated Reality'
},
{
    hasContent: true,
    quest: 'Explain the term "Telepresence" in the context of AR and VR.',
    content: 'Telepresence involves using AR or VR technologies to provide users with the sensation of being present in a remote or virtual location. It enables users to interact with distant environments or individuals as if they were physically there, offering applications in remote collaboration, education, and exploration.',
    choices: ['Holographic Reality', 'Immersive Experience', 'Simulated Reality', 'Mixed Reality (MR)'],
    correct: 'Augmented Reality (AR)'
},
{
    hasContent: false,
    quest: 'Which technology merges digital information with the physical world in real-time?',
    choices: ['Virtual Reality (VR)', 'Mixed Reality (MR)', 'Simulated Reality', 'Augmented Reality (AR)'],
    correct: 'Augmented Reality (AR)'
},
{
    hasContent: true,
    quest: 'Explain the term "Cybersickness" and its association with AR and VR experiences.',
    content: 'Cybersickness, similar to motion sickness, refers to the discomfort or nausea experienced by some users during extended AR or VR sessions. It can result from a discrepancy between the user\'s visual perception and the motion or lack of motion in the physical environment.',
    choices: ['Simulated Reality', 'Holographic Reality', 'Immersive Experience', 'Mixed Reality (MR)'],
    correct: 'Virtual Reality (VR)'
},
{
    hasContent: false,
    quest: 'Which term describes a technology that overlays digital information onto the physical world, enhancing real-world perception?',
    choices: ['Simulated Reality', 'Mixed Reality (MR)', 'Holographic Reality', 'Augmented Reality (AR)'],
    correct: 'Augmented Reality (AR)'
},
{
    hasContent: true,
    quest: 'Explain the term "Field of View (FOV)" in AR and VR devices and its impact on user experience.',
    content: 'Field of View (FOV) refers to the extent of the visible environment that a user can see through an AR or VR device. A wider FOV enhances immersion by providing a more expansive view, while a narrower FOV may limit the sense of presence in the virtual or augmented space.',
    choices: ['Holographic Reality', 'Immersive Experience', 'Simulated Reality', 'Mixed Reality (MR)'],
    correct: 'Mixed Reality (MR)'
},
{
    hasContent: false,
    quest: 'Which technology seamlessly integrates digital and physical elements into the user\'s natural environment?',
    choices: ['Simulated Reality', 'Mixed Reality (MR)', 'Holographic Reality', 'Augmented Reality (AR)'],
    correct: 'Mixed Reality (MR)'
},
{
    hasContent: true,
    quest: 'Explain the term "Gesture Recognition" in AR and VR and its role in user interaction.',
    content: 'Gesture Recognition involves using sensors and algorithms to interpret and respond to users\' hand movements and gestures in AR and VR environments. This technology enables intuitive interaction with digital elements, allowing users to control applications and manipulate virtual objects.',
    choices: ['Virtual Reality (VR)', 'Mixed Reality (MR)', 'Holographic Reality', 'Simulated Reality'],
    correct: 'Augmented Reality (AR)'
},
{
    hasContent: false,
    quest: 'Which term describes an artificial environment created with computer-generated imagery, sounds, and sensations?',
    choices: ['Virtual Reality (VR)', 'Augmented Reality (AR)', 'Mixed Reality (MR)', 'Holographic Reality'],
    correct: 'Virtual Reality (VR)'
},
{
    hasContent: true,
    quest: 'Explain the term "Simulated Reality" and its potential applications.',
    content: 'Simulated Reality involves creating a computer-generated environment that simulates reality, often incorporating elements of both the physical and virtual worlds. Applications include virtual simulations, training scenarios, and environments that replicate real-world conditions for analysis or entertainment.',
    choices: ['Holographic Reality', 'Augmented Reality (AR)', 'Mixed Reality (MR)', 'Immersive Experience'],
    correct: 'Virtual Reality (VR)'
}
]
const gameQuestions = [{
    hasContent: false,
    quest: 'In chess, how many squares are there on the entire board?',
    choices: ['64', '72', '56', '48'],
    correct: '64'
},
{
    hasContent: true,
    quest: 'Explain the term "En Passant" in chess and when it can be applied.',
    content: 'En Passant is a special pawn capture that occurs when a pawn advances two squares from its starting position and lands beside an opponent\'s pawn. The opponent has the option to capture the pawn as if it had moved only one square forward. This capture must be made immediately after the double-square move.',
    choices: ['Stalemate', 'Fork', 'Castling', 'Zwischenzug'],
    correct: 'Fork'
},
{
    hasContent: false,
    quest: 'How does a pawn move in its first turn in chess?',
    choices: ['One square forward', 'Two squares forward', 'Diagonally', 'L-shaped'],
    correct: 'Two squares forward'
},
{
    hasContent: true,
    quest: 'Explain the term "Checkmate" in chess and how it leads to the end of the game.',
    content: 'Checkmate occurs when the king is in a position to be captured (in check), and there is no legal move that the player can make to escape capture. The game ends immediately, and the player delivering the checkmate wins.',
    choices: ['Stalemate', 'Draw', 'Zwischenzug', 'Perpetual Check'],
    correct: 'Stalemate'
},
{
    hasContent: false,
    quest: 'Which chess piece can move any number of squares vertically or horizontally but not diagonally?',
    choices: ['Knight', 'Bishop', 'Rook', 'Queen'],
    correct: 'Rook'
},
{
    hasContent: true,
    quest: 'What is the purpose of the chess move "Castling"?',
    content: 'Castling is a move involving the king and one of the rooks. The king moves two squares toward the rook, and the rook moves to the square next to the king on the opposite side. Castling is subject to specific conditions: neither piece has moved before, there are no pieces between them, and the king is not in check.',
    choices: ['Zwischenzug', 'En Passant', 'Stalemate', 'Fianchetto'],
    correct: 'Castling'
},
{
    hasContent: false,
    quest: 'Which chess piece can move in an L-shaped pattern?',
    choices: ['Rook', 'Pawn', 'Knight', 'Queen'],
    correct: 'Knight'
},
{
    hasContent: true,
    quest: 'Explain the term "Stalemate" in chess and how it results in a draw.',
    content: 'Stalemate occurs when a player has no legal moves to make, and their king is not in check. In this situation, the game is a draw, and neither player wins. Stalemate is a way for the player in a difficult position to escape defeat.',
    choices: ['Checkmate', 'Perpetual Check', 'Fork', 'Zwischenzug'],
    correct: 'Checkmate'
},
{
    hasContent: false,
    quest: 'Which chess piece has the ability to move diagonally any number of squares?',
    choices: ['Knight', 'Queen', 'Bishop', 'Pawn'],
    correct: 'Bishop'
},
{
    hasContent: true,
    quest: 'Explain the term "Fianchetto" in chess and its strategic significance.',
    content: 'Fianchetto is a pawn structure where a pawn is fianchettoed by moving to the second rank and allowing another pawn to be placed on the adjacent file. This creates a diagonal opening for the bishop on the fianchettoed side. Fianchettoed bishops often control long diagonals and contribute to strategic plans.',
    choices: ['Castling', 'Zwischenzug', 'Perpetual Check', 'En Passant'],
    correct: 'Fianchetto'
},
{
    hasContent: false,
    quest: 'What is the starting position of the king and queen on the chessboard?',
    choices: ['King on e1, Queen on d1', 'King on e8, Queen on d8', 'King on d1, Queen on e1', 'King on d8, Queen on e8'],
    correct: 'King on e1, Queen on d1'
},
{
    hasContent: true,
    quest: 'Explain the term "Perpetual Check" in chess and its impact on the game.',
    content: 'Perpetual Check occurs when a player continuously checks their opponent with no possibility of delivering checkmate. In such a situation, the game results in a draw. Perpetual Check is a strategic concept often used to secure a draw in challenging positions.',
    choices: ['Fianchetto', 'Zwischenzug', 'Stalemate', 'En Passant'],
    correct: 'Stalemate'
},
{
    hasContent: false,
    quest: 'How does a bishop move on the chessboard?',
    choices: ['Diagonally', 'Horizontally', 'Vertically', 'L-shaped'],
    correct: 'Diagonally'
},
{
    hasContent: true,
    quest: 'Explain the term "Zwischenzug" in chess and its tactical significance.',
    content: 'Zwischenzug, also known as an intermediate move or intermezzo, is a tactic where a player makes an unexpected in-between move before responding to the opponent's expected move. This can disrupt the opponent's plans and lead to a more advantageous position.',
    choices: ['Fork', 'Checkmate', 'Stalemate', 'En Passant'],
    correct: 'Zwischenzug'
},
{
    hasContent: false,
    quest: 'How does a knight move on the chessboard?',
    choices: ['Horizontally or vertically', 'Diagonally', 'In an L-shaped pattern', 'Any number of squares diagonally'],
    correct: 'In an L-shaped pattern'
},
{
    hasContent: true,
    quest: 'Explain the term "Pawn Promotion" in chess and the options available to a pawn upon reaching the eighth rank.',
    content: 'Pawn Promotion occurs when a pawn reaches the eighth rank. The player can choose to promote the pawn to any other piece (except a king), typically opting for a queen. This allows players to enhance their forces and contribute to their strategic goals.',
    choices: ['Fianchetto', 'Castling', 'En Passant', 'Stalemate'],
    correct: 'En Passant'
},
{
    hasContent: false,
    quest: 'Which chess piece can move in any direction horizontally, vertically, or diagonally?',
    choices: ['Rook', 'Knight', 'Pawn', 'King'],
    correct: 'Queen'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Chess Clock" and its role in timed chess games.',
    content: 'A Chess Clock is a timekeeping device used in chess games to ensure that each player has a fair and equal amount of time to make their moves. Players press a button on their turn, and their clock counts down while their opponent's clock counts up. If a player's time runs out, they lose the game.',
    choices: ['Zwischenzug', 'Perpetual Check', 'Stalemate', 'Fork'],
    correct: 'Stalemate'
},
{
    hasContent: false,
    quest: 'In chess, what term describes the situation where a player continuously checks their opponent with no possibility of delivering checkmate?',
    choices: ['Stalemate', 'Zwischenzug', 'Fork', 'Perpetual Check'],
    correct: 'Perpetual Check'
},
{
    hasContent: true,
    quest: 'Explain the term "Discovered Attack" in chess and provide an example.',
    content: 'A Discovered Attack occurs when a piece moves, revealing an attack by another piece previously blocked by the moving piece. For example, if a bishop moves, revealing an attack by a rook or queen behind it, it creates a discovered attack on the opponent\'s pieces.',
    choices: ['En Passant', 'Fianchetto', 'Castling', 'Pawn Promotion'],
    correct: 'En Passant'
},
{
    hasContent: false,
    quest: 'What is the primary focus of game theory?',
    choices: ['Probability', 'Decision-making', 'Strategic interactions', 'Algebraic structures'],
    correct: 'Strategic interactions'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Nash Equilibrium" in game theory.',
    content: 'Nash Equilibrium is a situation in a strategic interaction where each participant's strategy is optimal given the strategies chosen by others. In other words, no player can unilaterally change their strategy to achieve a better outcome.',
    choices: ['Pareto Efficiency', 'Dominant Strategy', 'Mixed Strategy', 'Perfect Information'],
    correct: 'Dominant Strategy'
},
{
    hasContent: false,
    quest: 'Which mathematician is often considered the father of game theory?',
    choices: ['John von Neumann', 'Leonhard Euler', 'Blaise Pascal', 'Isaac Newton'],
    correct: 'John von Neumann'
},
{
    hasContent: true,
    quest: 'Define the term "Payoff Matrix" in the context of game theory.',
    content: 'A Payoff Matrix is a table that shows the payoffs or outcomes for each combination of strategies chosen by two players in a game. It helps analyze and understand the possible outcomes and determine optimal strategies.',
    choices: ['Mixed Strategy', 'Sequential Game', 'Pareto Efficiency', 'Perfect Information'],
    correct: 'Mixed Strategy'
},
{
    hasContent: false,
    quest: 'What is the "Prisoner\'s Dilemma" in game theory?',
    choices: ['A zero-sum game', 'A cooperative game', 'A simultaneous game', 'A non-zero-sum game'],
    correct: 'A simultaneous game'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Pareto Efficiency" in the context of game theory.',
    content: 'Pareto Efficiency occurs when no participant can be made better off without making someone else worse off. It represents a situation where resources are allocated in the most efficient and optimal way, with no possibility for mutual improvement.',
    choices: ['Dominant Strategy', 'Mixed Strategy', 'Sequential Game', 'Perfect Information'],
    correct: 'Perfect Information'
},
{
    hasContent: false,
    quest: 'What is a "Zero-Sum Game" in game theory?',
    choices: ['A game with no winners', 'A game with only one winner', 'A game where one player\'s gain is equal to another\'s loss', 'A cooperative game'],
    correct: 'A game where one player\'s gain is equal to another\'s loss'
},
{
    hasContent: true,
    quest: 'Define the term "Dominant Strategy" in game theory and provide an example.',
    content: 'A Dominant Strategy is a strategy that yields the highest payoff for a player regardless of the choices made by other players. An example is a player always choosing to defect in the Prisoner\'s Dilemma, as it maximizes their individual payoff.',
    choices: ['Mixed Strategy', 'Sequential Game', 'Pareto Efficiency', 'Perfect Information'],
    correct: 'Dominant Strategy'
},
{
    hasContent: false,
    quest: 'What is a "Simultaneous Game" in game theory?',
    choices: ['A cooperative game', 'A sequential game', 'A game with perfect information', 'A game where players make decisions simultaneously'],
    correct: 'A game where players make decisions simultaneously'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Mixed Strategy" in game theory.',
    content: 'A Mixed Strategy occurs when a player randomly selects from multiple pure strategies according to specified probabilities. This introduces uncertainty and makes it challenging for opponents to predict the player\'s actions.',
    choices: ['Sequential Game', 'Pareto Efficiency', 'Perfect Information', 'Dominant Strategy'],
    correct: 'Mixed Strategy'
},
{
    hasContent: false,
    quest: 'What does the term "Perfect Information" mean in game theory?',
    choices: ['Players have complete information about the game', 'Players have no information about the game', 'Players make decisions simultaneously', 'Players follow dominant strategies'],
    correct: 'Players have complete information about the game'
},
{
    hasContent: true,
    quest: 'Explain the concept of a "Sequential Game" in game theory.',
    content: 'A Sequential Game is a game in which players make decisions in a specific order, with each player observing the actions of previous players before making their own choices. This type of game often involves strategic thinking and reactions.',
    choices: ['Dominant Strategy', 'Mixed Strategy', 'Pareto Efficiency', 'Perfect Information'],
    correct: 'Sequential Game'
},
{
    hasContent: false,
    quest: 'What is the primary goal of players in a cooperative game?',
    choices: ['Maximize individual payoffs', 'Minimize collective payoffs', 'Cooperate to achieve a common goal', 'Defect to gain individual advantage'],
    correct: 'Cooperate to achieve a common goal'
},
{
    hasContent: true,
    quest: 'Define the term "Nash Bargaining Solution" in game theory.',
    content: 'The Nash Bargaining Solution is a concept that predicts the outcome of a cooperative bargaining process. It suggests a fair division of resources where each participant receives a share that maximizes their utility, given their bargaining power.',
    choices: ['Zero-Sum Game', 'Pareto Efficiency', 'Perfect Information', 'Mixed Strategy'],
    correct: 'Pareto Efficiency'
},
{
    hasContent: false,
    quest: 'What is "Rationality" in the context of game theory?',
    choices: ['Making random decisions', 'Choosing optimal strategies', 'Acting irrationally', 'Ignoring opponents\' choices'],
    correct: 'Choosing optimal strategies'
},
{
    hasContent: true,
    quest: 'Explain the term "Cooperative Game" in game theory and provide an example.',
    content: 'A Cooperative Game is a game in which players can form coalitions and make binding agreements. The outcomes depend on the actions of the groups formed by players. An example is the bargaining process in labor negotiations.',
    choices: ['Simultaneous Game', 'Sequential Game', 'Dominant Strategy', 'Mixed Strategy'],
    correct: 'Cooperative Game'
},
{
    hasContent: false,
    quest: 'What is the "Folk Theorem" in game theory?',
    choices: ['A traditional game', 'A collection of popular strategies', 'A theorem proven by common beliefs', 'A set of results about repeated games'],
    correct: 'A set of results about repeated games'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Incomplete Information" in game theory.',
    content: 'Incomplete Information refers to a situation where players do not have complete knowledge about the game or their opponents. This uncertainty introduces complexity and influences decision-making strategies in the game.',
    choices: ['Zero-Sum Game', 'Pareto Efficiency', 'Perfect Information', 'Mixed Strategy'],
    correct: 'Perfect Information'
},
{
    hasContent: false,
    quest: 'What does the "Tragedy of the Commons" refer to in game theory?',
    choices: ['Overuse and depletion of shared resources', 'Successful cooperation among players', 'A strategy to maximize individual gains', 'Absence of competition in a game'],
    correct: 'Overuse and depletion of shared resources'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Repeated Game" in game theory and its strategic implications.',
    content: 'A Repeated Game is a game that is played multiple times between the same players. The possibility of future interactions can influence strategic choices, leading to cooperation or retaliation based on past actions.',
    choices: ['Dominant Strategy', 'Mixed Strategy', 'Sequential Game', 'Pareto Efficiency'],
    correct: 'Sequential Game'
},
{
    hasContent: false,
    quest: 'Who is the protagonist of Red Dead Redemption 2?',
    choices: ['John Marston', 'Arthur Morgan', 'Dutch van der Linde', 'Javier Escuella'],
    correct: 'Arthur Morgan'
},
{
    hasContent: true,
    quest: 'Describe the setting of Red Dead Redemption 2 and its time period.',
    content: 'Red Dead Redemption 2 is set in the late 1800s, during the decline of the Wild West. The game takes place in a fictional open-world environment, primarily in the American heartland.',
    choices: ['Early 1900s, New York', 'Mid-1800s, Texas', 'Late 1800s, American heartland', '1920s, California'],
    correct: 'Late 1800s, American heartland'
},
{
    hasContent: false,
    quest: 'Which gang does the player character, Arthur Morgan, belong to?',
    choices: ['O'Driscolls', 'Laramie', 'Van der Linde', 'Walton'],
    correct: 'Van der Linde'
},
{
    hasContent: true,
    quest: 'What is the name of the horse the player starts with in Red Dead Redemption 2?',
    content: 'At the beginning of the game, Arthur Morgan's horse is named "The Count."',
    choices: ['Buell', 'Silver Dollar', 'The Count', 'Shadowfax'],
    correct: 'The Count'
},
{
    hasContent: false,
    quest: 'Who is the charismatic leader of the Van der Linde gang?',
    choices: ['Micah Bell', 'Hosea Matthews', 'Dutch van der Linde', 'Sadie Adler'],
    correct: 'Dutch van der Linde'
},
{
    hasContent: true,
    quest: 'Explain the game mechanic of the "Honor" system in Red Dead Redemption 2.',
    content: 'The Honor system reflects Arthur Morgan\'s moral choices throughout the game. Positive actions, like helping strangers or sparing enemies, increase Honor, while negative actions, such as crime and violence, decrease it. Honor influences interactions and story outcomes.',
    choices: ['Infamy Points', 'Reputation Points', 'Honor Points', 'Morality Points'],
    correct: 'Honor Points'
},
{
    hasContent: false,
    quest: 'Which town serves as the main hub in Red Dead Redemption 2?',
    choices: ['Blackwater', 'Saint Denis', 'Valentine', 'Rhodes'],
    correct: 'Saint Denis'
},
{
    hasContent: true,
    quest: 'What is the primary goal of the Van der Linde gang in Red Dead Redemption 2?',
    content: 'The main goal of the Van der Linde gang is to survive and prosper as they navigate the changing landscapes of the Wild West. They seek refuge and conduct various heists to secure resources and funds.',
    choices: ['Seek revenge on O\'Driscolls', 'Claim territory in New Austin', 'Find treasure in Tall Trees', 'Survive and prosper in the changing West'],
    correct: 'Survive and prosper in the changing West'
},
{
    hasContent: false,
    quest: 'Which weapon does Arthur Morgan use as his primary sidearm?',
    choices: ['Schofield Revolver', 'Double-Action Revolver', 'Lancaster Repeater', 'Carbine Repeater'],
    correct: 'Schofield Revolver'
},
{
    hasContent: true,
    quest: 'Describe the dynamic weather system in Red Dead Redemption 2 and its impact on gameplay.',
    content: 'RDR2 features a dynamic weather system, including rain, snow, and storms. Weather affects Arthur and his surroundings. For example, rain can make mud, impacting movement and visibility, while snow can leave tracks. It also adds to the overall immersion of the game world.',
    choices: ['Static Weather', 'Dynamic Weather', 'Random Weather', 'Predictable Weather'],
    correct: 'Dynamic Weather'
},
{
    hasContent: false,
    quest: 'Which game studio developed "The Witcher 3: Wild Hunt"?',
    choices: ['Rockstar Games', 'CD Projekt', 'Ubisoft', 'Bethesda'],
    correct: 'CD Projekt'
},
{
    hasContent: true,
    quest: 'Describe the founding year and location of Naughty Dog, the studio behind the "Uncharted" series and "The Last of Us."',
    content: 'Naughty Dog was founded in 1984 in Santa Monica, California, USA.',
    choices: ['Founded in 1990, Tokyo', 'Founded in 1984, Santa Monica', 'Founded in 2001, London', 'Founded in 1995, Montreal'],
    correct: 'Founded in 1984, Santa Monica'
},
{
    hasContent: false,
    quest: 'Which game studio is known for the "Halo" series and "Destiny"?',
    choices: ['Bungie', '343 Industries', 'Bioware', 'Respawn Entertainment'],
    correct: 'Bungie'
},
{
    hasContent: true,
    quest: 'Explain the significance of Valve Corporation in the gaming industry and mention one of their prominent game titles.',
    content: 'Valve Corporation is renowned for its digital distribution platform, Steam, and the development of influential games like "Half-Life" and "Portal."',
    choices: ['Developed "Half-Life 3"', 'Created "Super Mario Bros."', 'Founded in 1998, Kyoto', 'Known for "Uncharted" series'],
    correct: 'Developed "Half-Life" and "Portal"'
},
{
    hasContent: false,
    quest: 'Which Japanese game studio is famous for creating the "Final Fantasy" series?',
    choices: ['Square Enix', 'Konami', 'Capcom', 'Sega'],
    correct: 'Square Enix'
},
{
    hasContent: true,
    quest: 'What is the origin of the game studio name "Bioware" and name one of their popular game franchises.',
    content: 'Bioware is a combination of "biological" and "ware," reflecting the studio\'s focus on storytelling and character development. One of their popular franchises is "Mass Effect."',
    choices: ['Named after founders', 'Acronym for game genres', 'Founded in 2005, Seattle', 'Known for "Assassin\'s Creed" series'],
    correct: 'Named after founders and known for "Mass Effect"'
},
{
    hasContent: false,
    quest: 'Which game studio is responsible for the "Grand Theft Auto" series?',
    choices: ['Ubisoft', 'Rockstar Games', 'Bethesda', 'Electronic Arts'],
    correct: 'Rockstar Games'
},
{
    hasContent: true,
    quest: 'Describe the founding year and location of Blizzard Entertainment, known for "World of Warcraft" and "Overwatch."',
    content: 'Blizzard Entertainment was founded in 1991 in Irvine, California, USA.',
    choices: ['Founded in 1991, Irvine', 'Founded in 1985, Tokyo', 'Founded in 2000, London', 'Founded in 1998, Montreal'],
    correct: 'Founded in 1991, Irvine'
},
{
    hasContent: false,
    quest: 'Which game studio developed the "Assassin\'s Creed" series?',
    choices: ['Square Enix', 'Ubisoft', 'Electronic Arts', 'Activision'],
    correct: 'Ubisoft'
},
{
    hasContent: true,
    quest: 'Explain the significance of the game studio Bethesda Softworks and mention one of their iconic game series.',
    content: 'Bethesda Softworks is known for creating expansive open-world RPGs, and one of their iconic game series is "The Elder Scrolls," featuring titles like "Skyrim."',
    choices: ['Founded in 1990, Tokyo', 'Known for "Call of Duty" series', 'Developed "Assassin\'s Creed"', 'Specialized in mobile games'],
    correct: 'Known for "The Elder Scrolls" series'
},
{
    hasContent: false,
    quest: 'Which game studio developed the "God of War" series?',
    choices: ['Naughty Dog', 'Santa Monica Studio', 'Capcom', 'Guerrilla Games'],
    correct: 'Santa Monica Studio'
},
{
    hasContent: true,
    quest: 'Describe the founding year and location of Rockstar Games, the studio behind "Red Dead Redemption" and "GTA" series.',
    content: 'Rockstar Games was founded in 1998 in New York City, USA.',
    choices: ['Founded in 1998, New York City', 'Founded in 1985, Tokyo', 'Founded in 2000, London', 'Founded in 1991, Irvine'],
    correct: 'Founded in 1998, New York City'
},
{
    hasContent: false,
    quest: 'Which game studio is known for creating the "Metal Gear Solid" series?',
    choices: ['Square Enix', 'Ubisoft', 'Blizzard Entertainment', 'Konami'],
    correct: 'Konami'
},
{
    hasContent: true,
quest: 'What is the origin of the game studio name "Ubisoft" and name one of their popular game franchises.',
    content: 'Ubisoft is a combination of "ubiquity" and "software," signifying the company\'s aspiration to produce software available everywhere. One of their popular franchises is "Assassin\'s Creed."',
    choices: ['Named after founders', 'Acronym for game genres', 'Founded in 2005, Seattle', 'Known for "Mass Effect" series'],
    correct: 'Named after founders and known for "Assassin\'s Creed"'
},
{
    hasContent: false,
    quest: 'Which game studio developed the "Dark Souls" series?',
    choices: ['FromSoftware', 'Capcom', 'Square Enix', 'Bethesda'],
    correct: 'FromSoftware'
},
{
    hasContent: true,
    quest: 'Explain the significance of the game studio Square Enix and mention one of their iconic game series.',
    content: 'Square Enix is a merger of Square and Enix, prominent Japanese game companies. They are known for iconic game series like "Final Fantasy" and "Dragon Quest."',
    choices: ['Founded in 1990, Tokyo', 'Known for "Call of Duty" series', 'Developed "Assassin\'s Creed"', 'Specialized in mobile games'],
    correct: 'Known for "Final Fantasy" and "Dragon Quest" series'
},
{
    hasContent: false,
    quest: 'Which game studio is responsible for the "Call of Duty" series?',
    choices: ['Activision', 'Electronic Arts', 'Respawn Entertainment', 'Bungie'],
    correct: 'Activision'
},
{
    hasContent: true,
    quest: 'Describe the founding year and location of Respawn Entertainment, known for "Apex Legends" and "Titanfall" series.',
    content: 'Respawn Entertainment was founded in 2010 in Los Angeles, California, USA.',
    choices: ['Founded in 2005, Tokyo', 'Founded in 2010, Los Angeles', 'Founded in 2000, London', 'Founded in 1998, Montreal'],
    correct: 'Founded in 2010, Los Angeles'
},
{
    hasContent: false,
    quest: 'Which game studio is known for creating the "BioShock" series?',
    choices: ['Ubisoft', 'Rockstar Games', 'CD Projekt', '2K Games'],
    correct: '2K Games'
},
{
    hasContent: true,
    quest: 'Explain the impact of Epic Games in the gaming industry and name one of their influential creations.',
    content: 'Epic Games is recognized for developing the Unreal Engine, a widely used game development platform. They also created the battle royale game "Fortnite," which gained immense popularity.',
    choices: ['Founded in 1990, Tokyo', 'Known for "Call of Duty" series', 'Developed "Assassin\'s Creed"', 'Specialized in mobile games'],
    correct: 'Known for Unreal Engine and created "Fortnite"'
},
{
    hasContent: false,
    quest: 'Which game is known for its blocky, pixelated graphics and allows players to build and explore their own virtual worlds?',
    choices: ['Minecraft', 'Fortnite', 'League of Legends', 'Overwatch'],
    correct: 'Minecraft'
},
{
    hasContent: true,
    quest: 'Describe the gameplay of "The Legend of Zelda: Breath of the Wild" and mention one unique feature of the game.',
    content: '"The Legend of Zelda: Breath of the Wild" is an action-adventure game with an open-world design. One unique feature is the ability to climb almost any surface in the game world.',
    choices: ['First-person shooter', 'Open-world action-adventure', 'Turn-based strategy', 'Racing simulation'],
    correct: 'Open-world action-adventure'
},
{
    hasContent: false,
    quest: 'Which game is a battle royale sensation, where 100 players fight to be the last one standing?',
    choices: ['Minecraft', 'Fortnite', 'League of Legends', 'Apex Legends'],
    correct: 'Fortnite'
},
{
    hasContent: true,
    quest: 'Explain the premise of "The Witcher 3: Wild Hunt" and the main character, Geralt of Rivia.',
    content: '"The Witcher 3: Wild Hunt" follows Geralt of Rivia, a monster hunter for hire, as he searches for his adopted daughter. The game features an expansive open world with rich storytelling and choices affecting the narrative.',
    choices: ['Sci-fi shooter', 'Horror survival', 'Fantasy RPG', 'Sports simulation'],
    correct: 'Fantasy RPG'
},
{
    hasContent: false,
    quest: 'Which game is a multiplayer online battle arena (MOBA) where two teams compete to destroy each other\'s main structures?',
    choices: ['Minecraft', 'Fortnite', 'League of Legends', 'Overwatch'],
    correct: 'League of Legends'
},
{
    hasContent: true,
    quest: 'Describe the setting of "Red Dead Redemption 2" and mention one notable aspect of its gameplay.',
    content: '"Red Dead Redemption 2" is set in the late 1800s, during the decline of the Wild West. A notable aspect is the realistic open-world environment, offering activities like hunting, fishing, and interacting with NPCs.',
    choices: ['First-person shooter', 'Open-world action-adventure', 'Turn-based strategy', 'Racing simulation'],
    correct: 'Open-world action-adventure'
},
{
    hasContent: false,
    quest: 'Which game is a team-based first-person shooter featuring a diverse cast of characters with unique abilities?',
    choices: ['Minecraft', 'Fortnite', 'League of Legends', 'Overwatch'],
    correct: 'Overwatch'
},
{
    hasContent: true,
    quest: 'Explain the concept of "Fortnite" and its impact on the gaming community.',
    content: '"Fortnite" is a battle royale game where players fight to be the last one standing. It gained immense popularity due to its free-to-play model, frequent updates, and cross-platform play.',
    choices: ['Sci-fi shooter', 'Horror survival', 'Fantasy RPG', 'Sports simulation'],
    correct: 'Battle royale game'
},
{
    hasContent: false,
    quest: 'Which game series is known for its intense and cinematic first-person shooter campaigns, often set in historical or modern warfare settings?',
    choices: ['Halo', 'Call of Duty', 'Battlefield', 'Destiny'],
    correct: 'Call of Duty'
},
{
    hasContent: true,
    quest: 'Describe the gameplay of "Apex Legends" and mention one unique feature of the game.',
    content: '"Apex Legends" is a battle royale game with unique character abilities. One feature is the introduction of respawn beacons, allowing teammates to bring back eliminated allies.',
    choices: ['First-person shooter', 'Open-world action-adventure', 'Turn-based strategy', 'Battle royale'],
    correct: 'Battle royale'
},
{
    hasContent: false,
    quest: 'Which game series is known for its sci-fi setting and features the iconic character Master Chief?',
    choices: ['Halo', 'Call of Duty', 'Destiny', 'Gears of War'],
    correct: 'Halo'
},
{
    hasContent: true,
    quest: 'Explain the narrative of "The Last of Us Part II" and mention one critical aspect of its gameplay.',
    content: '"The Last of Us Part II" continues the story of Ellie in a post-apocalyptic world. A critical aspect is the emotional and morally challenging narrative, along with refined stealth and combat mechanics.',
    choices: ['Sci-fi shooter', 'Horror survival', 'Action-adventure', 'Racing simulation'],
    correct: 'Action-adventure'
},
{
    hasContent: false,
    quest: 'Which game series is known for its cooperative gameplay, allowing players to explore dungeons, fight monsters, and complete quests together?',
    choices: ['World of Warcraft', 'Diablo', 'Final Fantasy', 'The Elder Scrolls'],
    correct: 'Diablo'
},
{
    hasContent: true,
    quest: 'Describe the game mechanics of "Cyberpunk 2077" and mention one notable feature of its open-world setting.',
    content: '"Cyberpunk 2077" features a first-person perspective and a dense, futuristic open world. A notable feature is the ability to customize the protagonist, V, with cybernetic enhancements and engage in branching narratives.',
    choices: ['First-person shooter', 'Open-world action-adventure', 'Turn-based strategy', 'Racing simulation'],
    correct: 'Open-world action-adventure'
},
{
    hasContent: false,
    quest: 'Which game series is known for its massive multiplayer online role-playing games (MMORPGs), allowing players to explore a fantasy world and complete quests?',
    choices: ['World of Warcraft', 'Diablo', 'Final Fantasy', 'The Elder Scrolls'],
    correct: 'World of Warcraft'
},
{
    hasContent: true,
    quest: 'Explain the gameplay mechanics of "Among Us" and mention one unique aspect of its social deduction gameplay.',
    content: '"Among Us" is a multiplayer party game where players work together to complete tasks on a spaceship. One unique aspect is the impostor mechanic, where players try to identify the hidden impostors among the crew.',
    choices: ['Social simulation', 'Puzzle platformer', 'Survival horror', 'Party game'],
    correct: 'Social deduction gameplay'
},
{
    hasContent: false,
    quest: 'Which game series is known for its space exploration and trading simulation, allowing players to explore a vast galaxy?',
    choices: ['Elite Dangerous', 'Star Wars: Battlefront', 'No Man\'s Sky', 'Star Citizen'],
    correct: 'Elite Dangerous'
},
{
    hasContent: true,
    quest: 'Describe the gameplay of "Monster Hunter: World" and mention one notable feature of its cooperative multiplayer mode.',
    content: '"Monster Hunter: World" is an action role-playing game where players hunt and defeat monsters. A notable feature is the drop-in cooperative multiplayer mode, allowing friends to join hunts seamlessly.',
    choices: ['Action-adventure', 'Turn-based strategy', 'Racing simulation', 'Cooperative multiplayer'],
    correct: 'Cooperative multiplayer'
},
{
    hasContent: false,
    quest: 'Which game series is known for its post-apocalyptic setting and survival horror elements, featuring mutated creatures and a lone protagonist?',
    choices: ['Metro', 'Fallout', 'The Last of Us', 'Resident Evil'],
    correct: 'Metro'
},
{
    hasContent: true,
    quest: 'Explain the premise of "Fallout" and mention one key aspect of its gameplay mechanics.',
    content: '"Fallout" is set in a post-apocalyptic world following a nuclear war. A key aspect is the use of the Vault-Tec Assisted Targeting System (V.A.T.S.), allowing players to target specific body parts during combat.',
    choices: ['Sci-fi shooter', 'Horror survival', 'Action RPG', 'Racing simulation'],
    correct: 'Action RPG'
}
]
const mathematicsQuestions = [ {
    hasContent: true,
    quest: 'What is the next number in the sequence: 2, 6, 12, 20, ...?',
    content: 'Find the pattern in the sequence and determine the next number.',
    choices: ['28', '30', '36', '40'],
    correct: '30'
},
{
    hasContent: false,
    quest: 'Multiply the following numbers: 7 x 9 = ?',
    choices: ['63', '56', '72', '81'],
    correct: '63'
},
{
    hasContent: true,
    quest: 'What is the missing number in the sequence: 5, 10, 20, 40, ...?',
    content: 'Identify the pattern and find the missing number.',
    choices: ['80', '100', '120', '160'],
    correct: '80'
},
{
    hasContent: false,
    quest: 'Subtract 15 from 47. What is the result?',
    choices: ['22', '30', '32', '42'],
    correct: '32'
},
{
    hasContent: true,
    quest: 'If A = 1, B = 2, C = 3, what is the value of the word "LOGIC"?',
    content: 'Assign each letter its respective numerical value and calculate the total.',
    choices: ['56', '63', '70', '76'],
    correct: '56'
},
{
    hasContent: false,
    quest: 'Divide 144 by 12. What is the quotient?',
    choices: ['8', '10', '12', '14'],
    correct: '12'
},
{
    hasContent: true,
    quest: 'What comes next in the series: 3, 6, 12, 24, ...?',
    content: 'Identify the pattern and determine the next number.',
    choices: ['36', '42', '48', '54'],
    correct: '48'
},
{
    hasContent: false,
    quest: 'Add 57 and 28. What is the sum?',
    choices: ['75', '85', '95', '105'],
    correct: '85'
},
{
    hasContent: true,
    quest: 'If the pattern is 2, 5, 10, 17, ..., what is the next number?',
    content: 'Identify the pattern and find the next number in the series.',
    choices: ['24', '26', '30', '34'],
    correct: '26'
},
{
    hasContent: false,
    quest: 'Find the square root of 144.',
    choices: ['10', '12', '14', '16'],
    correct: '12'
},
{
    hasContent: true,
    quest: 'If X + 7 = 15, what is the value of X?',
    content: 'Solve for the unknown variable in the equation.',
    choices: ['5', '8', '10', '12'],
    correct: '8'
},
{
    hasContent: false,
    quest: 'What is the product of 9 multiplied by 6?',
    choices: ['42', '48', '54', '56'],
    correct: '54'
},
{
    hasContent: true,
    quest: 'What is the missing number in the sequence: 2, 5, 10, 17, ...?',
    content: 'Identify the pattern and find the missing number.',
    choices: ['24', '26', '30', '34'],
    correct: '26'
},
{
    hasContent: false,
    quest: 'Subtract 28 from 50. What is the result?',
    choices: ['20', '22', '24', '26'],
    correct: '22'
},
{
    hasContent: true,
    quest: 'If Y - 15 = 7, what is the value of Y?',
    content: 'Solve for the unknown variable in the equation.',
    choices: ['12', '15', '18', '22'],
    correct: '22'
},
{
    hasContent: false,
    quest: 'Multiply 6 by 9. What is the product?',
    choices: ['45', '48', '54', '60'],
    correct: '54'
},
{
    hasContent: true,
    quest: 'What is the missing number in the sequence: 3, 9, 27, ...?',
    content: 'Identify the pattern and find the missing number.',
    choices: ['54', '63', '72', '81'],
    correct: '81'
},
{
    hasContent: false,
    quest: 'Divide 63 by 7. What is the quotient?',
    choices: ['7', '9', '11', '13'],
    correct: '9'
},
{
    hasContent: true,
    quest: 'If Z + 20 = 35, what is the value of Z?',
    content: 'Solve for the unknown variable in the equation.',
    choices: ['10', '12', '15', '18'],
    correct: '15'
},
{
    hasContent: false,
    quest: 'What is the result of subtracting 40 from 62?',
    choices: ['12', '18', '22', '28'],
    correct: '22'
},
{
    hasContent: true,
    quest: 'What is the next number in the sequence: 3, 9, 27, 81, ...?',
    content: 'Find the pattern in the sequence and determine the next number.',
    choices: ['162', '243', '324', '405'],
    correct: '243'
},
{
    hasContent: false,
    quest: 'Multiply the following numbers: 8 x 7 = ?',
    choices: ['48', '54', '56', '64'],
    correct: '56'
},
{
    hasContent: true,
    quest: 'What is the missing number in the sequence: 4, 8, 16, 32, ...?',
    content: 'Identify the pattern and find the missing number.',
    choices: ['48', '64', '72', '128'],
    correct: '64'
},
{
    hasContent: false,
    quest: 'Subtract 28 from 75. What is the result?',
    choices: ['42', '47', '49', '53'],
    correct: '47'
},
{
    hasContent: true,
    quest: 'If M = 13, N = 14, O = 15, what is the value of the word "LOGIC"?',
    content: 'Assign each letter its respective numerical value and calculate the total.',
    choices: ['54', '63', '72', '76'],
    correct: '54'
},
{
    hasContent: false,
    quest: 'Divide 144 by 12. What is the quotient?',
    choices: ['8', '10', '12', '14'],
    correct: '12'
},
{
    hasContent: true,
    quest: 'What comes next in the series: 5, 10, 20, 40, ...?',
    content: 'Identify the pattern and determine the next number.',
    choices: ['80', '100', '120', '160'],
    correct: '80'
},
{
    hasContent: false,
    quest: 'Add 63 and 19. What is the sum?',
    choices: ['75', '82', '91', '102'],
    correct: '82'
},
{
    hasContent: true,
    quest: 'If the pattern is 3, 7, 15, 31, ..., what is the next number?',
    content: 'Identify the pattern and find the next number in the series.',
    choices: ['45', '63', '74', '95'],
    correct: '63'
},
{
    hasContent: false,
    quest: 'Find the square root of 169.',
    choices: ['10', '12', '13', '14'],
    correct: '13'
},
{
    hasContent: true,
    quest: 'If P + 9 = 18, what is the value of P?',
    content: 'Solve for the unknown variable in the equation.',
    choices: ['7', '9', '12', '15'],
    correct: '9'
},
{
    hasContent: false,
    quest: 'What is the product of 7 multiplied by 8?',
    choices: ['42', '48', '54', '56'],
    correct: '56'
},
{
    hasContent: true,
    quest: 'What is the missing number in the sequence: 3, 9, 27, ...?',
    content: 'Identify the pattern and find the missing number.',
    choices: ['54', '63', '72', '81'],
    correct: '81'
},
{
    hasContent: false,
    quest: 'Subtract 32 from 60. What is the result?',
    choices: ['18', '22', '24', '28'],
    correct: '28'
},
{
    hasContent: true,
    quest: 'If Q - 12 = 7, what is the value of Q?',
    content: 'Solve for the unknown variable in the equation.',
    choices: ['12', '15', '18', '19'],
    correct: '19'
},
{
    hasContent: false,
    quest: 'Multiply 9 by 7. What is the product?',
    choices: ['56', '63', '72', '81'],
    correct: '63'
},
{
    hasContent: true,
    quest: 'What is the missing number in the sequence: 2, 4, 8, 16, ...?',
    content: 'Identify the pattern and find the missing number.',
    choices: ['24', '32', '48', '64'],
    correct: '32'
},
{
    hasContent: false,
    quest: 'Divide 81 by 9. What is the quotient?',
    choices: ['7', '9', '11', '13'],
    correct: '9'
},
{
    hasContent: true,
    quest: 'If R + 15 = 27, what is the value of R?',
    content: 'Solve for the unknown variable in the equation.',
    choices: ['7', '9', '12', '15'],
    correct: '12'
},
{
    hasContent: false,
    quest: 'What is the result of subtracting 42 from 70?',
    choices: ['18', '22', '26', '28'],
    correct: '28'
}
]