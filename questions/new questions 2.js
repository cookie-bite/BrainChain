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
        hasContent: false,
        quest: 'What are the five colors of the Olympic rings?',
        choices: ['Red, Green, Blue, Yellow, Black', 'Red, Orange, Yellow, Green, Blue', 'Black, White, Red, Yellow, Blue', 'Blue, Yellow, Black, Green, Red'],
        correct: 'Blue, Yellow, Black, Green, Red'
    },
    {
        hasContent: false,
        quest: 'Which country has won the most total medals in the Summer Olympics?',
        choices: ['United States', 'Russia', 'Germany', 'China'],
        correct: 'United States'
    },
    {
        hasContent: false,
        quest: 'Who was the first athlete to win five gold medals in a single Olympic Games?',
        choices: ['Jesse Owens', 'Michael Phelps', 'Usain Bolt', 'Eric Heiden'],
        correct: 'Eric Heiden'
    },
    {
        hasContent: false,
        quest: 'In what year were the first modern Olympic Games held?',
        choices: ['1896', '1900', '1904', '1908'],
        correct: '1896'
    },
    {
        hasContent: false,
        quest: 'Which country has hosted the most Olympic Games?',
        choices: ['United States', 'France', 'Germany', 'Japan'],
        correct: 'United States'
    },
    {
        hasContent: false,
        quest: 'What is the symbol of the Olympic Games?',
        choices: ['Torch', 'Medal', 'Olympic Rings', 'Olympic Flag'],
        correct: 'Olympic Rings'
    },
    {
        hasContent: false,
        quest: 'Who is known as the "Austrian Oak" in bodybuilding?',
        choices: ['Jay Cutler', 'Ronnie Coleman', 'Arnold Schwarzenegger', 'Dorian Yates'],
        correct: 'Arnold Schwarzenegger'
    },
    {
        hasContent: false,
        quest: 'What is the primary role of protein in bodybuilding?',
        choices: ['Energy production', 'Muscle growth and repair', 'Fat storage', 'Bone strengthening'],
        correct: 'Muscle growth and repair'
    },
    {
        hasContent: false,
        quest: 'What does the term "cutting" mean in bodybuilding?',
        choices: ['Increasing muscle size', 'Decreasing body fat', 'Increasing strength', 'Decreasing water weight'],
        correct: 'Decreasing body fat'
    },
    {
        hasContent: false,
        quest: 'What is a common side effect of steroid use in bodybuilding?',
        choices: ['Increased flexibility', 'Decreased appetite', 'Increased hair growth', 'Decreased aggression'],
        correct: 'Increased hair growth'
    },
    {
        hasContent: false,
        quest: 'What is the term for the phase of intense training before a bodybuilding competition?',
        choices: ['Bulking', 'Cutting', 'Loading', 'Peaking'],
        correct: 'Peaking'
    },
]
const anatomyQuestions = [{
    hasContent: false,
    quest: 'What is the hard, rigid form of connective tissue constituting most of the skeleton of vertebrates?',
    choices: ['Cartilage', 'Bone', 'Ligament', 'Tendon'],
    correct: 'Bone'
},
{
    hasContent: false,
    quest: 'What is the term for the process of bone formation?',
    choices: ['Ossification', 'Calcification', 'Fibrosis', 'Keratinization'],
    correct: 'Ossification'
},
{
    hasContent: false,
    quest: 'What is the outer surface of bone called?',
    choices: ['Periosteum', 'Endosteum', 'Epiphysis', 'Diaphysis'],
    correct: 'Periosteum'
},
{
    hasContent: false,
    quest: 'What is the name of the bone in the upper arm or forelimb, extending from the shoulder to the elbow?',
    choices: ['Humerus', 'Radius', 'Ulna', 'Femur'],
    correct: 'Humerus'
},
{
    hasContent: false,
    quest: 'What is the name of the bone disorder characterized by decreased bone mass and increased susceptibility to fractures?',
    choices: ['Arthritis', 'Osteoporosis', 'Rickets', 'Scoliosis'],
    correct: 'Osteoporosis'
},
{
    hasContent: false,
    quest: 'What is the largest bone in the human body?',
    choices: ['Femur', 'Humerus', 'Tibia', 'Pelvis'],
    correct: 'Femur'
},
{
    hasContent: false,
    quest: 'How many bones are there in the human hand (including the wrist)?',
    choices: ['27', '30', '32', '36'],
    correct: '27'
},
{
    hasContent: false,
    quest: 'What is the term for the growth plate in a bone?',
    choices: ['Epiphysis', 'Diaphysis', 'Metaphysis', 'Epiphyseal plate'],
    correct: 'Epiphyseal plate'
},
{
    hasContent: false,
    quest: 'What is the bone that is located in the chest, between the two clavicles?',
    choices: ['Sternum', 'Scapula', 'Ribs', 'Vertebrae'],
    correct: 'Sternum'
},
{
    hasContent: false,
    quest: 'What is the name of the first cervical vertebra that supports the head?',
    choices: ['Atlas', 'Axis', 'Vertebra prominens', 'Odontoid process'],
    correct: 'Atlas'
},
{
    hasContent: false,
    quest: 'What is the largest muscle in the human body?',
    choices: ['Gluteus Maximus', 'Latissimus Dorsi', 'Gastrocnemius', 'Pectoralis Major'],
    correct: 'Gluteus Maximus'
},
{
    hasContent: false,
    quest: 'What type of muscle is the heart made of?',
    choices: ['Skeletal muscle', 'Smooth muscle', 'Cardiac muscle', 'Connective tissue'],
    correct: 'Cardiac muscle'
},
{
    hasContent: false,
    quest: 'What is the term for the contraction of a muscle due to a reflex?',
    choices: ['Tetanic contraction', 'Isotonic contraction', 'Isometric contraction', 'Reflexive contraction'],
    correct: 'Reflexive contraction'
},
{
    hasContent: false,
    quest: 'What is the primary function of the triceps brachii?',
    choices: ['Elbow flexion', 'Elbow extension', 'Shoulder flexion', 'Shoulder extension'],
    correct: 'Elbow extension'
},
{
    hasContent: false,
    quest: 'What is the smallest muscle in the human body?',
    choices: ['Stapedius', 'Tensor tympani', 'Sartorius', 'Gracilis'],
    correct: 'Stapedius'
},
{
    hasContent: false,
    quest: 'What is the muscle that flexes and rotates the neck?',
    choices: ['Sternocleidomastoid', 'Trapezius', 'Latissimus dorsi', 'Deltoid'],
    correct: 'Sternocleidomastoid'
},
{
    hasContent: false,
    quest: 'What type of muscle is found in the walls of blood vessels?',
    choices: ['Skeletal muscle', 'Smooth muscle', 'Cardiac muscle', 'Striated muscle'],
    correct: 'Smooth muscle'
},
{
    hasContent: false,
    quest: 'What is the term for the increase in muscle size?',
    choices: ['Atrophy', 'Hypertrophy', 'Hyperplasia', 'Dystrophy'],
    correct: 'Hypertrophy'
},
{
    hasContent: false,
    quest: 'What is the primary function of the rotator cuff muscles?',
    choices: ['Shoulder flexion', 'Shoulder extension', 'Shoulder abduction', 'Shoulder rotation'],
    correct: 'Shoulder rotation'
},
{
    hasContent: false,
    quest: 'What is the muscle on the back of the upper arm?',
    choices: ['Biceps brachii', 'Triceps brachii', 'Brachialis', 'Brachioradialis'],
    correct: 'Triceps brachii'
},
{
    hasContent: false,
    quest: 'What is the largest artery in the human body?',
    choices: ['Aorta', 'Pulmonary artery', 'Carotid artery', 'Femoral artery'],
    correct: 'Aorta'
},
{
    hasContent: false,
    quest: 'What type of blood vessel carries blood away from the heart?',
    choices: ['Artery', 'Vein', 'Capillary', 'Ventricle'],
    correct: 'Artery'
},
{
    hasContent: false,
    quest: 'What is the term for the smallest blood vessels in the body?',
    choices: ['Arteries', 'Veins', 'Capillaries', 'Venules'],
    correct: 'Capillaries'
},
{
    hasContent: false,
    quest: 'What type of blood vessel carries blood towards the heart?',
    choices: ['Artery', 'Vein', 'Capillary', 'Atrium'],
    correct: 'Vein'
},
{
    hasContent: false,
    quest: 'What is the term for the pressure of blood in the circulatory system?',
    choices: ['Heart rate', 'Cardiac output', 'Blood pressure', 'Pulse rate'],
    correct: 'Blood pressure'
},
{
    hasContent: false,
    quest: 'What is the main function of red blood cells?',
    choices: ['Fight infection', 'Clot blood', 'Carry oxygen', 'Regulate blood pressure'],
    correct: 'Carry oxygen'
},
{
    hasContent: false,
    quest: 'What type of blood does the pulmonary artery carry?',
    choices: ['Oxygenated blood', 'Deoxygenated blood', 'Both oxygenated and deoxygenated blood', 'Neither oxygenated nor deoxygenated blood'],
    correct: 'Deoxygenated blood'
},
{
    hasContent: false,
    quest: 'What is the function of platelets?',
    choices: ['Carry oxygen', 'Fight infection', 'Clot blood', 'Carry nutrients'],
    correct: 'Clot blood'
},
{
    hasContent: false,
    quest: 'What is the smallest blood vessel in the human body?',
    choices: ['Artery', 'Vein', 'Capillary', 'Arteriole'],
    correct: 'Capillary'
},
{
    hasContent: false,
    quest: 'What is the function of the circulatory system?',
    choices: ['Digest food', 'Remove waste products', 'Produce hormones', 'Regulate body temperature'],
    correct: 'Remove waste products'
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
    hasContent: false,
    quest: 'What is the outermost layer of the Sun\'s atmosphere?',
    choices: ['Photosphere', 'Chromosphere', 'Corona', 'Core'],
    correct: 'Corona'
},
{
    hasContent: false,
    quest: 'What is the name for dark, cooler areas on the Sun\'s surface?',
    choices: ['Prominence', 'Solar wind', 'Sunspots', 'Solar flare'],
    correct: 'Sunspots'
},
{
    hasContent: false,
    quest: 'What is the solar wind primarily composed of?',
    choices: ['Hydrogen', 'Helium', 'Electrons and protons', 'Neutrons'],
    correct: 'Electrons and protons'
},
{
    hasContent: false,
    quest: 'What is the process by which the Sun produces energy through the fusion of hydrogen into helium?',
    choices: ['Photosynthesis', 'Nuclear fission', 'Nuclear fusion', 'Combustion'],
    correct: 'Nuclear fusion'
},
{
    hasContent: false,
    quest: 'Which layer of the Sun's atmosphere is the visible surface that emits light?',
    choices: ['Photosphere', 'Chromosphere', 'Corona', 'Core'],
    correct: 'Photosphere'
},
{
    hasContent: false,
    quest: 'Which solar feature is a loop of hot, glowing gas that extends from the Sun\'s surface into the corona?',
    choices: ['Prominence', 'Solar wind', 'Sunspots', 'Solar flare'],
    correct: 'Prominence'
},
{
    hasContent: false,
    quest: 'Which layer of the Sun's atmosphere is above the photosphere and is characterized by a reddish glow?',
    choices: ['Photosphere', 'Chromosphere', 'Corona', 'Core'],
    correct: 'Chromosphere'
},
{
    hasContent: false,
    quest: 'What is the region at the center of the Sun where nuclear fusion reactions occur?',
    choices: ['Photosphere', 'Chromosphere', 'Corona', 'Core'],
    correct: 'Core'
},
{
    hasContent: false,
    quest: 'What is the name for the central, darkest part of a sunspot?',
    choices: ['Prominence', 'Umbra', 'Penumbra', 'Corona'],
    correct: 'Umbra'
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
    hasContent: false,
    quest: 'Which smartphone operating system is developed by Google?',
    choices: ['iOS', 'Windows Phone', 'Android', 'BlackBerry'],
    correct: 'Android'
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
    hasContent: false,
    quest: 'Which smartphone feature enhances the security of the device by scanning the user\'s unique facial features?',
    choices: ['Fingerprint Scanner', 'Retina Scanner', 'Iris Scanner', 'Face Recognition'],
    correct: 'Face Recognition'
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
    hasContent: false,
    quest: 'Which computer company was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in 1976?',
    choices: ['Microsoft', 'IBM', 'Apple', 'Dell'],
    correct: 'Apple'
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
    hasContent: false,
    quest: 'What is the term for a computer program designed to replicate itself and spread to other computers?',
    choices: ['Spyware', 'Malware', 'Worm', 'Phishing'],
    correct: 'Worm'
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
    hasContent: false,
    quest: 'Which term describes the process of adding a new block to a blockchain?',
    choices: ['Mining', 'Forging', 'Smelting', 'Quarrying'],
    correct: 'Mining'
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
    hasContent: false,
    quest: 'Which term describes the process of an individual or group controlling more than 51% of a blockchain network?',
    choices: ['Decentralization', 'Double Spending', '51% Attack', 'Consensus'],
    correct: '51% Attack'
},
{
    hasContent: false,
    quest: 'What is the term for the process of converting information into a fixed-size string of characters?',
    choices: ['Hash Function', 'Encryption', 'Decryption', 'Compression'],
    correct: 'Hash Function'
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
    hasContent: false,
    quest: 'What is the primary characteristic of analog computers?',
    choices: ['Digital data representation', 'Quantum computing', 'Continuous data representation', 'Binary coding'],
    correct: 'Continuous data representation'
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
    hasContent: false,
    quest: 'Which quantum computing company is known for developing the D-Wave quantum annealing machines?',
    choices: ['IBM', 'Google', 'Microsoft', 'D-Wave Systems'],
    correct: 'D-Wave Systems'
},
{
    hasContent: false,
    quest: 'What is the term for the process of correcting errors in quantum computers caused by decoherence and other quantum effects?',
    choices: ['Quantum Error Correction', 'Quantum Superposition', 'Quantum Teleportation', 'Quantum Encryption'],
    correct: 'Quantum Error Correction'
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
    hasContent: false,
    quest: 'Which quantum computing concept involves the use of multiple quantum bits to encode information?',
    choices: ['Quantum Tunneling', 'Quantum Entanglement', 'Quantum Superposition', 'Quantum Parallelism'],
    correct: 'Quantum Superposition'
},
{
    hasContent: false,
    quest: 'What is the term for the hypothetical point in the future when quantum computers can perform tasks surpassing the capabilities of classical computers?',
    choices: ['Quantum Advantage', 'Quantum Leap', 'Quantum Singularity', 'Quantum Revolution'],
    correct: 'Quantum Revolution'
},
{
    hasContent: false,
    quest: 'Which type of headphones typically covers the entire ear and provides good noise isolation?',
    choices: ['In-Ear', 'On-Ear', 'Over-Ear', 'Earbuds'],
    correct: 'Over-Ear'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for connecting headphones to devices without the need for cables?',
    choices: ['Bluetooth', 'Wi-Fi', 'NFC', 'Infrared'],
    correct: 'Bluetooth'
},
{
    hasContent: false,
    quest: 'Which type of headphones are designed to fit snugly into the ear canal?',
    choices: ['Over-Ear', 'On-Ear', 'Earbuds', 'Bone Conduction'],
    correct: 'Earbuds'
},
{
    hasContent: false,
    quest: 'Which feature allows headphones to detect when they are being worn and automatically pause or play music accordingly?',
    choices: ['Touch Controls', 'Voice Assistant Integration', 'Auto-Pause/Auto-Play', 'Foldable Design'],
    correct: 'Auto-Pause/Auto-Play'
},
{
    hasContent: false,
    quest: 'Which headphone type allows users to hear ambient sounds while wearing them?',
    choices: ['Closed-Back', 'Open-Back', 'Semi-Open', 'In-Ear Monitors'],
    correct: 'Open-Back'
},
{
    hasContent: false,
    quest: 'Which material is commonly used for the padding on over-ear headphones to provide comfort during extended use?',
    choices: ['Velvet', 'Leather', 'Memory Foam', 'Silicone'],
    correct: 'Memory Foam'
},
{
    hasContent: false,
    quest: 'Which type of headphones transmits sound through vibrations in the bones of the face rather than through the air?',
    choices: ['Bone Conduction', 'In-Ear Monitors', 'Wireless Earbuds', 'Noise-Canceling'],
    correct: 'Bone Conduction'
},
{
    hasContent: false,
    quest: 'Which feature allows headphones to be folded or collapsed for convenient storage and portability?',
    choices: ['Swivel Ear Cups', 'Auto-Pause/Auto-Play', 'Foldable Design', 'Touch Controls'],
    correct: 'Foldable Design'
},
{
    hasContent: false,
    quest: 'Which term describes the spatial dimension of sound reproduction in headphones?',
    choices: ['Bass Boost', 'Sensitivity', 'Soundstage', 'Noise Cancellation'],
    correct: 'Soundstage'
},
{
    hasContent: false,
    quest: 'Which headphone type is designed to sit on the outer ear without fully enclosing it?',
    choices: ['In-Ear Monitors', 'Closed-Back', 'On-Ear', 'Earbuds'],
    correct: 'On-Ear'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for short-range communication between devices such as smartphones and headphones?',
    choices: ['Wi-Fi', 'Bluetooth', 'NFC', '4G LTE'],
    correct: 'Bluetooth'
},
{
    hasContent: false,
    quest: 'Which wireless technology is often used for contactless payments and data transfer by bringing devices close together?',
    choices: ['Bluetooth', 'Wi-Fi', 'NFC', '5G'],
    correct: 'NFC'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for cellular communication, providing high-speed internet access on mobile devices?',
    choices: ['Bluetooth', 'Wi-Fi', '5G', '4G LTE'],
    correct: '4G LTE'
},
{
    hasContent: false,
    quest: 'Which wireless technology is known for its short-range communication and is commonly used for file sharing between devices?',
    choices: ['4G LTE', 'Bluetooth', 'Wi-Fi', 'NFC'],
    correct: 'Bluetooth'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for creating personal area networks (PANs) and connecting devices like laptops and smartphones?',
    choices: ['5G', 'Bluetooth', 'Wi-Fi', 'NFC'],
    correct: 'Bluetooth'
},
{
    hasContent: false,
    quest: 'Which wireless technology is designed for short-range communication between devices and is commonly used for wireless mice and keyboards?',
    choices: ['Wi-Fi', '5G', 'Bluetooth', 'NFC'],
    correct: 'Bluetooth'
},
{
    hasContent: false,
    quest: 'Which wireless technology is commonly used for connecting devices to the internet over longer distances, such as in homes and offices?',
    choices: ['Bluetooth', '5G', 'Wi-Fi', 'NFC'],
    correct: 'Wi-Fi'
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
    hasContent: false,
    quest: 'Which technology creates a completely digital environment that users can interact with and explore?',
    choices: ['Augmented Reality (AR)', 'Mixed Reality (MR)', 'Virtual Reality (VR)', 'Simulated Reality'],
    correct: 'Virtual Reality (VR)'
},
{
    hasContent: false,
    quest: 'Which technology combines elements of both the real and virtual worlds, allowing interaction with both environments?',
    choices: ['Virtual Reality (VR)', 'Augmented Reality (AR)', 'Mixed Reality (MR)', 'Simulated Reality'],
    correct: 'Mixed Reality (MR)'
},
{
    hasContent: false,
    quest: 'Which term describes a technology that simulates physical presence in a virtual or augmented environment?',
    choices: ['Spatial Computing', 'Immersive Experience', 'Simulated Reality', 'Holographic Reality'],
    correct: 'Immersive Experience'
},
{
    hasContent: false,
    quest: 'Which technology creates a simulated reality that mimics the physical world and its laws?',
    choices: ['Augmented Reality (AR)', 'Mixed Reality (MR)', 'Simulated Reality', 'Virtual Reality (VR)'],
    correct: 'Simulated Reality'
},
{
    hasContent: false,
    quest: 'Which term describes a simulated environment that replicates the physical world and its properties?',
    choices: ['Virtual Reality (VR)', 'Augmented Reality (AR)', 'Simulated Reality', 'Mixed Reality (MR)'],
    correct: 'Simulated Reality'
},
{
    hasContent: false,
    quest: 'Which technology merges digital information with the physical world in real-time?',
    choices: ['Virtual Reality (VR)', 'Mixed Reality (MR)', 'Simulated Reality', 'Augmented Reality (AR)'],
    correct: 'Augmented Reality (AR)'
},
{
    hasContent: false,
    quest: 'Which term describes a technology that overlays digital information onto the physical world, enhancing real-world perception?',
    choices: ['Simulated Reality', 'Mixed Reality (MR)', 'Holographic Reality', 'Augmented Reality (AR)'],
    correct: 'Augmented Reality (AR)'
},
{
    hasContent: false,
    quest: 'Which technology seamlessly integrates digital and physical elements into the user\'s natural environment?',
    choices: ['Simulated Reality', 'Mixed Reality (MR)', 'Holographic Reality', 'Augmented Reality (AR)'],
    correct: 'Mixed Reality (MR)'
},
{
    hasContent: false,
    quest: 'Which term describes an artificial environment created with computer-generated imagery, sounds, and sensations?',
    choices: ['Virtual Reality (VR)', 'Augmented Reality (AR)', 'Mixed Reality (MR)', 'Holographic Reality'],
    correct: 'Virtual Reality (VR)'
},
]
const gameQuestions = [{
    hasContent: false,
    quest: 'In chess, how many squares are there on the entire board?',
    choices: ['64', '72', '56', '48'],
    correct: '64'
},
{
    hasContent: false,
    quest: 'How does a pawn move in its first turn in chess?',
    choices: ['One square forward', 'Two squares forward', 'Diagonally', 'L-shaped'],
    correct: 'Two squares forward'
},
{
    hasContent: false,
    quest: 'Which chess piece can move any number of squares vertically or horizontally but not diagonally?',
    choices: ['Knight', 'Bishop', 'Rook', 'Queen'],
    correct: 'Rook'
},
{
    hasContent: false,
    quest: 'Which chess piece can move in an L-shaped pattern?',
    choices: ['Rook', 'Pawn', 'Knight', 'Queen'],
    correct: 'Knight'
},
{
    hasContent: false,
    quest: 'Which chess piece has the ability to move diagonally any number of squares?',
    choices: ['Knight', 'Queen', 'Bishop', 'Pawn'],
    correct: 'Bishop'
},
{
    hasContent: false,
    quest: 'What is the starting position of the king and queen on the chessboard?',
    choices: ['King on e1, Queen on d1', 'King on e8, Queen on d8', 'King on d1, Queen on e1', 'King on d8, Queen on e8'],
    correct: 'King on e1, Queen on d1'
},
{
    hasContent: false,
    quest: 'How does a bishop move on the chessboard?',
    choices: ['Diagonally', 'Horizontally', 'Vertically', 'L-shaped'],
    correct: 'Diagonally'
},
{
    hasContent: false,
    quest: 'How does a knight move on the chessboard?',
    choices: ['Horizontally or vertically', 'Diagonally', 'In an L-shaped pattern', 'Any number of squares diagonally'],
    correct: 'In an L-shaped pattern'
},
{
    hasContent: false,
    quest: 'Which chess piece can move in any direction horizontally, vertically, or diagonally?',
    choices: ['Rook', 'Knight', 'Pawn', 'King'],
    correct: 'Queen'
},
{
    hasContent: false,
    quest: 'In chess, what term describes the situation where a player continuously checks their opponent with no possibility of delivering checkmate?',
    choices: ['Stalemate', 'Zwischenzug', 'Fork', 'Perpetual Check'],
    correct: 'Perpetual Check'
},
{
    hasContent: false,
    quest: 'What is the primary focus of game theory?',
    choices: ['Probability', 'Decision-making', 'Strategic interactions', 'Algebraic structures'],
    correct: 'Strategic interactions'
},
{
    hasContent: false,
    quest: 'Which mathematician is often considered the father of game theory?',
    choices: ['John von Neumann', 'Leonhard Euler', 'Blaise Pascal', 'Isaac Newton'],
    correct: 'John von Neumann'
},
{
    hasContent: false,
    quest: 'What is the "Prisoner\'s Dilemma" in game theory?',
    choices: ['A zero-sum game', 'A cooperative game', 'A simultaneous game', 'A non-zero-sum game'],
    correct: 'A simultaneous game'
},
{
    hasContent: false,
    quest: 'What is a "Zero-Sum Game" in game theory?',
    choices: ['A game with no winners', 'A game with only one winner', 'A game where one player\'s gain is equal to another\'s loss', 'A cooperative game'],
    correct: 'A game where one player\'s gain is equal to another\'s loss'
},
{
    hasContent: false,
    quest: 'What is a "Simultaneous Game" in game theory?',
    choices: ['A cooperative game', 'A sequential game', 'A game with perfect information', 'A game where players make decisions simultaneously'],
    correct: 'A game where players make decisions simultaneously'
},
{
    hasContent: false,
    quest: 'What does the term "Perfect Information" mean in game theory?',
    choices: ['Players have complete information about the game', 'Players have no information about the game', 'Players make decisions simultaneously', 'Players follow dominant strategies'],
    correct: 'Players have complete information about the game'
},
{
    hasContent: false,
    quest: 'What is the primary goal of players in a cooperative game?',
    choices: ['Maximize individual payoffs', 'Minimize collective payoffs', 'Cooperate to achieve a common goal', 'Defect to gain individual advantage'],
    correct: 'Cooperate to achieve a common goal'
},
{
    hasContent: false,
    quest: 'What is "Rationality" in the context of game theory?',
    choices: ['Making random decisions', 'Choosing optimal strategies', 'Acting irrationally', 'Ignoring opponents\' choices'],
    correct: 'Choosing optimal strategies'
},
{
    hasContent: false,
    quest: 'What is the "Folk Theorem" in game theory?',
    choices: ['A traditional game', 'A collection of popular strategies', 'A theorem proven by common beliefs', 'A set of results about repeated games'],
    correct: 'A set of results about repeated games'
},
{
    hasContent: false,
    quest: 'What does the "Tragedy of the Commons" refer to in game theory?',
    choices: ['Overuse and depletion of shared resources', 'Successful cooperation among players', 'A strategy to maximize individual gains', 'Absence of competition in a game'],
    correct: 'Overuse and depletion of shared resources'
},
{
    hasContent: false,
    quest: 'Who is the protagonist of Red Dead Redemption 2?',
    choices: ['John Marston', 'Arthur Morgan', 'Dutch van der Linde', 'Javier Escuella'],
    correct: 'Arthur Morgan'
},
{
    hasContent: false,
    quest: 'Which gang does the player character, Arthur Morgan, belong to?',
    choices: ['O'Driscolls', 'Laramie', 'Van der Linde', 'Walton'],
    correct: 'Van der Linde'
},
{
    hasContent: false,
    quest: 'Who is the charismatic leader of the Van der Linde gang?',
    choices: ['Micah Bell', 'Hosea Matthews', 'Dutch van der Linde', 'Sadie Adler'],
    correct: 'Dutch van der Linde'
},
{
    hasContent: false,
    quest: 'Which town serves as the main hub in Red Dead Redemption 2?',
    choices: ['Blackwater', 'Saint Denis', 'Valentine', 'Rhodes'],
    correct: 'Saint Denis'
},
{
    hasContent: false,
    quest: 'Which weapon does Arthur Morgan use as his primary sidearm?',
    choices: ['Schofield Revolver', 'Double-Action Revolver', 'Lancaster Repeater', 'Carbine Repeater'],
    correct: 'Schofield Revolver'
},
{
    hasContent: false,
    quest: 'Which game studio developed "The Witcher 3: Wild Hunt"?',
    choices: ['Rockstar Games', 'CD Projekt', 'Ubisoft', 'Bethesda'],
    correct: 'CD Projekt'
},
{
    hasContent: false,
    quest: 'Which game studio is known for the "Halo" series and "Destiny"?',
    choices: ['Bungie', '343 Industries', 'Bioware', 'Respawn Entertainment'],
    correct: 'Bungie'
},
{
    hasContent: false,
    quest: 'Which Japanese game studio is famous for creating the "Final Fantasy" series?',
    choices: ['Square Enix', 'Konami', 'Capcom', 'Sega'],
    correct: 'Square Enix'
},
{
    hasContent: false,
    quest: 'Which game studio is responsible for the "Grand Theft Auto" series?',
    choices: ['Ubisoft', 'Rockstar Games', 'Bethesda', 'Electronic Arts'],
    correct: 'Rockstar Games'
},
{
    hasContent: false,
    quest: 'Which game studio developed the "Assassin\'s Creed" series?',
    choices: ['Square Enix', 'Ubisoft', 'Electronic Arts', 'Activision'],
    correct: 'Ubisoft'
},
{
    hasContent: false,
    quest: 'Which game studio developed the "God of War" series?',
    choices: ['Naughty Dog', 'Santa Monica Studio', 'Capcom', 'Guerrilla Games'],
    correct: 'Santa Monica Studio'
},
{
    hasContent: false,
    quest: 'Which game studio is known for creating the "Metal Gear Solid" series?',
    choices: ['Square Enix', 'Ubisoft', 'Blizzard Entertainment', 'Konami'],
    correct: 'Konami'
},
{
    hasContent: false,
    quest: 'Which game studio developed the "Dark Souls" series?',
    choices: ['FromSoftware', 'Capcom', 'Square Enix', 'Bethesda'],
    correct: 'FromSoftware'
},
{
    hasContent: false,
    quest: 'Which game studio is responsible for the "Call of Duty" series?',
    choices: ['Activision', 'Electronic Arts', 'Respawn Entertainment', 'Bungie'],
    correct: 'Activision'
},
{
    hasContent: false,
    quest: 'Which game studio is known for creating the "BioShock" series?',
    choices: ['Ubisoft', 'Rockstar Games', 'CD Projekt', '2K Games'],
    correct: '2K Games'
},
{
    hasContent: false,
    quest: 'Which game is known for its blocky, pixelated graphics and allows players to build and explore their own virtual worlds?',
    choices: ['Minecraft', 'Fortnite', 'League of Legends', 'Overwatch'],
    correct: 'Minecraft'
},
{
    hasContent: false,
    quest: 'Which game is a battle royale sensation, where 100 players fight to be the last one standing?',
    choices: ['Minecraft', 'Fortnite', 'League of Legends', 'Apex Legends'],
    correct: 'Fortnite'
},
{
    hasContent: false,
    quest: 'Which game is a multiplayer online battle arena (MOBA) where two teams compete to destroy each other\'s main structures?',
    choices: ['Minecraft', 'Fortnite', 'League of Legends', 'Overwatch'],
    correct: 'League of Legends'
},
{
    hasContent: false,
    quest: 'Which game is a team-based first-person shooter featuring a diverse cast of characters with unique abilities?',
    choices: ['Minecraft', 'Fortnite', 'League of Legends', 'Overwatch'],
    correct: 'Overwatch'
},
{
    hasContent: false,
    quest: 'Which game series is known for its intense and cinematic first-person shooter campaigns, often set in historical or modern warfare settings?',
    choices: ['Halo', 'Call of Duty', 'Battlefield', 'Destiny'],
    correct: 'Call of Duty'
},
{
    hasContent: false,
    quest: 'Which game series is known for its sci-fi setting and features the iconic character Master Chief?',
    choices: ['Halo', 'Call of Duty', 'Destiny', 'Gears of War'],
    correct: 'Halo'
},
{
    hasContent: false,
    quest: 'Which game series is known for its cooperative gameplay, allowing players to explore dungeons, fight monsters, and complete quests together?',
    choices: ['World of Warcraft', 'Diablo', 'Final Fantasy', 'The Elder Scrolls'],
    correct: 'Diablo'
},
{
    hasContent: false,
    quest: 'Which game series is known for its massive multiplayer online role-playing games (MMORPGs), allowing players to explore a fantasy world and complete quests?',
    choices: ['World of Warcraft', 'Diablo', 'Final Fantasy', 'The Elder Scrolls'],
    correct: 'World of Warcraft'
},
{
    hasContent: false,
    quest: 'Which game series is known for its space exploration and trading simulation, allowing players to explore a vast galaxy?',
    choices: ['Elite Dangerous', 'Star Wars: Battlefront', 'No Man\'s Sky', 'Star Citizen'],
    correct: 'Elite Dangerous'
},
{
    hasContent: false,
    quest: 'Which game series is known for its post-apocalyptic setting and survival horror elements, featuring mutated creatures and a lone protagonist?',
    choices: ['Metro', 'Fallout', 'The Last of Us', 'Resident Evil'],
    correct: 'Metro'
},
]
const mathematicsQuestions = [ 
{
    hasContent: false,
    quest: 'Multiply the following numbers: 7 x 9 = ?',
    choices: ['63', '56', '72', '81'],
    correct: '63'
},
{
    hasContent: false,
    quest: 'Subtract 15 from 47. What is the result?',
    choices: ['22', '30', '32', '42'],
    correct: '32'
},
{
    hasContent: false,
    quest: 'Divide 144 by 12. What is the quotient?',
    choices: ['8', '10', '12', '14'],
    correct: '12'
},
{
    hasContent: false,
    quest: 'Add 57 and 28. What is the sum?',
    choices: ['75', '85', '95', '105'],
    correct: '85'
},
{
    hasContent: false,
    quest: 'Find the square root of 144.',
    choices: ['10', '12', '14', '16'],
    correct: '12'
},
{
    hasContent: false,
    quest: 'What is the product of 9 multiplied by 6?',
    choices: ['42', '48', '54', '56'],
    correct: '54'
},
{
    hasContent: false,
    quest: 'Subtract 28 from 50. What is the result?',
    choices: ['20', '22', '24', '26'],
    correct: '22'
},
{
    hasContent: false,
    quest: 'Multiply 6 by 9. What is the product?',
    choices: ['45', '48', '54', '60'],
    correct: '54'
},
{
    hasContent: false,
    quest: 'Divide 63 by 7. What is the quotient?',
    choices: ['7', '9', '11', '13'],
    correct: '9'
},
{
    hasContent: false,
    quest: 'What is the result of subtracting 40 from 62?',
    choices: ['12', '18', '22', '28'],
    correct: '22'
},
{
    hasContent: false,
    quest: 'Multiply the following numbers: 8 x 7 = ?',
    choices: ['48', '54', '56', '64'],
    correct: '56'
},
{
    hasContent: false,
    quest: 'Subtract 28 from 75. What is the result?',
    choices: ['42', '47', '49', '53'],
    correct: '47'
},
{
    hasContent: false,
    quest: 'Divide 144 by 12. What is the quotient?',
    choices: ['8', '10', '12', '14'],
    correct: '12'
},
{
    hasContent: false,
    quest: 'Add 63 and 19. What is the sum?',
    choices: ['75', '82', '91', '102'],
    correct: '82'
},
{
    hasContent: false,
    quest: 'Find the square root of 169.',
    choices: ['10', '12', '13', '14'],
    correct: '13'
},
{
    hasContent: false,
    quest: 'What is the product of 7 multiplied by 8?',
    choices: ['42', '48', '54', '56'],
    correct: '56'
},
{
    hasContent: false,
    quest: 'Subtract 32 from 60. What is the result?',
    choices: ['18', '22', '24', '28'],
    correct: '28'
},
{
    hasContent: false,
    quest: 'Multiply 9 by 7. What is the product?',
    choices: ['56', '63', '72', '81'],
    correct: '63'
},
{
    hasContent: false,
    quest: 'Divide 81 by 9. What is the quotient?',
    choices: ['7', '9', '11', '13'],
    correct: '9'
},
{
    hasContent: false,
    quest: 'What is the result of subtracting 42 from 70?',
    choices: ['18', '22', '26', '28'],
    correct: '28'
}
]