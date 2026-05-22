const anatomyQuestions = [
    {
        hasContent: false,
        quest: 'The longest part of the digestive tract is the:',
        choices: ['Esophagus', 'Stomach', 'Small intestine', 'Large intestine'],
        correct: 'Small intestine'
    },
    {
        hasContent: false,
        quest: 'Which digestive organ also plays a key role in blood sugar regulation?',
        choices: ['Liver', 'Pancreas', 'Gallbladder', 'Kidneys'],
        correct: 'Pancreas'
    },
    {
        hasContent: false,
        quest: 'The process of breaking down food into smaller molecules is called:',
        choices: ['Ingestion', 'Digestion', 'Absorption', 'Excretion'],
        correct: 'Digestion'
    },
    {
        hasContent: false,
        quest: 'Stomach acid primarily consists of:',
        choices: ['Hydrochloric acid', 'Sulfuric acid', 'Acetic acid', 'Lactic acid'],
        correct: 'Hydrochloric acid'
    },
    {
        hasContent: false,
        quest: 'Which condition is characterized by frequent, loose, and watery stools?',
        choices: ['Constipation', 'Diarrhea', 'Appendicitis', 'Ulcer'],
        correct: 'Diarrhea'
    },
    {
        hasContent: false,
        quest: 'The esophagus connects the:',
        choices: ['Mouth and stomach', 'Stomach and small intestine', 'Small and large intestine', 'Lungs and stomach'],
        correct: 'Mouth and stomach'
    },
    {
        hasContent: false,
        quest: 'The primary function of the large intestine is to:',
        choices: ['Store waste', 'Absorb water', 'Digest fats', 'Produce enzymes'],
        correct: 'Absorb water'
    },
    {
        hasContent: false,
        quest: 'The small intestine is divided into three sections: the duodenum, the jejunum, and the:',
        choices: ['Colon', 'Cecum', 'Ileum', 'Appendix'],
        correct: 'Ileum'
    },
    {
        hasContent: false,
        quest: 'Irritable bowel syndrome (IBS) is a disorder affecting the:',
        choices: ['Stomach', 'Small intestine', 'Large intestine', 'Liver'],
        correct: 'Large intestine'
    },
    {
        hasContent: false,
        quest: 'Fiber is an important dietary component for maintaining:',
        choices: ['Regular bowel movements', 'Blood sugar balance', 'Strong teeth', 'Muscle growth'],
        correct: 'Regular bowel movements'
    },
    {
        hasContent: false,
        quest: 'The visible part of a hair strand is called the:',
        choices: ['Root', 'Shaft', 'Follicle', 'Bulb'],
        correct: 'Shaft'
    },
    {
        hasContent: false,
        quest: 'The hair follicle is located in which layer of the skin?',
        choices: ['Epidermis', 'Dermis', 'Hypodermis', 'Muscle'],
        correct: 'Dermis'
    },
    {
        hasContent: false,
        quest: 'The main protein that makes up hair is called:',
        choices: ['Keratin', 'Collagen', 'Melanin', 'Elastin'],
        correct: 'Keratin'
    },
    {
        hasContent: false,
        quest: 'Melanin is responsible for:',
        choices: ['Hair texture', 'Hair growth rate', 'Hair color', 'Hair strength'],
        correct: 'Hair color'
    },
    { 
        hasContent: false,
        quest: 'The growth phase of a hair follicle is called:',
        choices: ['Anagen', 'Catagen', 'Telogen', 'Exogen'],
        correct: 'Anagen'
    },
    {
        hasContent: false, 
        quest: 'The shape of the hair follicle determines:',
        choices: ['Hair color', 'Hair length', 'Hair thickness', 'Hair texture'],
        correct: 'Hair texture'
    },
    {
        hasContent: false,
        quest: 'The small muscle attached to the hair follicle is called the:',
        choices: ['Papilla', 'Sebaceous gland', 'Arrector pili', 'Medulla'],
        correct: 'Arrector pili'
    },
    {
        hasContent: false,
        quest: 'Sebaceous glands produce:',
        choices: ['Sweat', 'Oil (sebum)', 'Melanin', 'Keratin'],
        correct: 'Oil (sebum)'
    },
    {
        hasContent: false, 
        quest: 'The resting phase of a hair follicle is called:',
        choices: ['Anagen', 'Catagen', 'Telogen', 'Exogen'],
        correct: 'Telogen'
    },
    {
        hasContent: false,
        quest: 'Which of these factors does NOT typically influence hair growth rate?',
        choices: ['Genetics', 'Nutrition', 'Hormones', 'Eye color'],
        correct: 'Eye color'
    },
    {
        hasContent: false,
        quest: 'The basic units of heredity are called:',
        choices: ['Chromosomes', 'Genes', 'Proteins', 'Cells'],
        correct: 'Genes'
    },
    {
        hasContent: false,
        quest: 'Different versions of a gene are called:',
        choices: ['Alleles', 'Chromosomes', 'Mutations', 'Traits'],
        correct: 'Alleles'
    },
    {
        hasContent: false,
        quest: 'An organism with two identical alleles for a trait is:',
        choices: ['Heterozygous', 'Homozygous', 'Dominant', 'Recessive'],
        correct: 'Homozygous' 
    },
    {
        hasContent: false,
        quest: 'An organism with two different alleles for a trait is:',
        choices: ['Heterozygous', 'Homozygous', 'Dominant', 'Recessive'],
        correct: 'Heterozygous' 
    },
    {
        hasContent: false,
        quest: 'The observable characteristics of an organism are its:',
        choices: ['Genotype', 'Phenotype', 'Chromosomes', 'Genome'],
        correct: 'Phenotype'
    },
    {
        hasContent: false,
        quest: 'The genetic makeup of an organism is its:',
        choices: ['Genotype', 'Phenotype', 'Chromosomes', 'Genome'],
        correct: 'Genotype'
    },
    {
        hasContent: false,
        quest: 'DNA is located in the:',
        choices: ['Nucleus', 'Cytoplasm', 'Ribosomes', 'Cell membrane'],
        correct: 'Nucleus'
    },
    {
        hasContent: false,
        quest: 'The shape of a DNA molecule is described as a:',
        choices: ['Single helix', 'Double helix', 'Triple helix', 'Straight line'],
        correct: 'Double helix'
    },
    {
        hasContent: false,
        quest: 'The process of copying DNA is called:',
        choices: ['Replication', 'Transcription', 'Translation', 'Mitosis'],
        correct: 'Replication'
    },
    {
        hasContent: false,
        quest: 'Traits that are controlled by a single gene are called:',
        choices: ['Polygenic traits', 'Sex-linked traits', 'Mendelian traits', 'Environmental traits'],
        correct: 'Mendelian traits'
    },
    {
        hasContent: false,
        quest: 'A change in the DNA sequence of a gene is called a:',
        choices: ['Mutation', 'Transcription', 'Translation', 'Chromosome'],
        correct: 'Mutation'
    },
    {
        hasContent: false,
        quest: 'Down syndrome is an example of a condition caused by:',
        choices: ['Gene mutation', 'Chromosomal abnormality', 'Environmental factors', 'Recessive traits'],
        correct: 'Chromosomal abnormality'
    },
    {
        hasContent: false,
        quest: 'A diagram used to predict the possible genotypes of offspring is a:',
        choices: ['Pedigree', 'Punnett square', 'Karyotype', 'Cladogram'],
        correct: 'Punnett square'
    },
    {
        hasContent: false,
        quest: 'The passing of traits from parents to offspring is called:',
        choices: ['Evolution', 'Natural selection', 'Inheritance', 'Adaptation'],
        correct: 'Inheritance'
    },
    {
        hasContent: false,
        quest: 'The "Father of Genetics" is:',
        choices: ['Charles Darwin', 'Gregor Mendel', 'James Watson', 'Francis Crick'],
        correct: 'Gregor Mendel'
    },
    {
        hasContent: false,
        quest: 'Which of these diseases is caused by a virus?',
        choices: ['Influenza', 'Strep throat', 'Malaria', 'Ringworm'],
        correct: 'Influenza'
    },
    {
        hasContent: false,
        quest: 'Which disease is characterized by damage to the insulin-producing cells of the pancreas?',
        choices: ['Type 1 diabetes', 'Type 2 diabetes', 'Hypothyroidism', 'Alzheimer’s disease'],
        correct: 'Type 1 diabetes'
    },
    {
        hasContent: false,
        quest: 'Atherosclerosis is the buildup of _____ in the arteries.',
        choices: ['Plaque', 'Blood clots', 'Air', 'Calcium'],
        correct: 'Plaque'
    },
    {
        hasContent: false, 
        quest: 'The common cold is caused by:',
        choices: ['Bacteria', 'Viruses', 'Fungi', 'Parasites'],
        correct: 'Viruses'
    },
    {
        hasContent: false,
        quest: 'Which disease primarily affects the lungs and respiratory system?',
        choices: ['Pneumonia', 'Crohn’s Disease', 'Lupus', 'Multiple Sclerosis'],
        correct: 'Pneumonia'
    },
    {
        hasContent: false,
        quest: 'Alzheimer’s disease is a type of:',
        choices: ['Dementia', 'Cancer', 'Heart disease', 'Autoimmune disorder'],
        correct: 'Dementia'
    },
    {
        hasContent: false,
        quest: 'Which infectious disease is caused by a bacterium?',
        choices: ['Tuberculosis', 'Hepatitis C', 'Athlete’s foot', 'HIV'],
        correct: 'Tuberculosis'
    },
    {
        hasContent: false,
        quest: 'A stroke occurs when blood flow to the _____ is interrupted.',
        choices: ['Heart', 'Brain', 'Lungs', 'Liver'],
        correct: 'Brain'
    },
    {
        hasContent: false,
        quest: 'Osteoporosis is a condition characterized by:',
        choices: ['Joint inflammation', 'Low bone density', 'Muscle weakness', 'Memory loss'],
        correct: 'Low bone density'
    },
    {
        hasContent: false,
        quest: 'Which of these diseases is spread by mosquitoes?',
        choices: ['Malaria', 'Tuberculosis', 'Hepatitis C', 'Shingles'],
        correct: 'Malaria'
    },
    {
        hasContent: false, 
        quest: 'Which type of cancer affects the blood and bone marrow?',
        choices: ['Leukemia', 'Breast cancer', 'Skin cancer', 'Colon cancer'],
        correct: 'Leukemia'
    },
    { 
        hasContent: false,
        quest: 'Parkinson’s disease is a disorder of the:',
        choices: ['Heart', 'Lungs', 'Nervous system', 'Kidneys'],
        correct: 'Nervous system'
    },
    {
        hasContent: false,
        quest: 'Which organ does Hepatitis primarily affect?',
        choices: ['Stomach', 'Liver', 'Lungs', 'Heart'],
        correct: 'Liver' 
    },
    {
        hasContent: false,
        quest: 'A condition characterized by the uncontrolled growth of abnormal cells is called:',
        choices: ['Infection', 'Inflammation', 'Cancer', 'Injury'],
        correct: 'Cancer'
    },
    {
        hasContent: false,
        quest: 'High blood pressure is also known as:',
        choices: ['Atherosclerosis', 'Hypertension', 'Diabetes', 'Arthritis'],
        correct: 'Hypertension' 
    },
    {
        hasContent: false,
        quest: 'Which disease is characterized by chronic inflammation of the digestive tract?',
        choices: ['Crohn’s disease', 'Celiac disease', 'Irritable bowel syndrome (IBS)', 'Appendicitis'],
        correct: 'Crohn’s disease'
    },
    {
        hasContent: false,
        quest: 'Which disease is an autoimmune disorder that affects the joints?',
        choices: ['Osteoporosis', 'Rheumatoid arthritis', 'Gout', 'Lupus'],
        correct: 'Rheumatoid arthritis'
    },
    {
        hasContent: false,
        quest: 'Which skin infection is highly contagious and commonly seen in children?',
        choices: ['Eczema', 'Psoriasis', 'Impetigo', 'Acne'],
        correct: 'Impetigo'
    },
    {
        hasContent: false,
        quest: 'HIV attacks and weakens the:',
        choices: ['Immune system', 'Circulatory system', 'Nervous system', 'Digestive system'],
        correct: 'Immune system'
    },
    {
        hasContent: false, 
        quest: 'Which sexually transmitted disease (STD) can be caused by a bacteria?',
        choices: ['Gonorrhea', 'Genital herpes', 'HIV', 'HPV'],
        correct: 'Gonorrhea'
    },
    {
        hasContent: false,
        quest: 'A deficiency in vitamin D can lead to:',
        choices: ['Rickets', 'Scurvy', 'Anemia', 'Beriberi'],
        correct: 'Rickets'
    },    
    {
        hasContent: false, 
        quest: 'Which respiratory infection is caused by inflammation of the air sacs in the lungs?',
        choices: ['Bronchitis', 'Pneumonia', 'Asthma', 'Emphysema'],
        correct: 'Pneumonia'
    },
    {
        hasContent: false,
        quest: 'What type of infection is caused by microscopic organisms that live on other living things?',
        choices: ['Fungal infection', 'Parasitic infection', 'Bacterial infection', 'Viral infection'],
        correct: 'Parasitic infection'
    },
    {
        hasContent: false,
        quest: 'The leading cause of preventable blindness is:',
        choices: ['Cataracts', 'Glaucoma', 'Macular degeneration', 'Diabetic retinopathy'],
        correct: 'Cataracts'
    },
    {
        hasContent: false,
        quest: 'Which chronic disease affects the body’s ability to regulate blood sugar levels?',
        choices: ['Hypertension', 'Anemia', 'Diabetes', 'Arthritis'],
        correct: 'Diabetes'
    },
    {
        hasContent: false,
        quest: 'Which organ filters waste products from the blood?',
        choices: ['Liver', 'Kidneys', 'Spleen', 'Pancreas'],
        correct: 'Kidneys' 
    },
    {
        hasContent: false,
        quest: 'What is the term for a sudden blockage of blood flow to the heart?',
        choices: ['Heart attack', 'Stroke', 'Aneurysm', 'Cardiac arrest'],
        correct: 'Heart attack'
    },
    {
        hasContent: false,
        quest: 'Which mental health disorder is characterized by persistent sadness and loss of interest?',
        choices: ['Anxiety', 'Bipolar disorder', 'Depression', 'Schizophrenia'],
        correct: 'Depression'
    },
    {
        hasContent: false,
        quest: 'Lyme disease is transmitted through the bite of an infected:',
        choices: ['Mosquito', 'Tick', 'Flea', 'Spider'],
        correct: 'Tick'
    },
    {
        hasContent: false,
        quest: 'Cystic fibrosis is a genetic disorder that primarily affects the:',
        choices: ['Heart and blood vessels', 'Lungs and digestive system', 'Brain and spinal cord', 'Bones and joints'],
        correct: 'Lungs and digestive system'
    } 
    {
        hasContent: false,
        quest: 'The outermost layer of the skin is called the:',
        choices: ['Epidermis', 'Dermis', 'Hypodermis', 'Subcutaneous layer'],
        correct: 'Epidermis'
    },
    {
        hasContent: false,
        quest: 'The tough, fibrous protein that provides skin with its strength and flexibility is called:',
        choices: ['Keratin', 'Collagen', 'Elastin', 'Melanin'],
        correct: 'Collagen'
    },
    {
        hasContent: false,
        quest: 'The pigment responsible for skin color is:',
        choices: ['Melanin', 'Hemoglobin', 'Keratin', 'Bilirubin'],
        correct: 'Melanin'
    },
    {
        hasContent: false, 
        quest: 'Sweat glands are found in which layer of the skin?',
        choices: ['Epidermis', 'Dermis', 'Hypodermis', 'All of the above'],
        correct: 'Dermis'
    },
    {
        hasContent: false,
        quest: 'The layer of the skin that contains blood vessels, nerves, and hair follicles is the:',
        choices: ['Epidermis', 'Dermis', 'Hypodermis', 'Muscle'],
        correct: 'Dermis'
    },
    {
        hasContent: false,
        quest: 'The type of sweat gland that helps regulate body temperature is the:',
        choices: ['Eccrine gland', 'Apocrine gland', 'Sebaceous gland', 'Ceruminous gland'],
        correct: 'Eccrine gland'
    },
    {
        hasContent: false,
        quest: 'The fatty layer of skin that provides insulation and cushioning is the:',
        choices: ['Dermis', 'Epidermis', 'Hypodermis', 'Keratin layer'],
        correct: 'Hypodermis'
    },
    {
        hasContent: false,
        quest: 'Sebaceous glands produce:',
        choices: ['Oil (sebum)', 'Sweat', 'Melanin', 'Keratin'],
        correct: 'Oil (sebum)'
    },
    {
        hasContent: false, 
        quest: 'The cells that produce melanin are called:',
        choices: ['Melanocytes', 'Keratinocytes', 'Fibroblasts', 'Langerhans cells'],
        correct: 'Melanocytes'
    },
    {
        hasContent: false,
        quest: 'Which of these is NOT a function of the skin?',
        choices: ['Protection', 'Temperature regulation', 'Vitamin D synthesis', 'Digestion'],
        correct: 'Digestion'
    },
    {
        hasContent: false,
        quest: 'Hair follicles originate in which layer of the skin?',
        choices: ['Dermis', 'Epidermis', 'Hypodermis', 'Fascia'],
        correct: 'Dermis'
    },
    {
        hasContent: false,
        quest: 'The most common type of skin cancer is:',
        choices: ['Basal cell carcinoma', 'Squamous cell carcinoma', 'Melanoma', 'Lymphoma'],
        correct: 'Basal cell carcinoma'
    },
    {
        hasContent: false, 
        quest: 'Acne is caused by inflammation of the:',
        choices: ['Sweat glands', 'Sebaceous glands', 'Hair follicles', 'Nerve endings'],
        correct: 'Sebaceous glands'
    },
    {
        hasContent: false,
        quest: 'Fingernails and toenails are made primarily of:',
        choices: ['Melanin', 'Collagen', 'Keratin', 'Calcium'],
        correct: 'Keratin'
    },
    {
        hasContent: false,
        quest: 'The protein that gives skin its elasticity is called:',
        choices: ['Keratin', 'Collagen', 'Elastin', 'Melanin'],
        correct: 'Elastin'
    } 
    {
        hasContent: false,
        quest: 'Nootropics are substances that are purported to:',
        choices: ['Enhance cognitive function', 'Cure chronic diseases', 'Induce muscle growth', 'Reduce inflammation'],
        correct: 'Enhance cognitive function'
    },
    {
        hasContent: false,
        quest: 'Which of these is a common category of nootropics?',
        choices: ['Vitamins', 'Stimulants', 'Hormones', 'Antibiotics'],
        correct: 'Stimulants' 
    },
    {
        hasContent: false,
        quest: 'A popular natural nootropic found in tea and coffee is:',
        choices: ['Ginseng', 'Caffeine', 'Ginkgo Biloba', 'Creatine'],
        correct: 'Caffeine'
    },
    {
        hasContent: false,
        quest: 'Racetams are a class of nootropics that are believed to affect which neurotransmitter?',
        choices: ['Dopamine', 'Serotonin', 'Acetylcholine', 'GABA'],
        correct: 'Acetylcholine'
    },
    {
        hasContent: false, 
        quest: 'One potential side effect of nootropics can be:',
        choices: ['Headaches', 'Improved sleep', 'Muscle cramps', 'Increased appetite'],
        correct: 'Headaches'
    },
    {
        hasContent: false,
        quest: 'Before starting any nootropic supplement, it’s essential to:',
        choices: ['Consult a doctor', 'Read online reviews', 'Ask a friend for recommendations', 'Compare prices'],
        correct: 'Consult a doctor'
    },
    {
        hasContent: false,
        quest: 'Nootropics are often marketed to improve:',
        choices: ['Memory and focus', 'Athletic performance', 'Skin health', 'Joint flexibility'],
        correct: 'Memory and focus'
    },
    {
        hasContent: false,
        quest: 'The effectiveness of nootropics is:',
        choices: ['Proven by extensive research', 'Supported by some studies, but needs more research', 'Based purely on anecdotal evidence', 'Generally ineffective'],
        correct: 'Supported by some studies, but needs more research'
    },
    {
        hasContent: false,
        quest: 'Long-term safety of many nootropic supplements is:',
        choices: ['Well-established', 'Largely unknown', 'Considered highly dangerous', 'Not a concern'],
        correct: 'Largely unknown'
    },
    {
        hasContent: false, 
        quest: 'Nootropics should NOT be considered a replacement for:',
        choices: ['A healthy lifestyle', 'Medical treatment', 'Recreational drugs', 'Energy drinks'],
        correct: 'A healthy lifestyle' 
    },
    {
        hasContent: false, 
        quest: 'Nootropics should NOT be considered a replacement for:',
        choices: ['A healthy lifestyle', 'Medical treatment', 'Recreational drugs', 'Energy drinks'],
        correct: 'A healthy lifestyle' 
    },
    {
        hasContent: false,
        quest: 'Racetams are a class of nootropics that are believed to affect which neurotransmitter?',
        choices: ['Dopamine', 'Serotonin', 'Acetylcholine', 'GABA'],
        correct: 'Acetylcholine'
    }
         
];
const astronomyQuestions = [
    {
        hasContent: false,
        quest: 'Nebulas are made of:',
        choices: ['Gas and dust', 'Stars', 'Planets', 'Black holes'],
        correct: 'Gas and dust'
    },
    {
        hasContent: false,
        quest: 'How do emission nebulae glow?',
        choices: ['Reflected light', 'Hot, ionized gas', 'Nuclear fusion', 'Cold dust'],
        correct: 'Hot, ionized gas'
    },
    {
        hasContent: false,
        quest: 'Planetary nebulas form from:',
        choices: ['Dying stars', 'Star explosions', 'Colliding galaxies', 'Dark matter'],
        correct: 'Dying stars'
    },
    {
        hasContent: false, 
        quest: 'What are "star nurseries"?',
        choices: ['Planetary nebulae', 'Dense regions in nebulae', 'Young star clusters', 'Small galaxies'],
        correct: 'Dense regions in nebulae'
    },
    {
        hasContent: false,
        quest: 'The Orion Nebula is a:',
        choices: ['Emission nebula', 'Planetary nebula', 'Supernova remnant', 'Dark nebula'],
        correct: 'Emission nebula'
    },
    {
        hasContent: false,
        quest: 'The Ring Nebula is a:',
        choices: ['Supernova remnant', 'Planetary nebula', 'Dark nebula', 'Spiral galaxy'],
        correct: 'Planetary nebula'
    },
    {
        hasContent: false,
        quest: 'Why are reflection nebulae blue?',
        choices: ['Blue gas', 'Scattered light', 'Hot stars nearby', 'Doppler shift'],
        correct: 'Scattered light'
    },
    {
        hasContent: false,
        quest: 'Dark nebulae are:',
        choices: ['Invisible', 'Cold', 'Dense dust clouds', 'Black holes'],
        correct: 'Dense dust clouds'
    },
    {
        hasContent: false,
        quest: 'Nebula colors come from:',
        choices: ['Elements present', 'Temperature', 'Age', 'All of the above'],
        correct: 'All of the above'
    },
    {
        hasContent: false, 
        quest: 'How do we see nebulae better?',
        choices: ['Naked eye', 'Binoculars', 'Specialized telescopes', 'Radio telescopes'],
        correct: 'Specialized telescopes'
    },
    {
        hasContent: false,
        quest: 'The Helix Nebula is:',
        choices: ['Supernova remnant', 'Emission nebula', 'Planetary nebula', 'Star cluster'],
        correct: 'Planetary nebula'
    },
    {
        hasContent: false,
        quest: 'Where are the Pillars of Creation?',
        choices: ['Orion Nebula', 'Eagle Nebula', 'Crab Nebula', 'Andromeda'],
        correct: 'Eagle Nebula'
    },
    {
        hasContent: false,
        quest: 'Supernova remnants are:',
        choices: ['Emission nebulae', 'Planetary nebulae', 'Dark nebulae', 'Spiral galaxies'],
        correct: 'Emission nebulae'
    },
    {
        hasContent: false, 
        quest: 'Nebulas are important for:',
        choices: ['Star formation', 'Galactic recycling', 'Planetary systems', 'All of the above'],
        correct: 'All of the above'
    },
    {
        hasContent: false,
        quest: 'The word "nebula" means:',
        choices: ['Star', 'Galaxy', 'Cloud', 'Planet'],
        correct: 'Cloud'
    },
    {
        hasContent: false,
        quest: 'A famous dark nebula is the:',
        choices: ['Horsehead Nebula', 'Orion Nebula', 'Crab Nebula', 'Ring Nebula'],
        correct: 'Horsehead Nebula'
    },
    {
        hasContent: false,
        quest: 'Nebulas can be studied using:',
        choices: [ 'Visible light', 'Infrared', 'Radio waves', 'All of the above'], 
        correct: 'All of the above'
    },
    {
        hasContent: false,
        quest: 'The Hubble Space Telescope has captured stunning images of:',
        choices: ['Nebulas', 'Galaxies', 'Black holes', 'All of the above'],
        correct: 'All of the above'
    },
    {
        hasContent: false, 
        quest: 'Some nebulae are visible with:',
        choices: ['Naked eye', 'Binoculars', 'Small telescopes', 'Only large telescopes'],
        correct: 'Binoculars'
    },
    {
        hasContent: false,
        quest: 'Shapes of nebulae can resemble:',
        choices: ['Animals', 'Geometric patterns', 'Mythical figures', 'All of the above'],
        correct: 'All of the above'
    }
    {
        hasContent: false,
        quest: 'Galaxies are:',
        choices: ['Individual stars', 'Clusters of planets', 'Giant collections of stars, gas, and dust', 'Small nebulas'],
        correct: 'Giant collections of stars, gas, and dust'
    },
    {
        hasContent: false,
        quest: 'Our galaxy, the Milky Way, is a:',
        choices: ['Spiral galaxy', 'Elliptical galaxy', 'Irregular galaxy', 'Dwarf galaxy'],
        correct: 'Spiral galaxy'
    },
    {
        hasContent: false,
        quest: 'The primary force holding a galaxy together is:',
        choices: ['Gravity', 'Electromagnetism', 'Dark matter', 'Nuclear fusion'],
        correct: 'Gravity'
    },
    {
        hasContent: false, 
        quest: 'The supermassive object at the center of most galaxies is a:',
        choices: ['Neutron star', 'White dwarf', 'Black hole', 'Giant star'],
        correct: 'Black hole'
    },
    {
        hasContent: false,
        quest: 'Elliptical galaxies are mostly made of:',
        choices: ['Old stars', 'Young stars', 'Gas and dust', 'Dark matter'],
        correct: 'Old stars'
    },
    {
        hasContent: false,
        quest: 'Spiral galaxies have arms that contain:',
        choices: ['Young stars and nebulae', 'Old stars only', 'Black holes', 'Empty space'],
        correct: 'Young stars and nebulae'
    },
    {
        hasContent: false,
        quest: 'Irregular galaxies often result from:',
        choices: ['Galactic collisions', 'Supernova explosions', 'The birth of new stars', 'Dark matter interactions'],
        correct: 'Galactic collisions'
    },
    {
        hasContent: false,
        quest: 'The Andromeda Galaxy is the closest large galaxy to our own and is:',
        choices: ['Spiral', 'Elliptical', 'Irregular', 'Dwarf'],
        correct: 'Spiral'
    },
    {
        hasContent: false, 
        quest: 'Astronomers estimate the universe contains:',
        choices: ['Millions of galaxies', 'Billions of galaxies', 'Trillions of galaxies', 'An infinite number of galaxies'],
        correct: 'Billions of galaxies'
    },
    {
        hasContent: false,
        quest: 'Galaxies tend to group together in:',
        choices: ['Clusters', 'Constellations', 'Nebulas', 'Solar systems'],
        correct: 'Clusters'
    },
    { 
        hasContent: false,
        quest: 'The Hubble Space Telescope revolutionized our understanding of:',
        choices: ['Galaxies', 'Planets', 'Black holes', 'Stars'],
        correct: 'Galaxies'
    },
    {
        hasContent: false,
        quest:  'The redshift of a galaxy tells us:',
        choices: ['Its age', 'Its composition', 'How far away it is', 'Its size'],
        correct: 'How far away it is'
    },
    {  
        hasContent: false,
        quest: 'Dark matter is:',
        choices: ['Invisible matter in galaxies', 'The same as black holes', 'Made up of dead stars', 'Easily detectable'],
        correct: 'Invisible matter in galaxies'
    },
    {
        hasContent: false,
        quest: 'Active galactic nuclei are powered by:',
        choices: ['Supermassive black holes', 'Star clusters', 'Dark energy', 'Supernovae'],
        correct: 'Supermassive black holes'
    },
    {
        hasContent: false,
        quest: 'One way to study distant galaxies is through:',
        choices: ['Gravitational lensing', 'Radio telescopes', 'Sending probes', 'Naked-eye observation'],
        correct: 'Gravitational lensing'
    },
    { 
        hasContent: false,
        quest: 'A Dobsonian telescope is a type of:',
        choices: ['Reflecting telescope', 'Refracting telescope', 'Radio telescope', 'Solar telescope'],
        correct: 'Reflecting telescope'
    },
    {
        hasContent: false,
        quest: 'A telescope with high magnification power:',
        choices: ['Makes objects appear larger', 'Collects more light', 'Has better resolution', 'Is ideal for wide-field views'],
        correct: 'Makes objects appear larger'
    },
    {
        hasContent: false, 
        quest: 'One advantage of space telescopes is:',
        choices: ['No atmospheric interference', 'Closer proximity to stars', 'Larger size', 'Ability to observe radio waves'],
        correct: 'No atmospheric interference'
    },
    {
        hasContent: false,
        quest: 'To combat atmospheric distortion, modern telescopes often use:',
        choices: ['Adaptive optics', 'Larger apertures', 'Longer exposure times', 'Filters'],
        correct: 'Adaptive optics'
    },
    {
        hasContent: false,
        quest: 'The Hubble Space Telescope is a:',
        choices: ['Reflecting telescope', 'Refracting telescope', 'Radio telescope', 'X-ray telescope'],
        correct: 'Reflecting telescope'
    },
    {
        hasContent: false,
        quest: 'Radio telescopes detect:',
        choices: ['Radio waves', 'Infrared light', 'Ultraviolet light', 'X-rays'],
        correct: 'Radio waves'
    },
    {
        hasContent: false,
        quest: 'The size of a telescope's main lens or mirror is its:',
        choices: ['Aperture', 'Focal length', 'Magnification', 'Resolution'],
        correct: 'Aperture'
    },
    {
        hasContent: false, 
        quest: 'A major advantage of reflecting telescopes is:',
        choices: ['No chromatic aberration', 'Smaller size', 'Ease of construction', 'Better for terrestrial viewing'],
        correct: 'No chromatic aberration'
    },
    {
        hasContent: false,
        quest: 'Refracting telescopes use _____ to focus light.',
        choices: ['Mirrors', 'Lenses', 'Prisms', 'Solar panels'],
        correct: 'Lenses'
    },
    {
        hasContent: false,
        quest: 'The primary mirror in a reflecting telescope is:',
        choices: ['Flat', 'Concave', 'Convex', 'Cylindrical'],
        correct: 'Concave'
    },
    {
        hasContent: false,
        quest: 'Telescopes primarily function by:',
        choices: ['Magnifying distant objects', 'Collecting and focusing light', 'Measuring distances in space', 'Generating images'],
        correct: 'Collecting and focusing light'
    },

];
const techQuestions = [// Question 1
{
    hasContent: false,
    quest: 'The first calculating device widely used was the:',
    choices: ['Abacus', 'Slide Rule', 'ENIAC', 'Napier Bones'],
    correct: 'Abacus'
},
// Question 2
{
    hasContent: false,
    quest: 'Who proposed the concept of a stored program computer?',
    choices: ['Ada Lovelace', 'Blaise Pascal', 'John von Neumann', 'Alan Turing'],
    correct: 'John von Neumann'
},
// Question 3
{
    hasContent: false,
    quest: 'The first generation of computers relied on:',
    choices: ['Transistors', 'Microchips', 'Vacuum Tubes', 'ICs'],
    correct: 'Vacuum Tubes'
},
// Question 4
{
    hasContent: false,
    quest: 'Which generation saw the introduction of integrated circuits?',
    choices: ['First', 'Second', 'Third', 'Fourth'],
    correct: 'Third'
},
// Question 5
{
    hasContent: false,
    quest: 'The invention of the _____________ revolutionized computing.', 
    choices: ['Keyboard', 'Microprocessor', 'Touchscreen', 'Hard Drive'],
    correct: 'Microprocessor'
},
// Question 6
{
    hasContent: false,
    quest: 'GUI stands for:',
    choices: ['Global User Index', 'Graphical User Interface', 'General Usage Input', 'Graphic Utility Interface' ],
    correct: 'Graphical User Interface'
},
// Question 7
{
    hasContent: false,
    quest: 'Apple's Macintosh computer popularized the:',
    choices: ['GUI', 'Text-based OS', 'Command Line', 'Web Browser'],
    correct: 'GUI'
},
// Question 8
{
    hasContent: false,
    quest: 'What type of device is a smartphone?',
    choices: ['Laptop', 'Supercomputer', 'Minicomputer', 'Microcomputer'],
    correct: 'Microcomputer'
},
// Question 9
{
    hasContent: false,
    quest: 'Computers used for weather forecasting are:',
    choices: ['Minicomputers', 'Mainframes', 'Supercomputers', 'Laptops'],
    correct: 'Supercomputers'
},
// Question 10
{
    hasContent: false,
    quest: 'The "brain" of a computer is the:',
    choices: ['RAM', 'CPU', 'Hard Drive', 'Monitor'],
    correct: 'CPU'
},
// Question 11
{
    hasContent: false,
    quest: 'Computers process data in what form?',
    choices: ['Decimal', 'Morse Code', 'Pictures', 'Binary'], 
    correct: 'Binary'
},
// Question 12
{
    hasContent: false,
    quest: 'Computers used in everyday life are often:',
    choices: ['Microcomputers', 'Supercomputers', 'Desktops', 'Mainframes'],
    correct: 'Microcomputers' 
},
// Question 13
{
    hasContent: false,
    quest: 'ENIAC was the first general-purpose _____ computer.',
    choices: ['Analog', 'Mechanical', 'Electronic', 'Hybrid'],
    correct: 'Electronic'
},
// Question 14
{
    hasContent: false,
    quest: 'Charles Babbage is known as the "Father of the _____".',
    choices: ['Internet', 'Computer', 'Laptop', 'Software'],
    correct: 'Computer'
},
// Question 15 
{
    hasContent: false, 
    quest: 'Who is considered the first computer programmer?',
    choices: ['Alan Turing', 'Ada Lovelace', 'Steve Jobs', 'Grace Hopper'],
    correct: 'Ada Lovelace'
},
{
    hasContent: false,
    quest: 'Smartwatches primarily connect to your...',
    choices: ['Television', 'Car', 'Smartphone', 'Laptop'],
    correct: 'Smartphone'
},
{
    hasContent: false,
    quest: 'Which health metric do smartwatches often track?',
    choices: ['Blood pressure', 'Heart rate', 'Cholesterol', 'Reflexes'],
    correct: 'Heart rate'
},
{
    hasContent: false,
    quest: 'Besides the time, smartwatches often display...',
    choices: ['Weather', 'Notifications', 'Maps', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'Smartwatches can be used to...',
    choices: ['Track steps', 'Make calls', 'Play music', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'A popular smartwatch brand is...',
    choices: ['Fitbit', 'Samsung', 'Apple', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'Smartwatches usually need to be charged...',
    choices: ['Daily', 'Weekly', 'Monthly', 'Annually'],
    correct: 'Daily'
},
{
    hasContent: false,
    quest: 'Can smartwatches be used for contactless payments?',
    choices: ['Always', 'Sometimes', 'Never', 'Only with coupons'],
    correct: 'Sometimes' 
},
{
    hasContent: false,
    quest: 'Can I use a smartwatch without a phone nearby?',
    choices: ['Always', 'Never', 'Depends on the model', 'Only if it has WiFi'],
    correct: 'Depends on the model'
},
{
    hasContent: false,
    quest: 'Smartwatches typically use what type of display?',
    choices: ['CRT', 'LCD', 'LED', 'OLED'],
    correct: 'OLED'
},
{
    hasContent: false,
    quest: 'A smartwatch can help you find a lost...',
    choices: ['Pet', 'Wallet', 'Phone', 'Car'],
    correct: 'Phone'
},
{
    hasContent: false,
    quest: 'One benefit of a smartwatch is...',
    choices: ['Reduced phone use', 'Better sleep', 'More calories burned', 'Finding lost items'],
    correct: 'Reduced phone use'
},
{
    hasContent: false,
    quest: 'Which of these is NOT usually found on a smartwatch?',
    choices: ['Camera', 'Heart rate monitor', 'GPS', 'Microphone'],
    correct: 'Camera'
},
{
    hasContent: false,
    quest: 'Smartwatches can help you stay organized with...',
    choices: ['Reminders', 'Alarms', 'Calendar events', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'Some smartwatches can measure advanced metrics like...',
    choices: ['Blood oxygen', 'Stress levels', 'ECG', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'Is every smartwatch waterproof?',
    choices: ['Yes', 'No', 'Only premium ones', 'Depends on the brand'],
    correct: 'No' 
},
{
    hasContent: false,
    quest: 'AI tools can be used to generate:',
    choices: ['Images', 'Text', 'Music', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'A popular AI image generation tool is:', 
    choices: ['ChatGPT', 'DALL-E', 'LaMDA', 'Midjourney'],
    correct: 'DALL-E'
},
{
    hasContent: false,
    quest: 'AI writing tools can help with:',
    choices: ['Grammar', 'Blog Posts', 'Emails', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'AI chatbots are often used for:',
    choices: ['Customer service', 'Tech support', 'Companionship', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'AI tools can help translate:',
    choices: ['Images', 'Text', 'Code', 'Both A & B'],
    correct: 'Both A & B'
},
{
    hasContent: false,
    quest: 'AI in healthcare can assist with:',
    choices: ['Diagnosis', 'Surgery', 'Drug discovery', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'A potential risk of AI tools is:',
    choices: ['Creativity', 'Efficiency', 'Bias', 'Speed'],
    correct: 'Bias'
},
{
    hasContent: false, 
    quest: 'To use AI tools effectively, you need:',
    choices: ['Coding skills', 'Clear prompts', 'Expensive hardware', 'None of the above'],
    correct: 'Clear prompts'
},
{
    hasContent: false,
    quest: 'AI in finance can help with:',
    choices: ['Fraud detection', 'Market analysis', 'Portfolio management', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'AI tools are powered by:',
    choices: ['Machine learning', 'Algorithms', 'Data', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'AI for music can compose:',
    choices: ['Lyrics', 'Melodies', 'Full songs', 'Sound effects'],
    correct: 'Full songs' 
},
{
    hasContent: false,
    quest: 'AI tools cannot replace human:', 
    choices: ['Effort', 'Creativity', 'Jobs', 'Hard work'],
    correct: 'Creativity'
},
{
    hasContent: false,
    quest: 'AI in education can provide:',
    choices: ['Personalized learning', 'Automated grading', 'Tutoring', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'Does AI have emotions?',
    choices: ['Yes', 'No', 'Sometimes', 'Depends on the AI'],
    correct: 'No'
},
{
    hasContent: false,
    quest: 'A famous example of an AI language model is:',
    choices: ['Stable Diffusion', 'LaMDA', 'DALL-E 2', 'Midjourney' ],
    correct: 'LaMDA' 
},
{
    hasContent: false,
    quest: 'Which of these is primarily a text-based AI chatbot?',
    choices: ['DALL-E 2', 'ChatGPT', 'Midjourney', 'Stable Diffusion'],
    correct: 'ChatGPT'
},
{
    hasContent: false,
    quest: 'LaMDA is an AI language model developed by:',
    choices: ['OpenAI', 'Google', 'Microsoft', 'Meta'],
    correct: 'Google'
},
{
    hasContent: false,
    quest: 'An AI tool known for realistic image generation is:',
    choices: ['ChatGPT', 'Bard', 'DALL-E 2', 'LaMDA'],
    correct: 'DALL-E 2'
},
{
    hasContent: false,
    quest: 'Which AI could help you write a marketing email?',
    choices: ['Gemini Pro', 'Sora', 'ChatGPT', 'All of the above'],
    correct: 'All of the above' 
},
{
    hasContent: false,
    quest: 'AI models learn and improve by:', 
    choices: ['Analyzing data', 'Following instructions', 'Writing code', 'Magic'],
    correct: 'Analyzing data'
},
{
    hasContent: false,
    quest: 'To get the best results from AI tools, it's important to:',
    choices: ['Use technical terms', 'Provide clear prompts', 'Pay for premium versions', 'Wait patiently'],
    correct: 'Provide clear prompts'
},
{
    hasContent: false,
    quest: 'A potential ethical concern with AI is the spread of:',
    choices: ['Misinformation', 'Creativity', 'Productivity', 'Kindness'],
    correct: 'Misinformation' 
},
{
    hasContent: false,
    quest: 'Sora is an example of an AI...',
    choices: ['Art generator', 'Chatbot', 'Virtual assistant', 'Search engine'],
    correct: 'Virtual assistant'
},
{
    hasContent: false,
    quest: 'Which of these is NOT an AI tool?',
    choices: ['Canva', 'DALL-E Mini', 'ChatGPT', 'Jasper'],
    correct: 'Canva' 
},
{
    hasContent: false,
    quest: 'You might use an AI coding tool to:',
    choices: ['Suggest variable names', 'Debug code', 'Write documentation', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'AI generated content can sometimes be detected by:',
    choices: ['Watermarks', 'Unnatural phrasing', 'Lack of originality', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'Gemini Pro is a product aimed at:',
    choices: ['Artists', 'Writers', 'Businesses', 'Coders'],
    correct: 'Businesses'
},
{
    hasContent: false,
    quest: 'A current limitation of AI tools is their:',
    choices: ['Cost', 'Need for human input', 'Understanding of context', 'All of the above'], 
    correct: 'Understanding of context'
},
{
    hasContent: false,
    quest: 'Bard is a conversational AI developed by:',
    choices: ['Google', 'Amazon', 'OpenAI', 'Microsoft'],
    correct: 'Google' 
},
{
    hasContent: false,
    quest: "AI is likely to have a significant impact on the future of:",
    choices: ['Art', 'Healthcare', 'Transportation', 'All of the above'],
    correct: 'All of the above' 
},
{
    hasContent: false,
    quest: "The WWW stands for:",
    choices: ["World Wide Web", "Wireless Web Works", "Wild Wild West", "Web Weather Warning"],
    correct: "World Wide Web"
},
{
    hasContent: false,
    quest: "The first web browser was called:",
    choices: ["Netscape Navigator", "Internet Explorer", "WorldWideWeb", "Mosaic"],
    correct: "WorldWideWeb"
},
{
    hasContent: false,
    quest: "Internet speed is often measured in:",
    choices: ["Kilobytes", "Gigahertz", "Volts", "Megabytes per second"],
    correct: "Megabytes per second"
},
{
    hasContent: false,
    quest: 'HTTP stands for:',
    choices: ['HyperText Transfer Protocol', 'High Tech Text Process', 'Hyperlink Text Translation', 'None of the above'],
    correct: 'HyperText Transfer Protocol'
},
{
    hasContent: false,
    quest: "A website's address is called its:",
    choices: ["IP Address", "URL", "Domain Name", "HTML code"],
    correct: "URL"
},
{
    hasContent: false,
    quest: "What does a firewall do?",
    choices: ['Blocks viruses', 'Prevents unauthorized access', 'Speeds up downloads', 'Encrypts data'],
    correct: 'Prevents unauthorized access'
},
{
    hasContent: false,
    quest: "A search engine uses what to find web pages?",
    choices: ['Keywords', 'Algorithms', 'Web crawlers', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: "Cloud computing stores data:",
    choices: ['On your local computer', 'In a remote data center', 'On a thumb drive', 'In the sky' ],
    correct: 'In a remote data center'
},
{
    hasContent: false,
    quest: "Which is NOT a social media platform?",
    choices: ['Facebook', 'Google', 'Twitter', 'Instagram'],
    correct: 'Google'
},
{
    hasContent: false,
    quest: "HTML is used to:",
    choices: ['Style websites', 'Add interactivity', 'Structure web content', 'Create images'],
    correct: 'Structure web content'
},
{
    hasContent: false,
    quest: 'Online safety includes protecting your:',
    choices: ['Passwords', 'Personal information', 'Browsing history', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: "What is the Internet of Things (IoT)?",
    choices: ['Smart appliances', 'Wearable devices', 'Connected devices', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: 'A common way to stay updated on websites is through:', 
    choices: ['Web Crawlers', 'Social Media', 'RSS Feeds', 'Email subscriptions'],
    correct: 'RSS Feeds'
},
{
    hasContent: false,
    quest: "Which service is primarily used for video sharing?",
    choices: ['YouTube', 'Twitter', 'Flickr', 'Dropbox'],
    correct: 'YouTube'
},
{
    hasContent: false,
    quest: "E-commerce refers to:",
    choices: ['Online banking', 'Email marketing', 'Digital advertising', 'Buying and selling online'],
    correct: 'Buying and selling online'
},
{
    hasContent: false,
    quest: "Which language styles the appearance of websites?",
    choices: ["HTML", "CSS", "JavaScript", "Python"],
    correct: "CSS"
},
{
    hasContent: false,
    quest: "JavaScript is primarily used to add... to websites.",
    choices: ["Structure", "Design", "Interactivity", "Databases"],
    correct: "Interactivity"
},
{
    hasContent: false,
    quest: "A popular JavaScript library/framework is:",
    choices: ["React", "Django", "Flask", ".NET"],
    correct: "React"
},
{
    hasContent: false,
    quest: "HTML tags are enclosed in:",
    choices: ["Curly braces {}", "Parentheses ()", "Angle brackets <>", "Square brackets []"],
    correct: "Angle brackets <>"
},
{
    hasContent: false,
    quest: 'What does the "DOM" stand for?',
    choices: ['Document Object Model', 'Digital Object Map', 'Data Organization Model', 'Direct Object Manipulation'],
    correct: 'Document Object Model'
},
{
    hasContent: false,
    quest: "Responsive web design ensures websites work on:",
    choices: ["Mobile devices", "Different screen sizes", "All browsers", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "A common backend language for web development is:",
    choices: ["PHP", "Java", "C#", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Which database type is often used in web apps?",
    choices: ['Excel', 'SQL', 'Flat-file', 'CSV'],
    correct: 'SQL'
},
{
    hasContent: false,
    quest: "HTTP requests methods include:",
    choices: ['GET', 'POST', 'PUT', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: "Websites use cookies to:",
    choices: ['Store user data', 'Track browsing', 'Customize experiences', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: "Which is NOT a web development framework?",
    choices: ['WordPress', 'Bootstrap', 'Ruby on Rails', 'Angular'],
    correct: 'WordPress' 
},
{
    hasContent: false,
    quest: "Accessibility in web design means:",
    choices: ['Faster loading sites', 'Sites usable by everyone', 'Pretty colors', 'Responsive layouts'], 
    correct: 'Sites usable by everyone'
},
{
    hasContent: false,
    quest: "Version control systems (like Git) help developers:",
    choices: ['Track changes', 'Collaborate', 'Revert to earlier versions', 'All of the above'],
    correct: 'All of the above'
},
{
    hasContent: false,
    quest: "Cross-browser compatibility in web development means:",
    choices: ['Sites work on different browsers', 'Sites use multiple CSS files', 'Sites work on mobile and desktop', 'Sites are translated into multiple languages'],
    correct: 'Sites work on different browsers'
},
{
    hasContent: false,
    quest: "SEO stands for:",
    choices: ['Site Engine Optimization', 'Search Element Optimization', 'Search Engine Optimization', 'Search Engine Ordering'], 
    correct: 'Search Engine Optimization'
},
{
    hasContent: false,
    quest: "Which web era was primarily about reading information?",
    choices: ["Web 0.5", "Web 1.0", "Web 2.0", "Web 3.0"],
    correct: "Web 1.0"
},
{
    hasContent: false,
    quest: "Web 2.0 is characterized by:", 
    choices: ['Static websites', "User interaction", 'Decentralization', 'AI-powered content'],
    correct: "User interaction"
},
{
    hasContent: false,
    quest: "Which technology is NOT  associated with Web 1.0?",
    choices: ['Email', 'Blogs', 'HTML', 'Static web pages'],
    correct: 'Blogs'
},
{
    hasContent: false,
    quest: "Social media platforms are examples of:",
    choices: ["Web 1.0", "Web 2.0", "Web 3.0", "Web 1.5"],
    correct: "Web 2.0"
},
{
    hasContent: false,
    quest: 'Wikis and collaborative websites demonstrate:',
    choices: ['Web 1.0', 'Web 2.0', 'Web 3.0', 'None of the above'],
    correct: 'Web 2.0'
},
{
    hasContent: false,
    quest: "A key focus of Web 3.0 is:",
    choices: ['Centralization', 'Social Networking', 'Read-only web', 'Decentralization'],
    correct: "Decentralization"
},
{
    hasContent: false,
    quest: "Web 3.0 aims to be more:",
    choices: ['Intelligent', 'User-controlled', 'Semantic', 'All of the above'],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Cryptocurrencies are associated with which web era?",
    choices: ['Web 1.0', 'Web 2.0', 'Web 3.0', 'All of the above'],
    correct: 'Web 3.0'
},
{
    hasContent: false,
    quest: "Which technology is key to Web 3.0's ownership model?",
    choices: ['Cloud Computing', 'AR/VR', 'Blockchain', 'Social Media'],
    correct: 'Blockchain'
},
{
    hasContent: false,
    quest: "NFTs are a prominent feature in:",
    choices: ['Web 1.0', 'Web 2.0', 'Web 3.0', 'None of the above'],
    correct: 'Web 3.0'
},
{
    hasContent: false,
    quest: 'Which is NOT a potential benefit of Web 3.0?',
    choices: ['Greater privacy', 'Less corporate control', 'Censorship resistance', 'Enhanced creativity'],
    correct: 'Censorship resistance' 
},
{
    hasContent: false,
    quest: "A challenge Web 3.0 faces is:",
    choices: ['Scalability', 'User adoption', 'Accessibility', 'All of the above'],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "The Semantic Web is a vision for:",
    choices: ['Web 1.0', 'Web 2.0', 'Web 3.0', 'Web 4.0'],
    correct: 'Web 3.0'
},
{
    hasContent: false,
    quest: "Which era is about websites focused on user experience?",
    choices: ['Web 1.0', 'Web 2.0', 'Web 3.0', 'All of the above'],
    correct: 'Web 2.0'
},
{ 
    hasContent: false,
    quest: "Web 3.0 primarily aims to address issues of:",
    choices: ['Speed', 'Design', 'Ownership and control', 'Accessibility'], 
    correct: 'Ownership and control'
}
];
const cinemaQuestions = [//General and History
{
    hasContent: false,
    quest: "The Cannes Film Festival takes place in:",
    choices: ["Venice, Italy", "Paris, France", "Cannes, France", "Berlin, Germany"],
    correct: "Cannes, France"
},
{
    hasContent: false,
    quest: "The top award at Cannes is the:",
    choices: ["Silver Bear", "Golden Lion", "Palme d'Or", "Academy Award"],
    correct: "Palme d'Or"
},
{
    hasContent: false,
    quest: "The Cannes Film Festival is held annually in which month?",
    choices: ["March", "May", "August", "October"],
    correct: "May"
},
{
    hasContent: false,
    quest: "Cannes was inspired by the rivalry with this other festival:",
    choices: ["Venice Film Festival", "Toronto Film Festival", "Berlin Film Festival", "Sundance Film Festival"],
    correct: "Venice Film Festival" 
},

// Sections and Awards
{
    hasContent: false,
    quest: "The main competition at Cannes is called:",
    choices: ["In Competition", "Official Selection", "Un Certain Regard", "Critics' Week"],
    correct: "In Competition"
},
{
    hasContent: false,
    quest: 'The section focusing on innovative, non-traditional films is:',
    choices: ['Cannes Classics', 'Un Certain Regard', 'Directors Fortnight',  'Short Films'],
    correct: 'Un Certain Regard'
},
{
    hasContent: false,
    quest: "Which award recognizes the best short film at Cannes?",
    choices: ["Palme d'Or", "Short Film Palme d'Or", "Grand Prix", "Golden Camera"],
    correct: "Short Film Palme d'Or"
},
{
    hasContent: false,
    quest: "The award for best first feature film is called the:",
    choices: ["Debut Prize", "Camera d'Or", "Young Talent Award", "Golden Lion"],
    correct: "Camera d'Or"
},

// Famous Moments
{ 
    hasContent: false,
    quest: "Which director won the Palme d'Or for 'Pulp Fiction' in 1994?",
    choices: ["Steven Spielberg", "Martin Scorsese", "Quentin Tarantino", "Francis Ford Coppola"],
    correct: "Quentin Tarantino"
},
{
    hasContent: false,
    quest: "Which controversial film won the Palme d'Or in 2013?",
    choices: ["Spring Breakers", "The Act of Killing", "Blue is the Warmest Color", "Only God Forgives"],
    correct: "Blue is the Warmest Color" 
},

// Beyond the Films
{
    hasContent: false,
    quest: "The red carpet at Cannes is famous for:",
    choices: ["Celebrity fashion", "Film screenings", "Award ceremonies", "Protests"],
    correct: "Celebrity fashion" 
},
{
    hasContent: false,
    quest: "Cannes is an important market for:",
    choices: ["Buying & selling films", "Celebrity spotting", "Beach vacations", "French cuisine"],
    correct: "Buying & selling films" 
},

// Diversity and the Future
{
    hasContent: false,
    quest: "Cannes has been criticized for a lack of:",
    choices: ["Female directors", "International films", "Blockbuster movies", "Short films"],
    correct: "Female directors" 
},
{
    hasContent: false,
    quest: "To address diversity, Cannes has implemented what?",
    choices: ["Gender parity pledge", "Quotas for female-directed films", "A  new 'Women in Film' section", "All of the above"],
    correct: "Gender parity pledge" 
},

// Fun Facts 
{
    hasContent: false,
    quest: "The iconic steps of the Palais des Festivals have how many steps?",
    choices: ["60", "30", "12", "24"], 
    correct: "24"
}, 
{
    hasContent: false, 
    quest: 'The "Croisette" refers to Cannes’ famous...',
    choices: ['Award trophy', 'Promenade', 'Beach', 'Red carpet'],
    correct: 'Promenade'
},
{
    hasContent: false,
    quest: 'Besides films, Cannes has a festival focused on:',
    choices: ['Music', 'Advertising', 'Fashion', 'Technology'],
    correct: 'Advertising'
},
{
    hasContent: false,
    quest: "A common nickname for Cannes is:",
    choices: ['Film City', 'Festival Central', 'The Red Carpet', 'Movieville'],
    correct: 'Festival Central'
},
{
    hasContent: false,
    quest: "Who is the current president of the Festival?",
    choices: ["Thierry Frémaux", 'Pierre Lescure', 'Gilles Jacob', 'Iris Knobloch'],
    correct: 'Iris Knobloch'
},
{
    hasContent: false,
    quest: 'The next Cannes Film Festival will be held in:',
    choices: ['2023', '2024', '2025', '2026'],
    correct: '2024' 
},
//General Knowledge
{
    hasContent: false,
    quest: "The Academy Awards are also known as the:",
    choices: ["Grammys", "Emmys", "Oscars", "Tonys"],
    correct: "Oscars"
},
{
    hasContent: false,
    quest: "The Oscars are presented by the:",
    choices: ["AFI", "SAG-AFTRA", "AMPAS", "HFPA"],
    correct: "AMPAS" 
},
{
    hasContent: false,
    quest: "The first Academy Awards ceremony was held in:",
    choices: ["1929", "1939", "1945", "1952"],
    correct: "1929"
},
{
    hasContent: false,
    quest: "The Oscar statuette depicts a knight holding a:",
    choices: ["Sword", "Globe", "Scroll", "Film Reel"], 
    correct: "Sword"
},

// Awards and Categories
{
    hasContent: false,
    quest: 'The "Big Five" Oscar categories are:',
    choices: ['Best Picture, Director, Actor, Actress, Screenplay', "Picture, Director, Actor, Actress, Cinematography", "Picture, Director, Actor, Actress, Editing", "Picture, Director, Actor, Actress, Score"],
    correct: 'Best Picture, Director, Actor, Actress, Screenplay'
},
{
    hasContent: false,
    quest: "The first woman to win Best Director was:",
    choices: ["Kathryn Bigelow", "Sofia Coppola", "Greta Gerwig", "Chloé Zhao"],
    correct: "Kathryn Bigelow" 
},
{
    hasContent: false,
    quest: "Which film holds the record for most Oscars won (11)?",
    choices: ["Titanic", "The Lord of the Rings: ROTK", "Ben-Hur", "All of the above"], 
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "The award for writing directly for the screen is:",
    choices: ["Best Original Screenplay", "Best Adapted Screenplay", "Best Screenwriter", 'Best Story'],
    correct: "Best Original Screenplay"
},

// Famous Moments
{
    hasContent: false,
    quest: "Who won an Oscar after being nominated 21 times?",
    choices: ["Meryl Streep", "Peter O'Toole", "Katharine Hepburn", "Roger Deakins"], 
    correct: "Roger Deakins"
},
{
    hasContent: false,
    quest: "The 'Moonlight'/'La La Land' mix-up occurred in which year?",
    choices: ["2015", "2016", "2017", "2018"],
    correct: "2017"
},

// Beyond the Awards
{
    hasContent: false,
    quest: "The Oscars red carpet is known for:",
    choices: ["Political protests"," Elaborate costumes", "Celebrity interviews", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Besides the main show, the Oscars have the:",
    choices: ["Governors Awards", "Independent Spirit Awards", "BAFTA Awards", "Student Academy Awards"],
    correct: "Governors Awards"
},

// Diversity and Inclusion
{
    hasContent: false,
    quest: 'The hashtag #OscarsSoWhite addressed:',
    choices: ["Costume design", "Cinematography", "Lack of diverse nominees", 'Makeup'],
    correct: "Lack of diverse nominees"
},
{
    hasContent: false,
    quest: "The Academy has taken steps to improve diversity, including:",
    choices: ["Expanding membership", "Setting inclusion standards", "Creating new awards categories", "All of the above"],
    correct: "Expanding membership" 
},

// Fun Facts
{
    hasContent: false, 
    quest: "The youngest Oscar winner was:",
    choices: ['Shirley Temple', 'Tatum O’Neal', 'Anna Paquin', 'Jodie Foster'],
    correct: 'Tatum O’Neal'
},
{
    hasContent: false,
    quest: 'The Oscar statuette gets its nickname from an Academy librarian who said it looked like:',
    choices: ['Her old boyfriend', 'Her father', 'Her uncle Oscar', 'A Greek God'],
    correct: 'Her uncle Oscar'
}, 
{
    hasContent: false,
    quest: "How many Oscar categories are there?",
    choices: ['15', '23', '32', '40'],
    correct: '23'
},
{
    hasContent: false,
    quest: 'The Oscar nomination voting period is typically in:',
    choices: ['Dec-Jan', 'Mar-Apr', 'Aug-Sep', 'Oct-Nov'],
    correct: 'Dec-Jan'
},
{
    hasContent: false,
    quest: "Which film won the first Best Animated Feature Oscar?",
    choices: ['Toy Story', 'The Lion King', 'Shrek', 'Snow White'],
    correct: 'Shrek'
}, 
{
    hasContent: false,
    quest: "Oscar winners receive a statuette and a:",
    choices: ['Cash prize', 'Certificate', 'Lifetime membership', 'Gift basket'],
    correct: 'Certificate' 
} ,
// General Knowledge
{
    hasContent: false,
    quest: "The Golden Raspberry Awards are also known as:",
    choices: ["The Oscars", "The Razzies", "The Grammys", "The Emmys"],
    correct: "The Razzies"
},
{
    hasContent: false,
    quest: "The Razzies 'honor' the:",
    choices: ["Best of cinema", "Worst of cinema", "Most overlooked films", "Most controversial films"],
    correct: "Worst of cinema"
},
{
    hasContent: false,
    quest: "The Razzies were founded in:",
    choices: ["1980", "1990", "2000", "2010"], 
    correct: "1980"
},
{
    hasContent: false,
    quest: "The Razzie award trophy is a:",
    choices: ["Rotten tomato", "Golden raspberry on a film reel", "Broken Oscar statuette", "Film projector"],
    correct: "Golden raspberry on a film reel"
},

// Award Categories
{
    hasContent: false,
    quest: "The main Razzie categories include:",
    choices: ["Worst Picture, Director, Actor, Actress", "Worst Costume Design, Makeup, Editing", "Worst Prequel, Remake, Rip-off, Sequel", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "The 'Worst Screen Combo' Razzie goes to:",
    choices: ["Two actors", "A song and a dance", "A director and their script", "A film and its franchise"],
    correct: "Two actors"
},
{
    hasContent: false,
    quest: "Which film 'won' the most Razzies in a single year?",
    choices: ["Battlefield Earth", "Showgirls", "Gigli", "Jack and Jill"],
    correct: "Jack and Jill"
},
{
    hasContent: false,
    quest: 'Sometimes the Razzies have a "Redeemer Award" for:',
    choices: ['Stars who turn their careers around', 'Films that were originally bad, but are now cult classics', 'Winners who come to collect their award', 'Child stars who grow up to be successful'],
    correct: 'Stars who turn their careers around'
},

// Famous "Winners"
{
    hasContent: false,
    quest: "Halle Berry famously did this in her Razzie acceptance speech:",
    choices: ['Thanked her director', 'Criticized the Razzies', 'Gave a funny, self-deprecating speech', 'Refused to accept the award'],
    correct: 'Gave a funny, self-deprecating speech'
},
{
    hasContent: false,
    quest: "This actor holds the record for most Razzie nominations:",
    choices: ["Adam Sandler", "Sylvester Stallone", "Kevin Costner", "Ben Affleck"],
    correct: "Sylvester Stallone"
},

// Controversy and Humor 
{
    hasContent: false,
    quest: "The Razzies are often considered:",
    choices: ["Mean-spirited", "Humorous", "Inaccurate", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "A criticism of the Razzies is that they sometimes target:",
    choices: ["Big budget films", "Easy targets", "Films already panned by critics", "All of the above"],
    correct: "All of the above"  
},

// Beyond the Awards
{
    hasContent: false,
    quest: 'The Razzies hold their ceremony:',
    choices: ['The day before the Oscars', 'The day after the Oscars', 'A month before the Oscars', 'On April Fools Day'],
    correct: 'The day before the Oscars'
},
{
    hasContent: false,
    quest: "The founder of the Razzies is also a:",
    choices: ["Film critic", "Publicist", "Actor", "Disgruntled screenwriter"],
    correct: "Publicist"
},

// Fun Facts
{
    hasContent: false,
    quest: "Sandra Bullock 'won' a Razzie and an Oscar in:",
    choices: ["The same year", "The same weekend", "Consecutive years", "A decade apart"],
    correct: "The same weekend"
},
{
    hasContent: false,
    quest: "This blockbuster musical surprisingly won several Razzies:",
    choices: ['Cats', 'La La Land', 'The Greatest Showman', 'Moulin Rouge!'],
    correct: 'Cats'
},
{
    hasContent: false,
    quest: 'One year, the "Worst Picture" Razzie was given to:',
    choices: ['An animated film', 'A documentary', 'A foreign-language film', 'A superhero movie'],
    correct: 'A documentary' 
}, 
{
    hasContent: false,
    quest: "Occasionally, Razzie winners have:",
    choices: ['Refused their award', 'Reclaimed their award later', 'Given their award to charity', "Done all of the above"],
    correct: "Done all of the above"
},
{
    hasContent: false,
    quest: "How much is a Razzie trophy estimated to cost?",
    choices: ["$4.97", '$49.99', '$499.95', '$4,999.90' ],
    correct: "$4.97"
},
{
    hasContent: false,
    quest: "2020 deserved its own Razzie titled...",
    choices: ['Worst Pandemic', 'Worst Movie', 'Worst Year Ever', 'Worst Streaming Service'],
    correct: 'Worst Year Ever'
},
// General Knowledge
{
    hasContent: false,
    quest: "Which filmmaker directed the 'Avatar' films?",
    choices: ["Steven Spielberg", "James Cameron", "Peter Jackson", "Christopher Nolan"],
    correct: "James Cameron"
},
{
    hasContent: false,
    quest: "The first 'Avatar' film was released in:",
    choices: ["2005", "2009", "2013", "2017"],
    correct: "2009"
},
{
    hasContent: false,
    quest: "The fictional moon where 'Avatar' takes place is called:",
    choices: ["Pandora", "Endor", "Naboo", "Tatooine"],
    correct: "Pandora"
},
{
    hasContent: false,
    quest: "The blue-skinned native inhabitants of Pandora are the:",
    choices: ["Na'vi", "Wookies", "Ewoks", "Klingons"],
    correct: "Na'vi"
},

// Story and Themes
{
    hasContent: false,
    quest: 'The human protagonist of "Avatar" is:',
    choices: ['Jake Sully', 'Norm Spellman', 'Miles Quaritch', 'Dr. Grace Augustine'],
    correct: 'Jake Sully'
},
{
    hasContent: false,
    quest: "The precious resource humans seek on Pandora is:",
    choices: ["Vibranium", "Adamantium", "Unobtanium", 'Kryptonite'],
    correct: "Unobtanium"
},
{
    hasContent: false,
    quest: "The Na'vi have a deep connection to their deity named:",
    choices: ["Eywa", "Yggdrasil", "Gaia", "Brahman"],
    correct: "Eywa"
},
{
    hasContent: false,
    quest: "A major theme in 'Avatar' is:",
    choices: ["Colonization", "Environmentalism", "Artificial Intelligence",   "All of the above"], 
    correct:  "All of the above"
},

// Characters and Cast
{
    hasContent: false,
    quest: "Jake Sully is played by:",
    choices: ["Sam Worthington", "Chris Evans", "Chris Pratt", "Channing Tatum"],
    correct: "Sam Worthington"
},
{
    hasContent: false,
    quest: "Neytiri, the Na'vi princess, is played by:",
    choices: ["Zoe Saldana", "Scarlett Johansson", "Lupita Nyong'o", "Kate Winslet"],
    correct: "Zoe Saldana"
},
{
    hasContent: false,
    quest: "The villainous Colonel Quaritch is played by:",
    choices: ["Sigourney Weaver", "Michael Biehn", "Stephen Lang"," Giovanni Ribisi"],
    correct: "Stephen Lang"
},

// Technology and Effects
{
    hasContent: false,
    quest: "The 'Avatar' films are known for their use of:",
    choices: ["Motion capture", "3D technology", "Practical effects", "All of the above"],
    correct: "All of the above"  
},

// Sequels 
{
    hasContent: false,
    quest: "The second Avatar film is titled:",
    choices: ["Avatar: Return to Pandora", "Avatar: The Deep", "Avatar: The Way of Water", "Avatar: Rise of the Na'vi"],
    correct: "Avatar: The Way of Water"
},
{
    hasContent: false,
    quest: 'How many "Avatar" sequels are currently planned?',
    choices: ['2', '3', '4', '5'],
    correct: '4'
},

// Fun Fact
{
    hasContent: false,
    quest: "'Avatar' was the highest-grossing film of all time until it was surpassed by:",
    choices: ["Titanic", "Avengers: Infinity War", "Avengers: Endgame", "Star Wars: The Force Awakens"],
    correct: "Avengers: Endgame"
}
];
const economyQuestions = [
// Understanding Demand
{
    hasContent: false,
    quest: "Demand is the amount of a good...",
    choices: ["People want to buy", "Sellers supply", "Costs to produce", "People can afford"],
    correct: "People want to buy"
},
{
    hasContent: false,
    quest: "Law of Demand: If price rises, quantity demanded...",
    choices: ["Increases", "Decreases", "Stays the same", "Depends"],
    correct: "Decreases"
},
{
    hasContent: false,
    quest: "A demand curve shows the relationship between...",
    choices: ["Price & quantity demanded", "Income & demand",  "Supply & demand", "Price & supply"],
    correct: "Price & quantity demanded" 
},

// Shifting Demand 
{
    hasContent: false,
    quest: "Change in income causes a...",
    choices: ["Move along demand curve", "Shift of demand curve", "Change in supply", "No change"],
    correct: "Shift of demand curve"
},
{
    hasContent: false,
    quest: "Lower price for a substitute will likely...",
    choices: ["Increase demand", "Decrease demand", "Not affect demand", "Shift demand"],
    correct: "Decrease demand" 
},
{
    hasContent: false,
    quest: "Taste change for a good will...",
    choices: ["Move along demand curve", "Shift demand curve", "Cause shortage", "Affect price"],
    correct: "Shift demand curve" 
},

// Elasticity
{
    hasContent: false,
    quest: "Inelastic demand means a price rise leads to...",
    choices: ["Big drop in quantity", "Small drop in quantity", "No change in quantity", "More revenue"],
    correct: "Small drop in quantity" 
},
{
    hasContent: false,
    quest: "Which good has inelastic demand?",
    choices: ["Gasoline", "Luxury cars", "Dining out", "Candy"],
    correct: "Gasoline"
},

// Applications
{
    hasContent: false,
    quest: "Cigarette taxes work because demand is...",
    choices: ["Elastic", "Inelastic", "Unit elastic", "Fixed"],
    correct: "Inelastic"
},
{
    hasContent: false, 
    quest: "Ads aim to...",
    choices: ["Increase supply", "Lower price", "Shift demand right", "Limit choices"],
    correct: "Shift demand right"
}, 

// Beyond Basics
{
    hasContent: false,
    quest: "Cross-price elasticity measures how demand responds to a change in the price of...",
    choices: ["Same good", "Unrelated good", "Substitute", "Complement"],
    correct: "Substitute" 
},
{
    hasContent: false, 
    quest: "Income elasticity helps identify...", 
    choices: ["Normal/inferior goods", "Substitutes/Complements", "Elasticity", "Quantity changes"],
    correct: "Normal/inferior goods" 
},
{
    hasContent: false, 
    quest: "Demand is more elastic in the long run because...",
    choices: ["Prices rise", "Consumers find substitutes", "Income falls", "Tastes change"],
    correct: "Consumers find substitutes" 
},
// Key Concepts
{
    hasContent: false,
    quest: "The business cycle describes:",
    choices: ["Stock market trends", "Economic fluctuations", "Seasonal sales", "Inflation patterns"],
    correct: "Economic fluctuations"
},
{
    hasContent: false,
    quest: "Expansion is marked by:",
    choices: ["High unemployment", "Economic growth", "Rising prices", "Bankruptcies"],
    correct: "Economic growth"
},
{
    hasContent: false,
    quest: "A recession is defined as:",
    choices: ["Stock market crash", "Two quarters of decline", "High inflation", "Rising unemployment"],
    correct: "Two quarters of decline"
},
{
    hasContent: false,
    quest: "The lowest point of a recession is the:",
    choices: ["Peak", "Trough", "Contraction", "Depression"], 
    correct: "Trough"
},

// Indicators and Measures
{
    hasContent: false,
    quest: "A key economic health indicator is:",
    choices: ["GDP", "Interest rates", "Stock prices",  "CEO salaries"],
    correct: "GDP"
},
{
    hasContent: false,
    quest: "Rising inflation often occurs during:",
    choices: ["Expansion", "Peak", "Contraction", "Recovery"],
    correct: "Expansion"
},
{
    hasContent: false,
    quest: "Unemployment rates tend to be highest during a:",
    choices: ["Recession", "Expansion", "Peak", "Recovery"],
    correct: "Recession"
},
{
    hasContent: false,
    quest: "Consumer spending drives the:",
    choices: ["Exchange rate", "Business cycle", "Money supply", "Government budget"],
    correct: "Business cycle" 
},

// Causes and Impacts
{
    hasContent: false,
    quest: "A stock market crash could trigger:",
    choices: ["Expansion", "Recession", "Stable growth", "Boom"], 
    correct: "Recession"
},
{
    hasContent: false,
    quest: "Tech innovation can lead to:",
    choices: ["Long-term growth", "Recessions", "Higher inflation", "All of the above"],
        correct: "Long-term growth" 
},
{
    hasContent: false,
    quest: "Disasters can disrupt the:",
    choices: ["Tax system", "Business cycle",  "Political process", "Demand for goods"],
    correct: "Business cycle"
},
{
    hasContent: false,
    quest: "During a recession, businesses might:",
    choices: ["Hire more", "Invest heavily",  "Cut production", "Raise prices"],
    correct: "Cut production" 
},

// Government Policies
{
    hasContent: false,
    quest: "Fiscal policy uses:",
    choices: ["Trade deals", "Gov't spending & taxes", "Interest rates", "Regulations"],
    correct: "Gov't spending & taxes"
},
{
    hasContent: false,
    quest: "The Federal Reserve controls:",
    choices: ["Monetary policy", "Tax collection", "The budget", "Foreign relations"],
    correct: "Monetary policy"
},
{
    hasContent: false,
    quest: "To fight a recession, the government might:",
    choices: ["Cut spending", "Raise interest rates", "Lower taxes", "Increase regulations"],
    correct: "Lower taxes" 
},

// Beyond the Basics
{
    hasContent: false,
    quest: "A severe, prolonged recession is a:",
    choices: ["Depression", "Correction", "Slowdown", "Bear Market"],
    correct: "Depression"
},
{
    hasContent: false,
    quest: "Business cycles are:", 
    choices: ["Completely predictable", "Somewhat predictable", "Not predictable", "Controlled by policy"],
    correct: "Somewhat predictable"
},
{
    hasContent: false,
    quest: "Economic forecasting analyzes:",
    choices: ["Stock prices", "Business cycle turns", "Elections", "Weather"],
    correct: "Business cycle turns"
},
{
    hasContent: false,
    quest: "Globalization has made business cycles:",
    choices: ["More interconnected", "Less important", "Easier to predict", "Obsolete"],
    correct: "More interconnected" 
},
{
    hasContent: false,
    quest: "A goal of economic policy is to:",
    choices: ["Eliminate poverty", "Promote stability", "Guarantee full employment", "Prevent inequality"],
    correct: "Promote stability" 
},
// Basics of Interest Rates
{
    hasContent: false,
    quest: "Interest rates are the cost of:",
    choices: ["Borrowing money", "Saving money", "Investing", "Government spending"],
    correct: "Borrowing money"
},
{
    hasContent: false,
    quest: "The Federal Reserve influences interest rates through:",
    choices: ["Tax policy", "Monetary policy", "Trade agreements", "Direct lending"],
    correct: "Monetary policy"
},
{
    hasContent: false,
    quest: "When the Fed raises rates, borrowing becomes:",
    choices: ["Cheaper", "More expensive", "Unaffected", "Riskier"],
    correct: "More expensive"
},
{
    hasContent: false,
    quest: "A benchmark interest rate set by the Fed is the:",
    choices: ["Prime rate", "Mortgage rate", "Federal funds rate", "Treasury yield"],
    correct: "Federal funds rate"
},

// Impact on Consumers
{
    hasContent: false,
    quest: "Higher interest rates generally lead to:",
    choices: ["More saving", "Less saving", "More stock buying", "No change"],
    correct: "More saving"
},
{
    hasContent: false,
    quest: "Lower interest rates make mortgages:",
    choices: ["Less affordable", "More affordable", "Riskier", "Unavailable"],
    correct: "More affordable"
},
{
    hasContent: false,
    quest: "Credit card debt becomes ______ when rates rise.",
    choices: ["Easier to pay off", "More expensive", "Unchanged", "Tax-deductible"],
    correct: "More expensive"
},
{
    hasContent: false,
    quest: "When interest rates fall, bond prices generally:",
    choices: ["Rise", "Fall", "Stay the same", "Become unpredictable"],
    correct: "Rise"
},

// Economic Effects
{
    hasContent: false,
    quest: "The Fed might raise rates to combat:",
    choices: ["Inflation", "Recession", "Unemployment", "Trade deficits"],
    correct: "Inflation"
},
{
    hasContent: false,
    quest: "Lower interest rates aim to stimulate:",
    choices: ["Saving", "Economic growth", "Budget surpluses", "Price stability"],
    correct: "Economic growth"
},
{
    hasContent: false,
    quest: "Businesses are likely to invest less when rates are:",
    choices: ["Low", "High", "Stable", "Negative"],
    correct: "High"
},
{
    hasContent: false,
    quest: "Interest rates affect the value of the US dollar on:",
    choices: ["Stock markets", "Forex markets", "Commodities markets", "Local businesses"],
    correct: "Forex markets"
},

// Types of Interest Rates 
{
    hasContent: false,
    quest: "The interest rate banks charge their best customers is the:",
    choices: ["Federal funds rate", "Prime rate", "LIBOR", "Discount rate"],
    correct: "Prime rate"
},
{
    hasContent: false,
    quest: "Long-term interest rates are important for:",
    choices: ["Mortgages", "Credit cards", "Business loans", "Car loans"],
    correct: "Mortgages"
},
{
    hasContent: false,
    quest: "The "real" interest rate is adjusted for:",
    choices: ["Inflation", "Taxes", "Risk", "Duration"],
    correct: "Inflation"
}, 
{
    hasContent: false,
    quest: "A negative interest rate means lenders:",
    choices: ["Lose money", "Earn very little", "Go bankrupt", "Are illegal"],
    correct: "Lose money"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "Yield curve inversion can signal a potential:",
    choices: ["Recession", "Stock market boom", "Inflation spike", "Currency crisis"],
    correct: "Recession"
},
{
    hasContent: false,
    quest: "The 'risk-free rate' is usually the yield on:",
    choices: ["Corporate bonds", "Bank savings accounts", "Treasury securities", "Stocks"],
    correct: "Treasury securities"
},
{
    hasContent: false,
    quest: "Quantitative easing by the Fed involves:",
    choices: ["Cutting taxes", "Raising rates", "Buying bonds", "Selling bonds"],
    correct: "Buying bonds"
},
{
    hasContent: false,
    quest: "Interest rates strongly impact the economy in the:",
    choices: ["Short-term", "Long-term", "Both", "Neither"],
    correct: "Both"
},
// Key Concepts
{
    hasContent: false,
    quest: "Fiscal policy involves using government:",
    choices: ["Interest rates and money supply", "Spending and taxation", "Regulations and trade deals", "Foreign policy"],
    correct: "Spending and taxation"
},
{
    hasContent: false,
    quest: "An expansionary fiscal policy aims to:",
    choices: ["Slow the economy", "Stimulate the economy", "Reduce inflation", "Balance the budget"],
    correct: "Stimulate the economy"
},
{
    hasContent: false,
    quest: "A contractionary fiscal policy aims to:",
    choices: ["Fight a recession", "Boost growth", "Cool an overheating economy", "Increase the deficit"],
    correct: "Cool an overheating economy"
},
{
    hasContent: false,
    quest: "A budget deficit means the government:",
    choices: ["Spends more than it collects", "Spends less than it collects", "Has a balanced budget", "Eliminates the national debt"],
    correct: "Spends more than it collects"
},

// Tools of Fiscal Policy
{
    hasContent: false,
    quest: "To stimulate the economy, the government might:",
    choices: ["Cut taxes", "Increase spending", "Both of the above", "None of the above"],
    correct: "Both of the above"
},
{
    hasContent: false,
    quest: "Examples of government spending include:",
    choices: ["Infrastructure projects", "Social programs", "Defense", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Progressive taxation means those earning more pay:",
    choices: ["A lower tax rate", "A higher tax rate", "The same tax rate", "No taxes"],
    correct: "A higher tax rate"
},
{
    hasContent: false,
    quest: "Automatic stabilizers help the economy without:",
    choices: ["Direct gov't action", "Monetary policy", "The budget deficit", "Changes in interest rates"],
    correct: "Direct gov't action"
},

// Impacts of Fiscal Policy
{
    hasContent: false,
    quest: "Tax cuts can lead to:",
    choices: ["Higher demand", "Lower inflation", "Slower growth", "Smaller deficits"],
    correct: "Higher demand"
},
{
    hasContent: false,
    quest: "Large budget deficits can lead to:",
    choices: ["Higher inflation", "Increased investment", "Lower interest rates", "Less economic growth"],
    correct: "Higher inflation"
},
{
    hasContent: false,
    quest: "The national debt is:",
    choices: ["Total federal borrowing", "The annual budget deficit", "Money owed to foreign countries", "Money printed by the Fed"],
    correct: "Total federal borrowing"
},
{
    hasContent: false,
    quest: "Fiscal policy can impact:",
    choices: ["Income inequality", "Employment", "Economic growth", "All of the above"],
    correct: "All of the above"
},

// Challenges and Debates
{
    hasContent: false,
    quest: "A concern with expansionary fiscal policy is:",
    choices: ["It increases the national debt", "It might not be effective", "It can lead to inflation", "All of the above"], 
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "'Crowding out' refers to government spending:",
    choices: ["Reducing private investment", "Boosting consumer spending", "Lowering taxes", "Expanding social programs"],
    correct: "Reducing private investment"
},
{
    hasContent: false,
    quest: "Fiscal policy has a __________ compared to monetary policy.",
    choices: ["Faster impact", "Slower impact", "Greater impact", "More predictable impact"],
    correct: "Slower impact"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "Supply-side economics argues tax cuts boost growth by increasing:",
    choices: ["Demand", "The deficit", "Regulation", "Incentives to work and invest"],
    correct: "Incentives to work and invest"
},
{
    hasContent: false,
    quest: "Modern Monetary Theory (MMT) argues:",
    choices: ["Deficits don't matter", "Deficits are always harmful ", "Only tax policy matters", "Interest rates are key"],
    correct: "Deficits don't matter"
},
{
    hasContent: false,
    quest: "A fiscal multiplier measures:", 
    choices: ["The effect of spending on GDP", "The size of the national debt", "The impact of tax cuts", "Changes in interest rates"],
    correct: "The effect of spending on GDP"
}, 
{
    hasContent: false,
    quest: "Fiscal policy works best in coordination with:",
    choices: ["Monetary policy", "Foreign policy", "Industrial policy", "Trade policy"],
    correct: "Monetary policy" 
},
{
    hasContent: false,
    quest: "One limitation of fiscal policy is:",
    choices: ["Speed of implementation ", "Political considerations", "Impact on future generations", "All of the above"],
    correct: "All of the above" 
},
// Basics of Monetary Policy
{
    hasContent: false,
    quest: "Monetary policy aims to influence the economy through:",
    choices: ["Taxes & spending", "Interest rates & money supply", "Trade & regulations", "Lending & subsidies"],
    correct: "Interest rates & money supply"
},
{
    hasContent: false,
    quest: "The central bank in the United States is the:",
    choices: ["Treasury Department", "Federal Reserve", "World Bank", "International Monetary Fund"],
    correct: "Federal Reserve"
},
{
    hasContent: false,
    quest: "To stimulate the economy, the Fed might:",
    choices: ["Lower interest rates", "Raise interest rates", "Increase taxes", "Cut government spending"],
    correct: "Lower interest rates"
},
{
    hasContent: false,
    quest: "If inflation is high, the Fed likely will:",
    choices: ["Cut interest rates", "Raise interest rates", "Buy government bonds", "Leave policy unchanged"],
    correct: "Raise interest rates"
},

// Tools of Monetary Policy
{
    hasContent: false,
    quest: "The Fed's key interest rate is the:",
    choices: ["Discount rate", "Prime rate", "Federal funds rate", "Mortgage rate"],
    correct: "Federal funds rate"
},
{
    hasContent: false,
    quest: "Open market operations involve the Fed:",
    choices: ["Setting tax rates", "Buying/selling bonds", "Lending to banks", "Regulating banks"],
    correct: "Buying/selling bonds"
},
{
    hasContent: false,
    quest: "The discount rate is the interest rate charged to:",
    choices: ["Consumers on loans", "Banks borrowing from the Fed", "The government on bonds", "Foreign countries"],
    correct: "Banks borrowing from the Fed"
},
{
    hasContent: false,
    quest: "Increasing reserve requirements makes it _______ for banks to lend.",
    choices: ["Easier", "Harder", "Unchanged", "Riskier"], 
    correct: "Harder"
},

// How Monetary Policy Works
{
    hasContent: false,
    quest: "Lower interest rates make borrowing:",
    choices: ["Cheaper", "More expensive", "Unaffected", "Illegal"],
    correct: "Cheaper"
},
{
    hasContent: false,
    quest: "Expansionary monetary policy encourages:",
    choices: ["Saving", "Spending and investment", "Budget surpluses", "Balanced trade"],
    correct: "Spending and investment"
},
{
    hasContent: false,
    quest: "Monetary policy impacts the value of the dollar in:",
    choices: ["Stock markets", "Bond markets", "Foreign exchange markets", "Real estate markets"],
    correct: "Foreign exchange markets"
},
{
    hasContent: false,
    quest: "A side-effect of expansionary monetary policy can be:",
    choices: ["Inflation", "Recession", "Deflation", "Trade deficits"],
    correct: "Inflation"
},

// Limits & Debates
{
    hasContent: false,
    quest: "Monetary policy is less effective during a:",
    choices: ["Economic boom", "Recession", "Period of high inflation", "Time of stable prices"],
    correct: "Recession"
},
{
    hasContent: false,
    quest: "Quantitative easing refers to the Fed:",
    choices: ["Cutting taxes", "Raising interest rates", "Buying large amounts of bonds", "Selling bonds"],
    correct: "Buying large amounts of bonds"
},
{
    hasContent: false,
    quest: "A 'liquidity trap' means that:",
    choices: ["Interest rates can't go lower", "The economy is unresponsive to stimulus", "Banks stop lending", "All of the above"],
    correct: "All of the above"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "Monetary policy works with ______ to affect the economy.",
    choices: ["Fiscal policy", "Industrial policy", "Foreign policy", "Consumer preferences"],
    correct: "Fiscal policy"
},
{
    hasContent: false,
    quest: "Forward guidance by the Fed involves:",
    choices: ["Predicting economic trends", "Setting future interest rate targets", "Communicating policy intentions", "Direct lending to businesses"], 
    correct: "Communicating policy intentions"
},
{
    hasContent: false,
    quest: "Central bank independence aims to prevent:",
    choices: ["Excessive money printing", "Political interference", "Recessions", "Market bubbles"],
    correct: "Political interference"
},
{
    hasContent: false,
    quest: "A criticism of targeting low interest rates is that it may:",
    choices: ["Cause inflation", "Fuel asset bubbles", "Hurt savers", "All of the above"],
    correct: "All of the above"
}, 
{
    hasContent: false,
    quest: "Monetary policy has a greater impact on the economy in the:",
    choices: ["Short-term", "Long-term", "Both", "Neither"], 
    correct: "Long-term"
},
// Understanding Money Laundering
{
    hasContent: false,
    quest: "Money laundering disguises money from:",
    choices: ["Tax authorities", "Illegal activity", "Inflation", "Legitimate business"],
    correct: "Illegal activity"
},
{
    hasContent: false,
    quest: "The 'placement' stage involves:",
    choices: ["Buying luxury goods", "Complex transactions", "Getting cash into the system", "Reintegrating funds"],
    correct: "Getting cash into the system" 
},
{
    hasContent: false,
    quest: "Layering is designed to:",
    choices: ["Hide the money trail", "Buy real estate", "Set up shell companies", "Bribe officials"],
    correct: "Hide the money trail" 
},
{
    hasContent: false,
    quest: "Which sector is often used for laundering?",
    choices: ["Banking", "Real estate", "Cash businesses", "Cryptocurrency"],
    correct: "Banking"
},

// Economic Impacts
{
    hasContent: false,
    quest: "Money laundering harms economies by:",
    choices: ["Raising taxes", "Undermining fair competition", "Causing recessions", "Increasing regulation"],
    correct: "Undermining fair competition"
},
{
    hasContent: false,
    quest: "Money laundering weakens financial systems by:",
    choices: ["Eroding trust in banks", "Fueling criminal activity", "Increasing interest rates", "Harming small businesses"],
    correct: "Eroding trust in banks" 
},
{
    hasContent: false,
    quest: "Money laundering hurts a country's:",
    choices: ["Reputation", "Economic growth", "Currency value", "Tax revenue"],
    correct: "Reputation"
},
{
    hasContent: false,
    quest: "Tax havens attract money launderers due to:",
    choices: ["Low taxes & secrecy", "Strong regulation", "Proximity to crime", "Developed economies"],
    correct: "Low taxes & secrecy"
},

// Methods & Detection
{
    hasContent: false,
    quest: "Smurfing involves:",
    choices: ["Fake invoices", "Shell companies", "Gambling winnings", "Small deposits"],
    correct: "Small deposits"
},
{
    hasContent: false,
    quest: "Banks are required to:",
    choices: ["Report suspicious activity", "Freeze large transactions", "Limit foreign accounts", "Offer anonymous services"],
    correct: "Report suspicious activity"
},
{
    hasContent: false,
    quest: "Which tool helps detect laundering?",
    choices: ["Transaction monitoring", "Customer due diligence", "Wire transfer limits", "Tax audits"],
    correct: "Transaction monitoring"
},

// Combating Money Laundering
{
    hasContent: false,
    quest: "Why is global cooperation needed to fight laundering?",
    choices: ["Crime crosses borders", "Regulations vary", "Technology is complex", "Havens are powerful"],
    correct: "Crime crosses borders"
},
{
    hasContent: false,
    quest: "AML laws focus on:",
    choices: ["Detecting & prosecuting crime", "Punishing businesses", "Increasing tax revenue", "Harming offshore havens"],
    correct: "Detecting & prosecuting crime"
},
{
    hasContent: false,
    quest: "One challenge of AML rules is:",
    choices: ["They're ineffective", "They're too complex", "They increase costs", "They reduce privacy"],
    correct: "They increase costs"
},

// Beyond the Basics 
{
    hasContent: false,
    quest: "Money laundering funds activities like:",
    choices: ["Drug trade", "Terrorism", "Tax evasion", "Cybercrime"],
    correct: "Drug trade"
},
{
    hasContent: false,
    quest: "The FATF is a:",
    choices: ["Law enforcement agency", "UN body", "Global standard-setter", "Bank regulator"],
    correct: "Global standard-setter"
}, 
{
    hasContent: false,
    quest: "Beneficial ownership rules aim to:",
    choices: ["Know who owns companies", "Limit foreign investment", "Protect financial privacy", "Strengthen tax laws"],
    correct: "Know who owns companies"
},
{
    hasContent: false, 
    quest: "A new challenge for laundering is:",
    choices: ["Cryptocurrency", "Artificial intelligence", "Cash-based businesses", "Mobile banking"],
    correct: "Cryptocurrency" 
},
{
    hasContent: false, 
    quest: "AML must balance effectiveness with:", 
    choices: ["Financial freedom", "Innovation", "Tax fairness", "Economic growth"],
    correct: "Financial freedom" 
}
];
const geographyQuestions = [// Capitals & Countries
{
    hasContent: false,
    quest: "The capital of France is:",
    choices: ["London", "Berlin", "Rome", "Paris"],
    correct: "Paris"
},
{
    hasContent: false,
    quest: "Which country has the capital of Tokyo?",
    choices: ["China", "Japan", "South Korea", "India"],
    correct: "Japan"
},
{
    hasContent: false,
    quest: "Brasilia is the capital of:",
    choices: ["Mexico", "Argentina", "Brazil", "Colombia"],
    correct: "Brazil"
},
{
    hasContent: false,
    quest: "The largest country by land area is:",
    choices: ["Russia", "Canada", "United States", "China"],
    correct: "Russia"
},

// Flags & Currencies
{
    hasContent: false,
    quest: "Which flag has a red maple leaf on a white background?",
    choices: ["Japan", "Canada", "Switzerland", "Denmark"],
    correct: "Canada"
},
{
    hasContent: false,
    quest: "The currency of Brazil is the:",
    choices: ["Peso", "Euro", "Real", "Dollar"],
    correct: "Real"
},
{
    hasContent: false,
    quest: "The Euro is used by countries like:",
    choices: ["Spain & Italy", "Brazil & Argentina", "Japan & China", "UK & Denmark"],
    correct: "Spain & Italy"
},
{
    hasContent: false,
    quest: "Which country's flag features a yellow star on a green background?",
    choices: ["Cameroon", "Vietnam", "Brazil", "Australia"],
    correct: "Cameroon" 
},

// Population & Regions
{
    hasContent: false,
    quest: "The most populous country in the world is:",
    choices: ["India", "USA", "Indonesia", "China"],
    correct: "China"
},
{
    hasContent: false,
    quest: "Egypt is located on which continent?",
    choices: ["Asia", "Africa", "Europe", "South America"],
    correct: "Africa"
},
{
    hasContent: false,
    quest: "The world's largest rainforest is located in:",
    choices: ["Central Africa", "South America", "Southeast Asia", "Russia"],
    correct: "South America"
},
{
    hasContent: false,
    quest: "The Andes Mountains are located in:",
    choices: ["Asia", "North America", "South America", "Europe"],
    correct: "South America"
},

// Landmarks & Fun Facts 
{
    hasContent: false,
    quest: "The Eiffel Tower is located in:",
    choices: ["Paris", "Rome", "Berlin", "London"],
    correct: "Paris"
},
{
    hasContent: false,
    quest: "The Great Wall is located in:",
    choices: ["India", "China", "Japan", "Russia"],
    correct: "China"
},
{
    hasContent: false,
    quest: "The birthplace of the Olympics is:",
    choices: ["Greece", "Italy", "Egypt", "Brazil"],
    correct: "Greece"
},
{
    hasContent: false,
    quest: "The country known for its tulips and windmills is:",
    choices: ["Belgium", "Denmark", "Netherlands", "Germany"],
    correct: "Netherlands"
},
{
    hasContent: false,
    quest: "Which country is famous for pizza and pasta?",
    choices: ["Spain", "France", "Italy", "Greece"],
    correct: "Italy"
},
{
    hasContent: false,
    quest: "Kangaroos are native to:",
    choices: ["Australia", "New Zealand", "South Africa", "Madagascar"],
    correct: "Australia"
},
{
    hasContent: false,
    quest: "The smallest country in the world is:",
    choices: ["Monaco", "Liechtenstein", "Vatican City", "Luxembourg"],
    correct: "Vatican City"
},
{
    hasContent: false,
    quest: "A country famous for pyramids is:",
    choices: ["Greece", "Iraq", "Egypt", "Mexico"],
    correct: "Egypt"
},
// Capitals & Countries
{
    hasContent: false,
    quest: "Ottawa is the capital of:",
    choices: ["Canada", "Australia", "Mexico", "The United States"],
    correct: "Canada"
},
{
    hasContent: false,
    quest: "Which country is known as the 'Land of the Rising Sun'?",
    choices: ["China",  "South Korea", "Japan", "Vietnam"],
    correct: "Japan"
},
{
    hasContent: false,
    quest: "The city-state of Singapore is located in:",
    choices: ["Southeast Asia", "South America", "North Africa", "Central Europe"],
    correct: "Southeast Asia"
},
{
    hasContent: false,
    quest: "Warsaw is the capital of:",
    choices: ["Germany", "Hungary", "Czech Republic", "Poland"],
    correct: "Poland"
},

// Flags & Currencies
{
    hasContent: false,
    quest: "A blue and yellow flag belongs to:",
    choices: ["Ukraine", "Sweden", "Argentina", "Kazakhstan"],
    correct: "Ukraine"
},
{
    hasContent: false,
    quest: "The British Pound is the currency of:",
    choices: ["Australia", "New Zealand", "The United Kingdom", "Canada"],
    correct: "The United Kingdom"
},
{
    hasContent: false,
    quest: "Which country uses the Peso as its currency?",
    choices: ["Venezuela", "Peru", "Mexico", "Spain"],
    correct: "Mexico"
},
{
    hasContent: false,
    quest: "A red flag with a white cross represents:",
    choices: ["England", "Switzerland", "Denmark", "Norway"],
    correct: "Switzerland" 
},

// Population & Regions
{
    hasContent: false,
    quest: "The most populous continent is:",
    choices: ["Asia", "Africa", "Europe", "North America"],
    correct: "Asia"
},
{
    hasContent: false,
    quest: "The Iberian Peninsula is home to:",
    choices: ["Italy & Greece", "Germany & Denmark", "Spain & Portugal", "Mexico & Colombia"],
    correct: "Spain & Portugal"
},
{
    hasContent: false,
    quest: "Countries south of the Equator include:",
    choices: ["Brazil & Indonesia", "USA & Canada", "Russia & China", "UK & France"],
    correct: "Brazil & Indonesia"
},
{
    hasContent: false,
    quest: "The Sahara Desert is located in:",
    choices: ["North Africa", "South America", "The Middle East", "South Asia"],
    correct: "North Africa"
},

// Landmarks & Fun Facts 
{
    hasContent: false,
    quest: "The Statue of Liberty was a gift from:",
    choices: ["France", "Italy", "Great Britain", "Canada"],
    correct: "France"
},
{
    hasContent: false,
    quest: "Machu Picchu is an ancient city in:",
    choices: ["Mexico", "Guatemala", "Peru", "Egypt"],
    correct: "Peru"
},
{
    hasContent: false,
    quest: "The Leaning Tower of Pisa is in:",
    choices: ["Spain", "France", "Italy", "Greece"],
    correct: "Italy"
},
{
    hasContent: false,
    quest: "The country known for fjords is:",
    choices: ["Norway", "Iceland", "Finland", "Sweden"],
    correct: "Norway"
},
{
    hasContent: false,
    quest: "The Amazon River flows through:",
    choices: ["Brazil", "Venezuela", "Mexico", "Argentina"],
    correct: "Brazil"
},
{
    hasContent: false,
    quest: "The world's tallest mountain is:",
    choices: ["K2", "Kangchenjunga", "Mount Everest", "Denali"],
    correct: "Mount Everest"
},
{
    hasContent: false,
    quest: "The official languages of India include:",
    choices: ["Urdu & Bengali", "Hindi & English", "Tamil & Marathi", "Spanish & Portuguese"],
    correct: "Hindi & English"
},
{
    hasContent: false,
    quest: "The country known for flamenco dancing is:",
    choices: ["Portugal", "Brazil", "Italy", "Spain"],
    correct: "Spain"
},
// Types and Formation 
{
    hasContent: false,
    quest: "A lake formed by a volcano's crater is called:",
    choices: ["Tectonic Lake", "Crater Lake", "Oxbow Lake", "Reservoir"],
    correct: "Crater Lake"
},
{
    hasContent: false,
    quest: "An oxbow lake is created when:",
    choices: ["A glacier melts", "A river changes course", "A dam is built", "Volcanic activity occurs"],
    correct: "A river changes course"
},
{
    hasContent: false,
    quest: "Salt lakes form due to:",
    choices: ["High evaporation rates", "Heavy rainfall", "Underground springs", "River erosion"],
    correct: "High evaporation rates"
},
{
    hasContent: false,
    quest: "Which is NOT a type of natural lake?",
    choices: ["Glacial", "Tectonic", "Reservoir", "Oxbow"],
    correct: "Reservoir"
},

// Famous Lakes
{
    hasContent: false,
    quest: "The deepest lake in the world is:",
    choices: ["Lake Superior", "Lake Baikal", "Lake Victoria", "The Caspian Sea"],
    correct: "Lake Baikal"
},
{
    hasContent: false,
    quest: "The Great Lakes border the US and:",
    choices: ["Mexico", "Canada", "The Bahamas", "Cuba"],
    correct: "Canada"
},
{
    hasContent: false,
    quest: "Lake Titicaca, known for its high altitude, is in:",
    choices: ["Africa", "Asia", "Europe", "South America"],
    correct: "South America"
},
{
    hasContent: false,
    quest: "Which lake is known as a sea, despite being landlocked?",
    choices: ["The Caspian Sea", "The Great Salt Lake", "Lake Tanganyika", "Lake Chad"],
    correct: "The Caspian Sea"
},

// Ecology and Environment 
{
    hasContent: false,
    quest: "Fish, algae, and insects are part of a lake's:",
    choices: ["Ecosystem", "Watershed", "Topography", "Salinity"],
    correct: "Ecosystem"
},
{
    hasContent: false,
    quest: "Lakes can help regulate:",
    choices: ["Climate", "Ocean currents", "Volcanic activity", "Earthquakes"],
    correct: "Climate"
},
{
    hasContent: false,
    quest: "Eutrophication is caused by excess:",
    choices: ["Nutrients", "Sunlight", "Fish populations", "Salt"],
    correct: "Nutrients" 
},
{
    hasContent: false,
    quest: "Lakes provide habitats for:",
    choices: ["Birds", "Fish", "Amphibians", "All of the above"],
    correct: "All of the above"
},

// Human Uses
{
    hasContent: false,
    quest: "Lakes are an important source of:",
    choices: ["Drinking water", "Irrigation", "Recreation", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Dams and reservoirs are built on lakes for:", 
    choices: ["Hydropower", "Flood control", "Water storage", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Boating, fishing, and swimming are popular in:", 
    choices: ["Recreational lakes", "Tectonic lakes", "Salt lakes", "Crater lakes"],
    correct: "Recreational lakes"
},

// Fun Facts & Trivia 
{
    hasContent: false,
    quest: "The color of a lake can depend on:",
    choices: ["Algae", "Minerals", "Depth", "All of the above"],
    correct: "All of the above"
}, 
{
    hasContent: false,
    quest: "A lake can disappear due to:",
    choices: ["Evaporation", "Drainage", "Climate change", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Ancient lakes are hotspots for:",
    choices: ["Biodiversity", "Mineral deposits", "Volcanic activity", "Shipping routes"],
    correct: "Biodiversity"
},
{
    hasContent: false,
    quest: "Lakes can be found:",
    choices: ["On every continent except Antarctica", "Only in Asia and North America", "Only in areas with high rainfall", "Below sea level"],
    correct: "On every continent except Antarctica"
},
{
    hasContent: false,
    quest: "Some lakes are so salty:",
    choices: ["You can't swim in them", "You can float easily", "Fish can't survive in them", "They freeze in summer"],
    correct: "You can float easily"
},
// Understanding Peninsulas
{
    hasContent: false,
    quest: "A peninsula is a piece of land mostly surrounded by:",
    choices: ["Mountains", "Desert", "Water", "Forest"],
    correct: "Water"
},
{
    hasContent: false,
    quest: "Which is NOT a way peninsulas can be formed?",
    choices: ["Volcanic activity", "Glacial movement", "Erosion", "Rising sea levels"],
    correct: "Glacial movement" 
},
{
    hasContent: false,
    quest: "A narrow strip of land connecting two larger areas is called:",
    choices: ["An isthmus", "A cape", "A strait", "A bay"],
    correct: "An isthmus"
},
{
    hasContent: false,
    quest: "Peninsulas often have unique:",
    choices: ["Climates", "Wildlife", "Coastal features", "All of the above"],
    correct: "All of the above"
},

// Famous Peninsulas
{
    hasContent: false,
    quest: "The Iberian Peninsula is home to Spain and:",
    choices: ["Italy", "Greece", "Portugal", "France"],
    correct: "Portugal"
},
{
    hasContent: false,
    quest: "The Italian Peninsula has a boot-like shape and is in:",
    choices: ["The Mediterranean Sea", "The Atlantic Ocean", "The Indian Ocean", "The North Sea"],
    correct: "The Mediterranean Sea"
},
{
    hasContent: false,
    quest: "The Florida Peninsula is part of:",
    choices: ["Mexico", "Canada", "The United States", "Cuba"],
    correct: "The United States"
},
{
    hasContent: false,
    quest: "The Arabian Peninsula is located in:",
    choices: ["North Africa", "Southeast Asia", "The Middle East", "South America"],
    correct: "The Middle East"
},

// Peninsulas and People
{
    hasContent: false,
    quest: "Peninsulas are often important for:",
    choices: ["Trade & ports", "Agriculture", "Tourism", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "A country entirely located on a peninsula is:",
    choices: ["Italy", "India", "South Korea", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "The Peloponnese is a famous peninsula in:",
    choices: ["Greece", "Spain", "Turkey", "Egypt"],
    correct: "Greece" 
},
{
    hasContent: false,
    quest: "The Yucatán Peninsula is known for its:",
    choices: ["Mayan ruins", "Mountain ranges", "Deserts", "Glaciers"],
    correct: "Mayan ruins"
},

// Geography and Environment
{
    hasContent: false,
    quest: "Peninsulas can create:",
    choices: ["Bays", "Harbors", "Unique currents", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "The Baja California Peninsula is known for its:", 
    choices: ["Rainforests", "Deserts", "Mountains", "Glaciers"],
    correct: "Deserts"
},
{
    hasContent: false,
    quest: "A cape is:", 
    choices: ["A large peninsula", "A narrow piece of land jutting into the sea", "An island", "A type of bay"],
    correct: "A narrow piece of land jutting into the sea"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "The Kamchatka Peninsula is famous for its:",
    choices: ["Volcanoes", "Beaches", "Ancient ruins", "Canals"],
    correct: "Volcanoes"
},
{
    hasContent: false,
    quest: "The Scandinavian Peninsula is in:",
    choices: ["Northern Europe", "Southeast Asia", "North America", "The Caribbean"],
    correct: "Northern Europe"
},
{
    hasContent: false,
    quest: "The Korean Peninsula is divided into:",
    choices: ["North Korea & South Korea", "China & Japan", "Vietnam and Laos"],
    correct: "North Korea & South Korea"
},
{
    hasContent: false,
    quest: "The Cape of Good Hope is at the tip of:",
    choices: ["Africa", "South America", "India", "Australia"],
    correct: "Africa"
},
{
    hasContent: false,
    quest: "The world's largest peninsula is:",
    choices: ["The Arabian Peninsula", "The Indian Peninsula", "The Alaska Peninsula", "Scandinavia"],
    correct: "The Arabian Peninsula"
},
// Basics of Volcanoes
{
    hasContent: false,
    quest: "Molten rock beneath the Earth's surface is called:",
    choices: ["Magma", "Lava", "Ash", "Granite"],
    correct: "Magma"
},
{
    hasContent: false,
    quest: "When a volcano erupts, it releases:",
    choices: ["Lava", "Ash", "Gases", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "The opening where a volcano erupts is the:",
    choices: ["Vent", "Crater", "Caldera", "Plate boundary"],
    correct: "Vent"
},
{
    hasContent: false,
    quest: "Volcanoes are often found at:",
    choices: ["Plate boundaries", "Mid-ocean ridges", "Stable continental areas", "Ocean trenches"],
    correct: "Plate boundaries"
},

// Types of Volcanoes
{
    hasContent: false,
    quest: "Shield volcanoes have:",
    choices: ["Gentle slopes", "Explosive eruptions", "Steep sides", "Small craters"], 
    correct: "Gentle slopes"
},
{
    hasContent: false,
    quest: "A volcanic eruption with thick, sticky lava is likely from a:",
    choices: ["Cinder cone volcano", "Stratovolcano", "Shield volcano", "Caldera"],
    correct: "Stratovolcano"
},
{
    hasContent: false,
    quest: "A large depression formed by a collapsed volcano is a:",
    choices: ["Cinder cone", "Crater", "Caldera", "Fissure"],
    correct: "Caldera"
},

// Famous Volcanoes
{
    hasContent: false,
    quest: "Mount Vesuvius, which destroyed Pompeii, is in:",
    choices: ["Italy", "Japan", "Hawaii", "Iceland"],
    correct: "Italy"
},
{
    hasContent: false,
    quest: "The 'Ring of Fire' refers to volcanic activity around the:",
    choices: ["Mediterranean Sea", "Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    correct: "Pacific Ocean"
},
{
    hasContent: false,
    quest: "Mount Fuji is an iconic volcano in:",
    choices: ["China", "Japan", "Indonesia", "The Philippines"],
    correct: "Japan"
},
{
    hasContent: false,
    quest: "The largest volcanic eruption in recent history occurred at:",
    choices: ["Krakatoa", "Mount Etna", "Mount St. Helens", "Yellowstone"],
    correct: "Krakatoa"
},

// Impacts of Volcanoes
{
    hasContent: false,
    quest: "Volcanic ash can disrupt:",
    choices: ["Air travel", "Agriculture", "Climate", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Volcanic eruptions can trigger:",
    choices: ["Earthquakes", "Tsunamis", "Landslides", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "A potential benefit of volcanic eruptions is:",
    choices: ["Fertile soil", "Geothermal energy", "Tourism", "All of the above"],
    correct: "All of the above"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "Mount Kilimanjaro is an example of a:",
    choices: ["Dormant Volcano", "Active Volcano", "Extinct Volcano", "Shield Volcano"],
    correct: "Dormant Volcano"
},
{
    hasContent: false,
    quest: "Yellowstone National Park is located atop a:",
    choices: ["Supervolcano", "Cinder cone", "Glacier", "Fault line"],
    correct: "Supervolcano"
},
{
    hasContent: false,
    quest: "Volcanoes can be found:",
    choices: ["On land", "Under the ocean",  "On other planets", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Scientists studying volcanoes are called:",
    choices: ["Meteorologists", "Geologists", "Volcanologists", "Paleontologists"],
    correct: "Volcanologists"
},
{
    hasContent: false,
    quest: "Some volcanoes form:",
    choices: ["At hot spots", "Along fault lines", "Where plates diverge", "Mid-continent"],
    correct: "At hot spots"
} 
];
const musicQuestions = [// Origins & History
{
    hasContent: false,
    quest: "Jazz music originated in:",
    choices: ["New Orleans", "Chicago", "New York City", "Memphis"],
    correct: "New Orleans"
},
{
    hasContent: false,
    quest: "Jazz has roots in African American musical traditions like:",
    choices: ["Blues & Ragtime", "Gospel & Spirituals", "Classical & Folk", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Which decade is considered the birth of recorded jazz?",
    choices: ["1890s", "1900s", "1920s", "1940s"],
    correct: "1920s"
},
{
    hasContent: false,
    quest: "The 'Swing Era' of jazz took place during:",
    choices: ["1930s-1940s", "1950s", "1960s-1970s", "1980s"],
    correct: "1930s-1940s"
},

// Key Elements & Styles 
{
    hasContent: false,
    quest: "Jazz is known for its emphasis on:",
    choices: ["Improvisation", "Syncopation", "Call and response", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "A common jazz chord progression is based on:",
    choices: ["The Blues", "Major scales", "Minor scales", "Classical forms"],
    correct: "The Blues"
},
{
    hasContent: false,
    quest: "Bebop is a style of jazz known for:",
    choices: ["Fast tempos & complex harmonies", "Smooth melodies & big bands", "Simple forms & danceability", "Free improvisation"],
    correct: "Fast tempos & complex harmonies"
},
{
    hasContent: false,
    quest: "Cool jazz emerged as a reaction to:",
    choices: ["Bebop", "Swing", "Classical music", "The Blues"],
    correct: "Bebop"
},

// Iconic Musicians
{
    hasContent: false,
    quest: "Louis Armstrong was famous for his:",
    choices: ["Trumpet playing & vocals", "Saxophone skills", "Piano compositions", "Big band leadership"],
    correct: "Trumpet playing & vocals"
},
{
    hasContent: false,
    quest: "Duke Ellington was a renowned:",
    choices: ["Bandleader & composer", "Drummer", "Singer", "Trumpet player"],
    correct: "Bandleader & composer"
},
{
    hasContent: false,
    quest: "Miles Davis was a pioneer of:",
    choices: ["Bebop", "Cool jazz", "Fusion", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "'The Queen of Jazz' was:",
    choices: ["Sarah Vaughan", "Nina Simone", "Ella Fitzgerald",  "Billie Holiday"],
    correct: "Ella Fitzgerald"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "A popular jazz standard is:",
    choices: [""Take Five"", ""Round Midnight"", ""Autumn Leaves"", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Latin jazz blends jazz with rhythms from:",
    choices: ["Cuba & Brazil", "Africa", "Eastern Europe", "India"],
    correct: "Cuba & Brazil"
},
{
    hasContent: false,
    quest: "Jazz fusion combines jazz with:",
    choices: ["Funk & Rock", "Classical", "Electronic", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Famous jazz festivals are held in:",
    choices: ["New Orleans & Montreal", "London & Tokyo", "Paris & Berlin","Sydney & Rio"],
    correct: "New Orleans & Montreal"
},

// Jazz Today
{
    hasContent: false,
    quest: "Modern jazz musicians often experiment with:",
    choices: ["Hip-hop", "Electronic music", "World music influences", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "One influential contemporary jazz artist is:",
    choices: ["Kamasi Washington", "Esperanza Spalding", "Robert Glasper", "All of the above"],
    correct: "All of the above" 
},
{
    hasContent: false,
    quest: "A great place to experience live jazz is:",
    choices: ["Jazz clubs", "Festivals", "Concert halls", "All of the above"],
    correct: "All of the above" 
},
{   
    hasContent: false,
    quest: "Jazz has influenced many other genres like:",
    choices: ["Soul", "R&B", "Rock", "All of the above"],
    correct: "All of the above" 
},
// Instrument Families
{
    hasContent: false,
    quest: "Violins and guitars belong to the _________ family.",
    choices: ["String", "Brass", "Percussion", "Woodwind"],
    correct: "String"
},
{
    hasContent: false,
    quest: "A drum set is part of the _________ family.",
    choices: ["Percussion", "Brass", "Electronic", "Woodwind"],
    correct: "Percussion"
},
{
    hasContent: false,
    quest: "Flutes, clarinets, and saxophones belong to the _________ family.",
    choices: ["Brass", "Woodwind", "String", "Percussion"],
    correct: "Woodwind"
},
{
    hasContent: false,
    quest: "Trumpets and trombones are _________ instruments.",
    choices: ["Brass", "Percussion", "String", "Hybrid"],
    correct: "Brass"
},

// Famous Instruments
{
    hasContent: false,
    quest: "The most popular instrument in the world is the:",
    choices: ["Piano", "Violin", "Guitar", "Trumpet"],
    correct: "Guitar"
},
{
    hasContent: false,
    quest: "The Stradivarius is a famous type of:",
    choices: ["Violin", "Piano", "Cello", "Flute"],
    correct: "Violin"
},
{
    hasContent: false,
    quest: "The didgeridoo is a traditional instrument from:",
    choices: ["Africa", "South America", "Australia", "India"],
    correct: "Australia"
},
{
    hasContent: false,
    quest: "The electric guitar was a key innovation in:",
    choices: ["Rock music", "Jazz", "Classical music", "Country music"],
    correct: "Rock music"
},

// How Instruments Work
{
    hasContent: false,
    quest: "Sound is produced by:",
    choices: ["Vibrations", "Air pressure", "Electricity", "Magnets"],
    correct: "Vibrations"
},
{
    hasContent: false,
    quest: "The instrument with the widest range of pitches is the:",
    choices: ["Piano", "Organ", "Harp ", "Violin"],
    correct: "Organ"
},
{
    hasContent: false,
    quest: "Stringed instruments can be played by:",
    choices: ["Plucking", "Bowing", "Striking", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "A saxophone produces sound using a:",
    choices: ["String", "Reed", "Mouthpiece", "Metal tube"],
    correct: "Reed"
},

// Learning & Playing
{
    hasContent: false,
    quest: "A good beginner instrument might be:",
    choices: ["Ukulele", "French horn", "Oboe", "Pipe organ"],
    correct: "Ukulele"
},
{
    hasContent: false,
    quest: "To change the pitch on a brass instrument, you:",
    choices: ["Move a slide", "Adjust keys", "Change reeds", "Press valves"],
    correct: "Press valves"
},
{
    hasContent: false,
    quest: "A conductor leads a/an:",
    choices: ["Orchestra", "Band", "Choir", "All of the above"],
    correct: "All of the above"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "The largest musical instrument is the:",
    choices: ["Pipe organ", "Grand piano", "Bass drum", "Tuba"],
    correct: "Pipe organ"
},
{
    hasContent: false,
    quest: "The human voice is considered an instrument.",
    choices: ["True", "False"],
    correct: "True" 
},
{
    hasContent: false,
    quest: "Synthesizers and samplers are:",
    choices: ["Woodwind instruments", "Electronic instruments", "Brass instruments", "Percussion instruments"],
    correct: "Electronic instruments"
},
{
    hasContent: false,
    quest: "Instruments are found in cultures...",
    choices: ["...around the world", "...mostly in the Western world", "...primarily in Asia", "...only in recent centuries"],
    correct: "...around the world"
},
{
    hasContent: false,
    quest: "You can learn to play an instrument:",
    choices: ["At any age", "Only as a child", "If you have natural talent", "Only with years of training"],
    correct: "At any age"
},
// 20th Century Giants
{
    hasContent: false,
    quest: "A pioneer of minimalism, known for repetitive patterns, is:",
    choices: ["Igor Stravinsky", "Philip Glass", "György Ligeti", "John Cage"],
    correct: "Philip Glass"
},
{
    hasContent: false,
    quest: "The composer of 'The Rite of Spring', a revolutionary ballet, is:",
    choices: ["Igor Stravinsky", "Arnold Schoenberg", "Leonard Bernstein", "Dmitri Shostakovich"],
    correct: "Igor Stravinsky"
},
{
    hasContent: false,
    quest: "A leader of the Second Viennese School, known for atonality, was:",
    choices: ["Arnold Schoenberg", "George Gershwin", "Karlheinz Stockhausen", "Béla Bartók"],
    correct: "Arnold Schoenberg"
},
{
    hasContent: false,
    quest: "The Russian composer who endured Soviet censorship:",
    choices: ["Dmitri Shostakovich", "Sergei Prokofiev", "György Ligeti", "Pyotr Ilyich Tchaikovsky"],
    correct: "Dmitri Shostakovich"
},

// American Influences
{
    hasContent: false,
    quest: "Composer of 'West Side Story' and conductor:",
    choices: ["Leonard Bernstein", "Aaron Copland", "John Adams", "Steve Reich"],
    correct: "Leonard Bernstein"
},
{
    hasContent: false,
    quest: "The composer of 'Appalachian Spring' was:",
    choices: ["Aaron Copland", "Charles Ives", "John Cage", "George Gershwin"],
    correct: "Aaron Copland"
},
{
    hasContent: false,
    quest: "A pioneer of experimental music, known for '4'33"', is:",
    choices: ["John Cage", "Steve Reich", "Iannis Xenakis", "Gyorgy Ligeti"],
    correct: "John Cage"
},
{
    hasContent: false,
    quest: "The composer who blended jazz and classical music like in 'Rhapsody in Blue' was:",
    choices: ["George Gershwin", "Duke Ellington", "Leonard Bernstein",  "John Williams"],
    correct: "George Gershwin"
},

// Film Score Masters
{
    hasContent: false,
    quest: "The composer of iconic scores like Star Wars and Indiana Jones is:",
    choices: ["John Williams", "Hans Zimmer", "Ennio Morricone", "Bernard Herrmann"],
    correct: "John Williams"
},
{
    hasContent: false,
    quest: "Known for his spaghetti western scores, he collaborated with Sergio Leone:",
    choices: ["Ennio Morricone", "Nino Rota", "John Barry", "Danny Elfman"],
    correct: "Ennio Morricone"
},
{
    hasContent: false,
    quest: "Composer of many famous Hitchcock film scores:", 
    choices: ["Bernard Herrmann", "Henry Mancini", "Howard Shore", "Hans Zimmer"],
    correct: "Bernard Herrmann"
},

// Contemporary Voices 
{
    hasContent: false,
    quest: "A leading American minimalist composer, famous for 'Einstein on the Beach' is:",
    choices: ["Philip Glass", "Steve Reich", "John Adams", "Terry Riley"],
    correct: "Philip Glass"
},
{
    hasContent: false,
    quest: "The composer of 'Nixon in China' and 'Doctor Atomic' is:",
    choices: ["John Adams", "Kaija Saariaho", "Thomas Adès", "György Ligeti"],
    correct: "John Adams"
},
{
    hasContent: false,
    quest: "This Finnish composer is known for her spectral and evocative music:",
    choices: ["Kaija Saariaho", "Tan Dun", "Jennifer Higdon", "Sofia Gubaidulina"],
    correct: "Kaija Saariaho"
},
{
    hasContent: false,
    quest: "A prolific film composer known for collaborations with Tim Burton:",
    choices: ["Danny Elfman", "Hans Zimmer", "Alexandre Desplat", "Michael Giacchino"],
    correct: "Danny Elfman"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "Pioneered the use of prepared piano:",
    choices: ["John Cage", "Igor Stravinsky", "György Ligeti", "Pierre Boulez"],
    correct: "John Cage"
},
{
    hasContent: false,
    quest: "Composed intensely complex orchestral works like 'Atmosphères':",
    choices: ["György Ligeti", "Iannis Xenakis", "Karlheinz Stockhausen", "Krzysztof Penderecki"],
    correct: "György Ligeti"
},
{
    hasContent: false,
    quest: "Estonian composer known for his minimalist choral works:",
    choices: ["Arvo Pärt", "György Ligeti", "Henryk Górecki", "Kaija Saariaho"],
    correct: "Arvo Pärt"
},
{
    hasContent: false,
    quest: "Composer known for electronic and musique concrète works:",
    choices: ["Pierre Schaeffer", "Karlheinz Stockhausen", "Luciano Berio", "Milton Babbitt"],
    correct: "Pierre Schaeffer"
},
{
    hasContent: false,
    quest: "A key influence on modern composition and music education:",
    choices: ["Carl Orff", "Béla Bartók", "Zoltán Kodály", "All of the above"],
    correct: "All of the above"
},
// Hans Zimmer
{
    hasContent: false,
    quest: "Hans Zimmer won an Oscar for his score to:",
    choices: ["Gladiator", "The Lion King", "Inception", "Dunkirk"],
    correct: "The Lion King"
},
{
    hasContent: false,
    quest: "Zimmer frequently collaborates with director:",
    choices: ["Steven Spielberg", "Christopher Nolan", "Ridley Scott", "James Cameron"],
    correct: "Christopher Nolan"
},
{
    hasContent: false,
    quest: "A Zimmer score known for its pipe organ is:",
    choices: ["Pirates of the Caribbean", "The Dark Knight", "Interstellar", "Dune"],
    correct: "Interstellar"
},
{
    hasContent: false,
    quest: "Hans Zimmer's studio is called:",
    choices: ["Remote Control Productions", "Skywalker Sound", "Abbey Road Studios", "Bad Robot"],
    correct: "Remote Control Productions"
},

// More Soundtrack Giants
{
    hasContent: false,
    quest: "The Italian composer known for minimalist piano pieces is:",
    choices: ["Ludovico Einaudi", "Ennio Morricone", "Nino Rota", "Yann Tiersen"],
    correct: "Ludovico Einaudi"
},
{
    hasContent: false,
    quest: "Ramin Djawadi composed the theme music for:",
    choices: ["Game of Thrones", "Harry Potter", "The Crown", "The Lord of the Rings"],
    correct: "Game of Thrones"
},
{
    hasContent: false,
    quest: "The composer behind 'The Mandalorian' score is:",
    choices: ["Ludwig Göransson", "John Powell", "Ramin Djawadi", "Hans Zimmer"],
    correct: "Ludwig Göransson"
},
{
    hasContent: false,
    quest: "Zack Hemsey is known for composing:",
    choices: ["Epic trailer music", "Video game soundtracks", "Ambient soundscapes", "Classical concertos"],
    correct: "Epic trailer music"
},
{
    hasContent: false,
    quest: "The composer of the iconic 'James Bond' theme is:",
    choices: ["Monty Norman", "John Barry", "Hans Zimmer", "Danny Elfman"],
    correct: "Monty Norman"
},

// Famous Soundtracks
{
    hasContent: false,
    quest: "The haunting 'Tubular Bells' theme was used in:",
    choices: ["The Exorcist", "Psycho", "Halloween", "The Shining"],
    correct: "The Exorcist"
},
{
    hasContent: false,
    quest: "Vangelis composed the electronic score for:",
    choices: ["Blade Runner", "Tron", "Chariots of Fire", "The Terminator"],
    correct: "Blade Runner"
},
{
    hasContent: false,
    quest: "The soundtrack for 'Pulp Fiction' features iconic:",
    choices: ["Surf rock", "Jazz standards", "Motown hits", "Disco tracks"],
    correct: "Surf rock"
},
{
    hasContent: false,
    quest: "The Bollywood composer known for his global influence is:",
    choices: ["A.R. Rahman", "R.D. Burman", "Ilaiyaraaja", "Shankar Mahadevan"],
    correct: "A.R. Rahman"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "The theremin creates an eerie sound in many:",
    choices: ["Sci-Fi films", "Westerns", "Documentaries", "Romantic comedies"],
    correct: "Sci-Fi films"
},
{
    hasContent: false,
    quest: "Two Steps From Hell is known for:",
    choices: ["Epic trailer music", "Video game scores", "Classical crossover", "Pop songs"],
    correct: "Epic trailer music"
},
{
    hasContent: false,
    quest: "Danny Elfman frequently collaborates with:",
    choices: ["Tim Burton", "Steven Spielberg", "Quentin Tarantino", "Christopher Nolan"],
    correct: "Tim Burton"
},
{
    hasContent: false,
    quest: "A soundtrack can elevate a film by:",
    choices: ["Setting the mood", "Underscoring emotion", "Creating memorable themes", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "John Williams also composed the scores for:",
    choices: ["Jurassic Park & Jaws", "Superman & E.T.", "Harry Potter & Indiana Jones", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Besides composition, soundtrack composers often also:",
    choices: ["Conduct the orchestra", "Produce the recordings", "Work with sound designers", "All of the above"],
    correct: "All of the above" 
},
// Iconic Collaborations
{
    hasContent: false,
    quest: "Alfred Hitchcock frequently worked with composer:",
    choices: ["Bernard Herrmann",  "John Williams", "Ennio Morricone", "Hans Zimmer"],
    correct: "Bernard Herrmann"
},
{
    hasContent: false,
    quest: "Sergio Leone's Spaghetti Westerns featured music by:",
    choices: ["Ennio Morricone", "Nino Rota", "John Barry", "Hans Zimmer"],
    correct: "Ennio Morricone"
},
{
    hasContent: false,
    quest: "Steven Spielberg often collaborates with composer:",
    choices: ["John Williams", "Danny Elfman", "Howard Shore", "Alan Silvestri"], 
    correct: "John Williams"
},
{
    hasContent: false,
    quest: "The music for many Studio Ghibli films is composed by:",
    choices: ["Joe Hisaishi", "Ryuichi Sakamoto", "Yoko Kanno", "Yuki Kajiura"],
    correct: "Joe Hisaishi"
},

// Soundtracks Across Genres
{
    hasContent: false,
    quest: "'The Good, The Bad and The Ugly' has a famous:",
    choices: ["Western score", "Horror theme", "Sci-Fi soundscape", "Romantic melody"],
    correct: "Western score"
},
{
    hasContent: false,
    quest: "The 'Pink Panther' theme is iconic in:",
    choices: ["Comedy films", "Action movies", "Romantic dramas", "Documentaries"],
    correct: "Comedy films"
},
{
    hasContent: false,
    quest: "John Carpenter is known for composing his own:",
    choices: ["Horror film scores", "Romantic comedies", "Westerns", "Disney songs"],
    correct: "Horror film scores"
},
{
    hasContent: false,
    quest: "The score for 'The Lord of the Rings' was composed by:",
    choices: ["Howard Shore", "James Horner", "John Powell", "Klaus Badelt"],
    correct: "Howard Shore"
},

// The Power of Music
{
    hasContent: false,
    quest: "A leitmotif is a musical theme that represents:",
    choices: ["A character or idea", "A change in mood", "The film's setting", "The passage of time"],
    correct: "A character or idea"
},
{
    hasContent: false,
    quest: "Underscoring in a film is:",
    choices: ["Music playing under dialogue", "The main theme song", "Sound effects", "Credits music"],
    correct: "Music playing under dialogue"
},
{
    hasContent: false,
    quest: "A temp track is:",
    choices: ["Existing music used during editing", "A rough draft of a score", "Music played live on set", "A deleted scene's music"],
    correct: "Existing music used during editing"
},

// Modern Soundtracks
{
    hasContent: false,
    quest: "Trent Reznor and Atticus Ross won an Oscar for scoring:",
    choices: ["The Social Network", "The Dark Knight", "Dunkirk", "Interstellar"],
    correct: "The Social Network" 
},
{
    hasContent: false,
    quest: "The composer of the 'Arrival' soundtrack is:",
    choices: ["Jóhann Jóhannsson", "Max Richter", "Clint Mansell", "Hans Zimmer"],
    correct: "Jóhann Jóhannsson"
},
{
    hasContent: false,
    quest: "The 'Black Panther' score won an Oscar for:",
    choices: ["Ludwig Göransson", "Terence Blanchard", "Nicholas Britell", "Alexandre Desplat"],
    correct: "Ludwig Göransson"
},
{
    hasContent: false,
    quest: "Hildur Guðnadóttir won an Oscar for her score to:",
    choices: ["Joker", "Little Women", "1917", "The Grand Budapest Hotel"],
    correct: "Joker"
},

// Beyond the Usual
{
    hasContent: false,
    quest: "Video game composers create music that:",
    choices: ["Adapts to gameplay", "Uses limited sound palettes", "Is often looped", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "One famous video game composer is:",
    choices: ["Nobuo Uematsu", "Jeremy Soule", "Bear McCreary", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Musical films often feature:",
    choices: ["Original songs", "Diegetic music", "Both of the above",  "None of the above"],
    correct: "Both of the above"
},
{
    hasContent: false,
    quest: "Anime soundtracks often feature:",
    choices: ["J-Pop songs", "Orchestral scores", "Experimental music", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Live orchestral performances of film scores are:",
    choices: ["Becoming more popular", "Rare events", "Only for old films", "Never done"],
    correct: "Becoming more popular"
} 

];
const mathematicsQuestions = [// Simple Puzzles
{
    hasContent: false,
    quest: "If 2 ¤ 3 = 8 and 4 ¤ 2 = 10, what is 3 ¤ 4 ?",
    choices: ["7", "12", "14", "16"],
    correct: "12"
},
{
    hasContent: false,
    quest: "If 6 ♦ 3 = 12 and 8 ♦ 2 = 20, what is  5 ♦ 4 ?",
    choices: ["16", "18", "22", "24"],
    correct: "24"
},
{
    hasContent: false,
    quest: "If  3 ∇ 5 = 1 and  7 ∇ 3 = 6, what is 4 ∇ 2 = ?",
    choices: ["2", "3", "4", "5"],
    correct: "3"
},
{
    hasContent: false,
    quest: "If 7 Ω 2 = 25 and 5 Ω 3 = 16, what is 4 Ω 2 = ?",
    choices: ["9", "12", "16", "20"],
    correct: "9"
},

// Slightly Trickier
{
    hasContent: false,
    quest: "If 5 ⊕ 3 = 14 and 9 ⊕ 2 = 20, what is 6 ⊕ 4 = ?",
    choices: ["18", "22", "24", "26"],
    correct: "26" 
},
{
    hasContent: false,
    quest: "If 8 ⊗ 3 = 32 and 5 ⊗ 4 = 28, what is 6 ⊗ 2 = ?",
    choices: ["16", "18", "20", "24"],
    correct: "20" 
},
{
    hasContent: false,
    quest: "If 4 % 6 = 16 and 7 % 3 = 25, what is 5 % 2 = ?",
    choices: ["15", "17", "19," "21"],
    correct: "19"
},
{
    hasContent: false,
    quest: "If 3 ! 7 = 18 and 8 ! 4 = 36, what is 5 ! 2 = ?",
    choices: ["9", "12", "15", "18"],
    correct: "15"
},

// Multiple Operators
{
    hasContent: false,
    quest: "If 3 + 2 = 10 and 4 + 5 = 18, what is 6 + 2 = ?",
    choices: ["12", "14", "16", "20"],
    correct: "16"
},
{
    hasContent: false,
    quest: "If 4 x 3 = 24 and 6 x 2 = 36, what is 5 x 4 = ?",
    choices: ["28", "30", "32", "34"],
    correct: "30"
},
{
    hasContent: false,
    quest: "If 4 $ 2 = 6 and 8 $ 5 = 3, what is 3 $ 6 = ?",
    choices: ["-3", "-1", "1", "3"],
    correct: "-3"
},
{
    hasContent: false,
    quest: "If 6 @ 3 = 18 and  5 @ 2 = 10, what is 4 @ 5 = ?",
    choices: ["5", "15", "20", "25"],
    correct: "20"
},

// Harder Challenges 
{
    hasContent: false,
    quest: "If 7 & 3 = 28 and 4 & 6 = 30, what is 5 & 2 = ?",
    choices: ["15", "17", "19", "21"],
    correct: "17" 
},
{
    hasContent: false,
    quest: "If 4 ~ 5 = 7 and 9 ~ 3 = 15, what is 6 ~ 2 =?",
    choices: ["10", "11", "12", "13"],
    correct: "11"
},
{
    hasContent: false,
    quest: "If 3 ⋆ 4 = 21 and 8 ⋆ 2 = 24, what is 5 ⋆ 6 = ?",
    choices: ["27", "30", "33", "36"],
    correct: "33"
},
{
    hasContent: false,
    quest: "If 6 ♣ 2 = 4 and 3 ♣ 5 = 2, what is 4 ♣ 3 = ?",
    choices: ["1", "2", "3", "4"],
    correct: "3"
},
{
    hasContent: false,
    quest: "If 2 | 6 = 10 and 5 | 3 = 8, what is 6 | 4 = ?",
    choices: ["6", "8", "10", "12"], 
    correct: "10"
},
{
    hasContent: false,
    quest: "If 7 $ 2 = 5 and 4 $ 6 = -2, what is 9 $ 3 = ?",
    choices: ["3", "6", "9", "12"],
    correct: "6"
},
{
    hasContent: false,
    quest: "If 3 + 5 = 4 and 6 + 2 = 4, what is 4 + 7 = ?",
    choices: ["3", "5", "7", "9"],
    correct: "5"
},
{
    hasContent: false,
    quest: "If 6 x 3 = 30 and 4 x 5 = 40, what is 7 x 2 = ?",
    choices: ["21", "28", "35", "42"],
    correct: "28"
},
// Example Puzzles
{
    hasContent: false,
    quest: "If 4 * 2 = 6 and 3 * 5 = 3,  what is 6 * 2 ?",
    choices: ["9", "10", "12", "18"],
    correct: "10"
},
{
    hasContent: false,
    quest: "If 7 % 2 = 1 and 4 % 3 = 5, what is 6 % 4 ?",
    choices: ["6", "10", "2", "0"],
    correct: "2"
},
{
    hasContent: false,
    quest: "If 3 & 6 = 30 and  5 & 2 = 12, what is 4 & 3 ?",
    choices: ["7", "15", "24", "36"],
    correct: "15"
},
{
    hasContent: false,
    quest: "If 8 / 2 = 12 and 6 / 3 = 9, what is 5 / 1 = ?",
    choices: ["6", "8", "10", "15"],
    correct: "10"
},

// Increasing Difficulty
{
    hasContent: false,
    quest: "If 2 $ 5 = 3 and 6 $ 3 = 1, what is 4 $ 2 ?",
    choices: ["-1", "0", "1", "2"],
    correct: "1"
},
{
    hasContent: false,
    quest: "If 6 ^ 2 = 10 and 3 ^ 4 = 17, what is 5 ^ 3 = ?",
    choices: ["18", "22", "14", "20"],
    correct: "22"
},
{
    hasContent: false,
    quest: "If 9 ! 4 = 13 and 5 ! 2 = 7, what is 7 ! 5 ?",
    choices: ["8", "12", "2", "5"],
    correct: "2"
},
{
    hasContent: false,
    quest: "If 5 ~ 3 = 16 and 8 ~ 6 = 50, what is 4 ~ 2 ?",
    choices: ["6", "9", "20", "36"],
    correct: "20"
},
// Basic Concepts
{
    hasContent: false,
    quest: "A set is a collection of:",
    choices: ["Numbers", "Variables", "Well-defined objects", "Operations"],
    correct: "Well-defined objects"
},
{
    hasContent: false,
    quest: "Which is the correct way to represent a set of even numbers?",
    choices: ["{2, 4, 6...} ", "(2, 4, 6...)", "[2, 4, 6...]", "None of the above"],
    correct: "{2, 4, 6...} "
},
{
    hasContent: false,
    quest: "If A = {1, 3, 5} and B = {1, 5, 7}, what is A ∩ B (A intersection B)?",
    choices: ["{1, 3, 5, 7}", "{1, 5}", "{3, 7}", "The empty set"],
    correct: "{1, 5}"
},
{
    hasContent: false,
    quest: "The symbol ∈ means:",
    choices: ["Is an element of", "Is a subset of", "Is equal to", "Is not equal to"],
    correct: "Is an element of"
},

// Set Operations
{
    hasContent: false,
    quest: "If A = {red, blue} and B = {green, blue}, what is A ∪ B (A union B)?",
    choices: ["{blue}", "{green}", "{red, blue, green}", "{red, green}"],
    correct: "{red, blue, green}"
},
{
    hasContent: false,
    quest: "Let U = {1, 2, 3, 4, 5} and A = {2, 4}. What is A' (the complement of A)?",
    choices: ["{1, 3, 5}", "{3, 5}", "{1, 2, 3}", "{1, 4, 5}"],
    correct: "{1, 3, 5}"
},
{
    hasContent: false,
    quest: "If A = {1, 2} and B = {2, 3}, what is A - B (A difference B)?",
    choices: ["{1}", "{2}", "{3}", "The empty set"],
    correct: "{1}"
},
{
    hasContent: false,
    quest: "The Cartesian product of sets A and B (A x B) is the set of:",
    choices: ["Common elements", "All elements in either set", "Ordered pairs",  "Subsets"],
    correct: "Ordered pairs"
},

// Venn Diagrams
{
    hasContent: false,
    quest: "In a Venn Diagram, the universal set is represented by:",
    choices: ["A circle", "A rectangle", "Overlapping circles", "A single point"],
    correct: "A rectangle"
},
{
    hasContent: false,
    quest: "How many regions are in a Venn diagram with 3 overlapping sets?",
    choices: ["3", "6", "8", "9"],
    correct: "8"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "The empty set is a subset of:",
    choices: ["Only itself", "No sets",  "Every set", "Some sets"],
    correct: "Every set"
},
{
    hasContent: false,
    quest: "If A has 5 elements and B has 3, what's the maximum number of elements in A ∪ B?",
    choices: ["3", "5", "8", "Cannot be determined"],
    correct: "8"
}, 
{
    hasContent: false,
    quest: "The Power Set of a set A is:",
    choices: ["The collection of all subsets of A", "The set of elements not in A", "The intersection of A with its complement", "The same as A"],
    correct: "The collection of all subsets of A"
},
{
    hasContent: false,
    quest: "When two sets have no elements in common, they are called:",
    choices: ["Complementary", "Disjoint", "Equivalent", "Subsets"],
    correct: "Disjoint"
},

// Applications
{
    hasContent: false,
    quest: "Set theory is used in probability to represent:",
    choices: ["Odds", "Fractions", "Events", "Variables"],
    correct: "Events"
},
{
    hasContent: false,
    quest: "Databases use set operations like:",
    choices: ["Union, intersection, difference", "Multiplication and division",  "Exponents and logarithms", "Addition and subtraction"],
    correct: "Union, intersection, difference"
},
{
    hasContent: false,
    quest: "A programming language might represent a set of colors using:",
    choices: ["An array", "A loop", "A variable", "A function"],
    correct: "An array"
},

// More Challenging 
{
    hasContent: false,
    quest: "Which is true about infinite sets?",
    choices: ["They have an unlimited number of elements", "They cannot be compared in size", "They cannot have subsets", "They are always equal"],
    correct: "They have an unlimited number of elements"
},
{
    hasContent: false,
    quest: "The set of real numbers is:",
    choices: ["Countable", "Uncountable", "Finite", "Discrete"],
    correct: "Uncountable"
}, 
{
    hasContent: false,
    quest: "A set with the same cardinality as the natural numbers is called:",
    choices: ["Infinite", "Rational", "Countably infinite", "Uncountable"],
    correct: "Countably infinite"
},
// Divisibility and Primes
{
    hasContent: false,
    quest: "A number divisible by both 3 and 4 is also divisible by:",
    choices: ["6", "8", "12", "15"],
    correct: "12"
},
{
    hasContent: false,
    quest: "Which of these is a prime number?",
    choices: ["9", "15", "21", "29"],
    correct: "29"
},
{
    hasContent: false,
    quest: "Find the greatest common divisor (GCD) of 24 and 36.",
    choices: ["3", "6", "12", "24"],
    correct: "12"
},
{
    hasContent: false,
    quest: "The least common multiple (LCM) of 4 and 6 is:",
    choices: ["12", "24", "36", "48"],
    correct: "12"
},

// Number Properties
{
    hasContent: false,
    quest: "A number that leaves a remainder of 1 when divided by 5 can be written as:",
    choices: ["5n", "5n + 1", "5n + 2", "5n + 4"],
    correct: "5n + 1"
},
{
    hasContent: false,
    quest: "The sum of three consecutive odd numbers is always divisible by:",
    choices: ["2", "3", "5", "7"],
    correct: "3" 
},
{
    hasContent: false,
    quest: "Which is a perfect square?",
    choices: ["20", "24", "27", "36"],
    correct: "36"
},
{   
    hasContent: false,
    quest: "Classify the number 0.",
    choices: ["Whole, Integer, Rational", "Natural, Integer, Rational",  "Integer, Rational", "Irrational"],
    correct: "Whole, Integer, Rational"
},

// Modular Arithmetic
{
    hasContent: false,
    quest: "17 + 21 (mod 8) equals:",
    choices: ["0", "2", "3", "5"],
    correct: "3"
},
{
    hasContent: false,
    quest: "Find the multiplicative inverse of 3 (mod 7)",
    choices: ["0", "1", "5", "None exists"],
    correct: "5"
},
{
    hasContent: false,
    quest: "Solve for x: 5x ≡ 2 (mod 6)",
    choices: ["x = 0", "x = 2", "x = 4", "x = 5"],
    correct: "x = 4" 
},

// Number Theory Applications
{
    hasContent: false,
    quest: "Determining if a large number is prime is useful for:",
    choices: ["Factoring numbers", "Cryptography", "Calculating square roots", "Weather prediction"],
    correct: "Cryptography"
},
{
    hasContent: false,
    quest: "Modular arithmetic is used in:",
    choices: ["ISBN numbers", "Calculating area", "Creating musical scales", "Linear equations"],
    correct: "ISBN numbers"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "A Pythagorean triple is a set of three integers that...",
    choices: ["Add up to 100", "Are all multiples of 3", "Satisfy the Pythagorean Theorem", "Are prime numbers"],
    correct: "Satisfy the Pythagorean Theorem"
},
{   
    hasContent: false,
    quest: "Which statement is true?",
    choices: ["All primes are odd", "The sum of two primes is always prime", "There are finitely many primes", "Every even number > 2 can be written as a sum of two primes"],
    correct: "Every even number > 2 can be written as a sum of two primes"
},
{
    hasContent: false,
    quest: "Euler's Totient Function, φ(n), counts the numbers...",
    choices: ["Less than and prime to n", "Divisible by n", "In the Fibonacci sequence less than n", "Perfect squares less than n"], 
    correct: "Less than and prime to n"
},

// Open-Ended
{
    hasContent: false,
    quest: "Describe the Goldbach Conjecture.",
    choices: ["None of the above", "...", "...", "..."],
    correct: "None of the above" 
},
{
    hasContent: false,
    quest: "What are some unsolved problems in number theory?",
    choices: ["None of the above", "...", "...", "..."],
    correct: "None of the above" 
},
{
    hasContent: false,
    quest: "How can number theory be applied in computer science?",
    choices: ["None of the above", "...", "...", "..."],
    correct: "None of the above" 
},
// Foundations

{
    hasContent: false,
    quest: "Recursion is a technique where a function...",
    choices: ["Calculates factorials", "Calls itself", "Sorts lists", "Creates loops"],
    correct: "Calls itself"
},
{
    hasContent: false,
    quest: "A recursive function needs these two essential parts:",
    choices: ["Iteration and variables", "Base case and recursive step", "Conditional statements and return values", "Arithmetic and comparison"],
    correct: "Base case and recursive step"
},
{
    hasContent: false,
    quest: "What output would this recursive function produce for f(3)?  f(0) = 1; f(n) = n * f(n - 1)",
    choices: ["0", "3", "6", "9"],
    correct: "6"
},
{
    hasContent: false,
    quest: "A classic example of a recursive problem is calculating:",
    choices: ["Area of a rectangle", "Prime numbers", "Factorials", "Square roots"],
    correct: "Factorials"
},

// Primitive Recursive Functions
{
    hasContent: false,
    quest: "Which of these is NOT a basic primitive recursive function?",
    choices: ["Zero function", "Successor function", "Projection function", "Ackermann function"],
    correct: "Ackermann function"
},
{
    hasContent: false,
    quest: "Primitive recursive functions are guaranteed to:",
    choices: ["Run quickly", "Be defined for all natural number inputs", "Never create errors", "Use iteration"],
    correct: "Be defined for all natural number inputs"
},

// μ-Recursive Functions

{
    hasContent: false,
    quest: "The μ-operator is used to represent:",
    choices: ["Multiplication", "Subtraction", "Minimization (finding the smallest)", "Factorial"],  
    correct: "Minimization (finding the smallest)"
},
{
    hasContent: false,
    quest: "Which class of functions do the μ-recursive functions encompass?",
    choices: ["Primitive recursive functions only", "All computable functions", "Polynomial functions only", "Exponential functions only"],
    correct: "All computable functions"
},

// Turing Machines and Computability 
{
    hasContent: false,
    quest: "The Church-Turing Thesis states that:",
    choices: ["All computers have the same power", "Any algorithm can be expressed as a Turing machine", "Recursion is faster than iteration", "Some problems are impossible to solve"],
    correct: "Any algorithm can be expressed as a Turing machine"
},
{
    hasContent: false,
    quest: "The Halting Problem is an example of a problem that is:",
    choices: ["Computable", "Primitive recursive", "Decidable", "Undecidable"],
    correct: "Undecidable"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "The Ackermann function is an example of a function that is:",
    choices: ["Computable but not primitive recursive", "Primitive recursive but not μ-recursive", "Not computable", "Both primitive recursive and μ-recursive"],
    correct: "Computable but not primitive recursive"
},
{
    hasContent: false,
    quest: "Recursion and iteration are:",
    choices: ["Essentially the same", "Interchangeable in all cases", "Equally computationally powerful", "Completely different"],
    correct: "Equally computationally powerful"
},
{
    hasContent: false,
    quest: "Tail recursion is important because:",
    choices: ["It's the fastest form of recursion", "Compilers often optimize it", "It's the easiest to understand", "It's the only type guaranteed to terminate"],
    correct: "Compilers often optimize it"
},

// Applications
{
    hasContent: false,
    quest: "Recursion is used in parsing for:", 
    choices: ["Computer languages", "Natural language", "DNA sequences", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Divide-and-conquer algorithms often use:",
    choices: ["Recursion", "Dynamic programming", "Linear search", "Greedy algorithms"],
    correct: "Recursion"
},

// Advanced Topics
{
    hasContent: false,
    quest: "The Recursion Theorem is a powerful tool for:",
    choices: ["Proving functions are computable", "Finding fixed points of functions", "Speeding up recursive algorithms", "Translating between recursion and iteration"],
    correct: "Finding fixed points of functions"
},
{
    hasContent: false,
    quest: "Lambda calculus is a model of computation related to:",
    choices: ["Number theory",  "Graph theory", "Recursion theory", "Finite state machines"],
    correct: "Recursion theory"
},
// Foundations
{
    hasContent: false,
    quest: "Proof theory is a branch of mathematical logic that studies:",
    choices: ["The nature of proofs", "Probability and statistics", "Set theory", "Graph algorithms"],
    correct: "The nature of proofs"
},
{
    hasContent: false,
    quest: "A formal system consists of:",
    choices: ["Axioms, inference rules, theorems", "Variables, equations, solutions", "Data sets, statistical measures", "None of the above"], 
    correct: "Axioms, inference rules, theorems"
},
{
    hasContent: false,
    quest: "A proof in a formal system is a:",
    choices: ["Sequence of well-formed formulas", "Subjective argument", "Guess that we hope is true", "Set of true statements"],
    correct: "Sequence of well-formed formulas"
},
{
    hasContent: false,
    quest: "Which of these is a common inference rule in propositional logic?",
    choices: ["Modus ponens", "Contradiction", "Syllogism", "Division by zero"],
    correct: "Modus ponens"
},

// Consistency and Completeness
{
    hasContent: false,
    quest: "A formal system is consistent if it:",
    choices: ["Is easy to learn", "Can prove all true statements", "Cannot prove a contradiction", "Has a finite set of axioms"],
    correct: "Cannot prove a contradiction"
},
{
    hasContent: false,
    quest: "A formal system is complete if it:",
    choices: ["Cannot prove a contradiction", "Can prove or disprove all its well-formed formulas", "Is consistent", "Uses only a few inference rules"],
    correct: "Can prove or disprove all its well-formed formulas"
},
{
    hasContent: false,
    quest: "Gödel's Incompleteness Theorems proved that:",
    choices: ["All formal systems are useless", "Some mathematical truths can't be proven in sufficiently strong systems", "Computers will surpass human mathematicians", "There are no contradictions in mathematics"], 
    correct: "Some mathematical truths can't be proven in sufficiently strong systems"
},

// Proof Techniques
{
    hasContent: false,
    quest: "Proof by contradiction involves:",
    choices: ["Assuming the opposite, deriving a contradiction", "Deducing from assumptions to conclusion", "Finding a case that disproves the statement", "All of the above"],
    correct: "Assuming the opposite, deriving a contradiction"
},
{
    hasContent: false,
    quest: "Proof by induction is often used to prove statements about:",
    choices: ["Natural numbers", "Irrational numbers", "Complex numbers", "Geometric shapes"],
    correct: "Natural numbers"
},
{
    hasContent: false,
    quest: "A proof assistant is:",
    choices: ["A tool to help write and check proofs", "A famous mathematician", "A type of logical paradox", "An alternative to proof by contradiction"],
    correct: "A tool to help write and check proofs"
},

// First-Order Logic
{
    hasContent: false,
    quest: "First-order logic allows for:",
    choices: ["Quantifiers over objects", "Reasoning about functions", "Representing sets", "Describing probabilities"],
    correct: "Quantifiers over objects"
},
{
    hasContent: false,
    quest: "An example of a first-order logic formula is:",
    choices: ["(p ∧ q) → r", "∀x.∃y.(x < y)", "∫ f(x) dx", "E = mc^2"],
    correct: "∀x.∃y.(x < y)"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "Gentzen's sequent calculus is:",
    choices: ["A proof system for first-order logic", "A method for proving program correctness", "A way to analyze the complexity of proofs", "A model for parallel computation"],
    correct: "A proof system for first-order logic"
},
{
    hasContent: false,
    quest: "The Curry-Howard correspondence relates:",
    choices: ["Proofs and programs", "Set theory and number theory", "Geometry and algebra", "Probability and statistics"],
    correct: "Proofs and programs"
}, 
{
    hasContent: false,
    quest: "Proof theory is applied in:",
    choices: ["Computer science verification", "Philosophical foundations of math", "Linguistics", "All of the above"],
    correct: "All of the above"
},

// Advanced 
{
    hasContent: false,
    quest: "Intuitionistic logic differs from classical logic by rejecting:",
    choices: ["Modus ponens", "The law of the excluded middle", "Proof by contradiction", "Axioms"],
    correct: "The law of the excluded middle"
}, 
{
    hasContent: false,
    quest: "Which field studies computable proofs?",
    choices: ["Constructive mathematics", "Recursion theory", "Abstract algebra", "Number theory"],
    correct: "Constructive mathematics"
},
// Foundations
{
    hasContent: false,
    quest: "Model theory studies the relationship between:",
    choices: ["Formal languages & their models", "Groups & rings", "Numbers & equations", "Graphs & algorithms"],
    correct: "Formal languages & their models"
},
{
    hasContent: false,
    quest: "A model in model theory is a/an:",
    choices: ["Abstract representation", "Mathematical structure", "Set of formulas", "Proof system"],
    correct: "Mathematical structure"
},
{
    hasContent: false,
    quest: "A sentence true in all models of a theory is called a:",
    choices: ["Theorem", "Logical consequence", "Contradiction", "Tautology"],
    correct: "Logical consequence"
},
{
    hasContent: false,
    quest: "Tarski's definition of truth is central to:",
    choices: ["Model theory", "Set theory", "Recursion theory", "Proof theory"],
    correct: "Model theory"
},

// First-Order Logic & Models
{
    hasContent: false,
    quest: "A signature in first-order logic specifies:", 
    choices: ["Axioms & rules", "Constants, functions, relations", "Proof techniques", "Logical connectives"],
    correct: "Constants, functions, relations"
},
{
    hasContent: false,
    quest: "An interpretation assigns meaning to:",
    choices: ["Symbols in a signature", "Variables in a formula", "Deduction rules", "Theorems"],
    correct: "Symbols in a signature"
},
{
    hasContent: false,
    quest: "Isomorphism between models implies:",
    choices: ["They have the same size", "They're logically equivalent", "They satisfy the same axioms", "None of the above"],
    correct: "They're logically equivalent"
},

// Completeness & Compactness
{
    hasContent: false,
    quest: "A theory is complete if every sentence or its negation is:",
    choices: ["Provable", "Decidable", "Consistent", "Satisfiable"],
    correct: "Provable"
},
{
    hasContent: false,
    quest: "Compactness Theorem says: a set of sentences is satisfiable if...",
    choices: ["...it is complete", "...every finite subset is satisfiable", "...it has a finite model", "...it has at least one model"],
    correct: "...every finite subset is satisfiable"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "Löwenheim-Skolem Theorem has implications for:",
    choices: ["Cardinality of models", "Existence of nonstandard models", "Limits of axiomatizability", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "A type in model theory is:",
    choices: ["Signature element", "A kind of model",  "A set of consistent formulas", "A proof rule"],
    correct: "A set of consistent formulas"
},
{
    hasContent: false,
    quest: "Categoricity refers to a theory having:",
    choices: ["A unique model up to isomorphism", "Infinitely many models", "No finite models", "Only trivial models"], 
    correct: "A unique model up to isomorphism" 
},

// Applications
{
    hasContent: false,
    quest: "Model theory is used in the study of:",
    choices: ["Algebraic structures", "Database theory", "Mathematical logic", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "Nonstandard analysis uses model theory to:",
    choices: ["Extend the real numbers", "Analyze proof length", "Compute prime numbers", "Study graph algorithms"],
    correct: "Extend the real numbers"
},

// Advanced Topics 
{
    hasContent: false,
    quest: "Model-theoretic forcing is a technique in:",
    choices: ["Proof theory", "Set theory", "Number theory", "Algebra"],
    correct: "Set theory"
},
{
    hasContent: false,
    quest: "Stability theory in model theory classifies theories based on:", 
    choices: ["Number of models", "Complexity of types", "Decidability", "Axiomatizability"],
    correct: "Complexity of types"
},
// Understanding Derivatives
{
    hasContent: false,
    quest: "A derivative represents the:",
    choices: ["Slope of a line", "Instantaneous rate of change", "Area under a curve", "Average value of a function"],
    correct: "Instantaneous rate of change"
},
{
    hasContent: false,
    quest: "The derivative of f(x) = x² is:",
    choices: ["x", "2x", "x³", "2"],
    correct: "2x"
},
{
    hasContent: false,
    quest: "The derivative of a constant is always:",
    choices: ["0", "1", "The constant itself", "Undefined"],
    correct: "0"
},
{
    hasContent: false,
    quest: "The notation d/dx [f(x)] means:",
    choices: ["Divide f(x) by x", "Derivative of f(x)", "Definite integral of f(x)", "Difference quotient of f(x)"],
    correct: "Derivative of f(x)"
},

// Differentiation Rules
{
    hasContent: false,
    quest: "The derivative of sin(x) is:",
    choices: ["cos(x)", "-sin(x)", "-cos(x)", "1/cos(x)"],
    correct: "cos(x)"
},
{
    hasContent: false,
    quest: "The Product Rule is used to differentiate:",
    choices: ["Products of functions", "Quotients of functions", "Composite functions", "Exponential functions"],
    correct: "Products of functions"
},
{
    hasContent: false,
    quest: "The Chain Rule is used to differentiate:",
    choices: ["Products of functions", "Quotients of functions", "Composite functions", "Trigonometric functions"],
    correct: "Composite functions"
},
{
    hasContent: false,
    quest: "Find the derivative of  e^x * cos(x)",
    choices: ["e^x * cos(x) - e^x * sin(x)", "e^x * cos(x) + e^x * sin(x)", "e^x * sin(x)", "None of the above"],
    correct: "e^x * cos(x) - e^x * sin(x)"
},

// Applications
{
    hasContent: false,
    quest: "In physics, the derivative of position is:",
    choices: ["Acceleration", "Velocity", "Force", "Energy"],
    correct: "Velocity"
},
{
    hasContent: false,
    quest: "Finding critical points involves setting the derivative equal to:",
    choices: ["1", "x", "0", "The original function"],
    correct: "0"
},
{
    hasContent: false,
    quest: "The second derivative can be used to test for:",
    choices: ["Slope", "Maxima and minima", "Roots", "Area"],
    correct: "Maxima and minima"
},

// Implicit Differentiation & Beyond
{
    hasContent: false,
    quest: "Implicit differentiation is used when:",
    choices: ["The function is not explicit", "The function has multiple variables", "The function contains a derivative", "The function is trigonometric"],
    correct: "The function is not explicit"
},
{
    hasContent: false,
    quest: "The derivative of ln(x) is:",
    choices: ["e^x", "x", "1/x", "log(x)"],
    correct: "1/x"
},
{
    hasContent: false,
    quest: "Related rates problems involve:",
    choices: ["Rates of change connected by an equation", "Multiple derivatives", "Implicit differentiation", "All of the above"],
    correct: "All of the above"
},

// Challenging Concepts
{
    hasContent: false,
    quest: "L'Hôpital's Rule is used to:",
    choices: ["Find limits of indeterminate forms", "Find areas under curves", "Differentiate trigonometric functions",  "Evaluate definite integrals"],
    correct: "Find limits of indeterminate forms"
},
{
    hasContent: false,
    quest: "What is the derivative of f(x) = |x|?",
    choices: ["1", "-1", "x/|x| (not defined at x=0)", "0"],
    correct: "x/|x| (not defined at x=0)" 
},
{
    hasContent: false,
    quest: "Higher-order derivatives represent:",
    choices: ["Repeated differentiation", "Rates of change of rates of change", "Complex derivatives", "Limits of derivatives"],
    correct: "Repeated differentiation"
},
// Basic Indefinite Integrals
{
    hasContent: false,
    quest: "Find the integral of 3x^2 dx",
    choices: ["6x", "x^3 + C", "6x^3 + C", "3x"],
    correct: "x^3 + C"
},
{
    hasContent: false,
    quest: " ∫ cos(x) dx = ?",
    choices: ["sin(x) + C", "-sin(x) + C", "-cos(x) + C", "1/sin(x) + C"],
    correct: "sin(x) + C"
},
{
    hasContent: false,
    quest: "Evaluate ∫ (1/x) dx",
    choices: ["ln|x| + C", "-1/x^2 + C", "e^x + C", "x^2/2 + C"],
    correct: "ln|x| + C"
},
{
    hasContent: false,
    quest: "∫ e^x dx = ?",
    choices: ["e^x + C", "-e^x + C", "x * e^(x-1) + C", "ln|x| + C"],
    correct: "e^x + C"
},

// Definite Integrals
{
    hasContent: false,
    quest: "Evaluate the definite integral: ∫ (from 0 to 2) x^2 dx",
    choices: ["4/3", "2", "8/3", "4"],
    correct: "8/3"
},
{
    hasContent: false,
    quest: "The Fundamental Theorem of Calculus connects:",
    choices: ["Differentiation and integration", "Area and limits", "Algebra and geometry", "Probability and statistics"], 
    correct: "Differentiation and integration"
},

// Techniques of Integration
{
    hasContent: false,
    quest: "Integration by substitution is the reverse of the:",
    choices: ["Power rule", "Product rule", "Chain rule", "Quotient rule"],
    correct: "Chain rule"
},
{
    hasContent: false,
    quest: "To integrate ∫ x*e^x dx, you would use:",
    choices: ["Integration by parts", "Substitution", "Trigonometric identities", "The power rule"],
    correct: "Integration by parts"
},
{
    hasContent: false,
    quest: "∫ [1/(x^2 + 1)] dx involves:",
    choices: ["Inverse trigonometric functions", "Partial fractions", "Integration by parts", "Numerical methods"], 
    correct: "Inverse trigonometric functions"
},

// Applications of Integrals
{
    hasContent: false,
    quest: "The area under the curve y = f(x) between x=a and x=b is given by:",
    choices: ["The definite integral of f(x) from a to b", "The derivative of f(x)", "The limit of f(x) as x approaches a", "f(b) - f(a)"],
    correct: "The definite integral of f(x) from a to b"
},
{
    hasContent: false,
    quest: "To find the volume of a solid of revolution, you would use:",
    choices: ["Differentiation", "Definite integrals", "Trigonometric substitution", "Limits"],
    correct: "Definite integrals"
},
{
    hasContent: false,
    quest: "Integrals can be used in physics to calculate:",
    choices: ["Work", "Displacement", "Momentum", "All of the above"],
    correct: "All of the above"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "An improper integral is one where:",
    choices: ["The integrand is undefined at a point", "Limits are infinite", "The result is negative", "There's no antiderivative"],
    correct: "The integrand is undefined at a point"
},
{
    hasContent: false,
    quest: "Numerical integration methods are used when:",
    choices: ["There's no closed-form antiderivative",  "The integral is improper", "The limits are complex numbers", "All of the above"],
    correct: "There's no closed-form antiderivative"
},

// Conceptual 
{
    hasContent: false,
    quest: "The integral is the opposite of the derivative in the sense of:",
    choices: ["Multiplication and division", "The Fundamental Theorem of Calculus", "Slope and area", "Limits and continuity"],
    correct: "The Fundamental Theorem of Calculus"
},
{
    hasContent: false,
    quest: "A Riemann sum approximates an integral using:",
    choices: ["Rectangles", "Trapezoids", "Parabolas", "Disks"],
    correct: "Rectangles" 
},
// Powers and Polynomials
{
    hasContent: false,
    quest: "∫ x^4 dx = ?",
    choices: ["4x^3 + C", "x^5/5 + C", "5x^4 + C", "x^5 + C"],
    correct: "x^5/5 + C"
},
{
    hasContent: false,
    quest: "∫ √x dx = ?",
    choices: ["2x^(3/2)/3 + C", "1/(2√x) + C", "ln|x| + C", "None of the above"],
    correct: "2x^(3/2)/3 + C"
},
{
    hasContent: false,
    quest: "∫ (3x^3 - 2x + 5) dx = ?",
    choices: ["9x^2 - 2 + C", "3x^4/4 - x^2 + 5x + C", "x^4 - x^2 + 5x + C", "9x^4 - 2x^2 + 5 + C"],
    correct: "3x^4/4 - x^2 + 5x + C"
},
{
    hasContent: false,
    quest: "∫ dx = ?",
    choices: ["1 + C", "0 + C", "x + C", "ln|x| + C"],
    correct: "x + C"
},

// Trigonometric Functions
{
    hasContent: false,
    quest: "∫ tan(x) dx = ?",
    choices: ["ln|sec(x)| + C", "sec^2(x) + C", "-cot(x) + C", "None of the above"],
    correct: "ln|sec(x)| + C"
},
{
    hasContent: false,
    quest: "∫ sec^2(x) dx = ?",
    choices: ["tan(x) + C", "cos^2(x) + C", "ln|cos(x)| + C", "2sec(x) + C"],
    correct: "tan(x) + C"
},
{
    hasContent: false,
    quest: "∫ cot(x) dx = ?",
    choices: ["-csc^2(x) + C", "ln|sin(x)| + C", "ln|cos(x)| + C", "None of the above"],
    correct: "ln|sin(x)| + C"
},
{
    hasContent: false,
    quest: "∫ csc(x) dx = ?",
    choices: ["cot(x) + C", "cos(x) + C", "sin(x) + C", "-ln|csc(x) + cot(x)| + C"],
    correct: "-ln|csc(x) + cot(x)| + C"
},

// Exponential and Logarithmic Functions
{
    hasContent: false,
    quest: "∫ (1/x^2) dx = ?", 
    choices: ["-1/x  + C", "1/x^3 + C", "2x + C", "ln|x| + C"],
    correct: "-1/x  + C"
},
{
    hasContent: false,
    quest: "∫ 2^x dx = ?",
    choices: ["2^x / ln(2) + C", "x * 2^(x-1) + C", "2x + C", "None of the above"],
    correct: "2^x / ln(2) + C"
},
{
    hasContent: false,
    quest: "∫ 1/(x + 1) dx =?",
    choices: ["-1/(x+1)^2 + C", "ln|x+1| + C", "1/x^2 + C", "None of the above"],
    correct: "ln|x+1| + C"
},
{
    hasContent: false,
    quest: "∫ 1/(3x - 5) dx = ?",
    choices: ["(1/3)ln|3x - 5| + C", "ln|3x - 5| + C", "-1/(5-3x)^2 + C", "None of the above"],
    correct: "(1/3)ln|3x - 5| + C"
},

// Inverse Trigonometric Functions 
{
    hasContent: false,
    quest: "∫ 1/(√(1 - x^2)) dx =?",
    choices: ["arcsin(x) + C", "arccos(x) + C", "-1/√x + C", "None of the above"],
    correct: "arcsin(x) + C"
},
{
    hasContent: false,
    quest: "∫ 1/(1 + 4x^2) dx = ?",
    choices: ["ln|1 + 4x^2| + C", "(1/2)arctan(2x) + C", "arctan(x) + C", "None of the above"],
    correct: "(1/2)arctan(2x) + C"
},

// Mixing It Up
{
    hasContent: false,
    quest: "∫ (x + sin(x)) dx = ?",
    choices: ["x^2/2 - cos(x) + C", "1 + cos(x) + C", "x^2/2 + cos(x) + C", "None of the above"],
    correct: "x^2/2 - cos(x) + C"
},
{
    hasContent: false,
    quest: "∫ (e^x + 1/x) dx = ?",
    choices: ["e^x  + ln|x| + C", "xe^x + ln|x| + C",  "e^x - 1/x^2 + C", "None of the above"],
    correct: "e^x  + ln|x| + C"
} 
];
const sportsQuestions = [
    // Basics
{
    hasContent: false,
    quest: "The Champions League is an annual club competition in:",
    choices: ["Basketball", "Football (Soccer)", "Tennis", "Rugby"],
    correct: "Football (Soccer)"
},
{
    hasContent: false,
    quest: "The Champions League final is held in:",
    choices: ["The same city every year", "The home stadium of the defending champion", "A different city each year", "Always in London"],
    correct: "A different city each year"
},
{
    hasContent: false,
    quest: "Teams qualify for the Champions League mostly by:",
    choices: ["Winning their domestic league", "Fan vote", "Being invited by UEFA", "Winning a lower-tier European competition"],
    correct: "Winning their domestic league"
},
{
    hasContent: false,
    quest: "The current Champions League format has a...",
    choices: ["Knockout tournament only", "Group stage followed by knockouts", "Double round-robin league", "Single-elimination with a consolation bracket"],
    correct: "Group stage followed by knockouts"
},

// History & Records
{
    hasContent: false,
    quest: "Which club has won the most Champions League titles?",
    choices: ["Real Madrid", "AC Milan", "Liverpool", "Bayern Munich"],
    correct: "Real Madrid"
},
{
    hasContent: false,
    quest: "Who is the all-time top scorer in Champions League history?",
    choices: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Karim Benzema"],
    correct: "Cristiano Ronaldo"
},
{
    hasContent: false,
    quest: "The only manager to win the Champions League with three different clubs is:",
    choices: ["Pep Guardiola", "José Mourinho", "Carlo Ancelotti", "Alex Ferguson"],
    correct: "Carlo Ancelotti"
},
{
    hasContent: false,
    quest: "Which nation has produced the most Champions League winners?",
    choices: ["England", "Italy", "Germany", "Spain"],
    correct: "Spain"
},

// Recent Seasons
{
    hasContent: false,
    quest: "The 2022 Champions League final was won by:",
    choices: ["Liverpool", "Manchester City", "Chelsea", "Real Madrid"],
    correct: "Real Madrid"
},
{
    hasContent: false,
    quest: "A surprise finalist in recent years was:",
    choices: ["Tottenham Hotspur", "FC Porto", "Ajax", "RB Leipzig"],
    correct: "Tottenham Hotspur"
},

// Famous Moments
{
    hasContent: false,
    quest: "The 'Miracle of Istanbul' refers to which team's comeback in the 2005 final?",
    choices: ["Liverpool", "AC Milan", "Barcelona", "Inter Milan"],
    correct: "Liverpool"
},
{
    hasContent: false,
    quest: "'La Décima' refers to:",
    choices: ["Real Madrid's 10th Champions League win", "Barcelona's treble season", "Bayern Munich's dominance", "A famous comeback"],
    correct: "Real Madrid's 10th Champions League win"
},

// Beyond the Basics
{
    hasContent: false,
    quest: "The away goals rule in the Champions League...",
    choices: ["... was recently abolished", "...gives advantage to the team playing the second leg at home", "...counts double in extra time", "...is only in effect during the group stage"],
    correct: "... was recently abolished"
}, 
{
    hasContent: false,
    quest: "The Europa League is:",
    choices: ["The youth version of the Champions League", "A second-tier European competition", "A tournament for national teams", "The old name of the Champions League"],
    correct: "A second-tier European competition"
},
{
    hasContent: false,
    quest: "Financial Fair Play rules in the Champions League aim to:",
    choices: ["Limit clubs' spending", "Ensure competitive balance", "Prevent fan violence", "Promote player safety"],
    correct: "Limit clubs' spending"
},
{
    hasContent: false,
    quest: "The introduction of VAR in the Champions League has been:",
    choices: ["Unpopular and unsuccessful", "Controversial but generally accepted", "Universally praised", "Unused due to technical issues"],
    correct: "Controversial but generally accepted"
},

// Opinion-Based
{
    hasContent: false,
    quest: "The biggest underdog story in Champions League history is...",
    choices: ["...", "...", "...", "..." ],
    correct: "None of the above" 
},
{   
    hasContent: false,
    quest: "The Champions League needs to change its format to...",
    choices: ["...", "...", "...", "..." ],
    correct: "None of the above" 
},
// Basics & Rules 
{
    hasContent: false,
    quest: "How many sets does a women's Grand Slam match usually have?",
    choices: ["Best of 2", "Best of 3", "Best of 5", "Best of 7"],
    correct: "Best of 3"
},
{
    hasContent: false,
    quest: "What is a 'let' serve?",
    choices: ["A serve that hits the net and lands in", "A serve that is out", "A serve that touches the line", "A fault"],
    correct: "A serve that hits the net and lands in"
},
{
    hasContent: false,
    quest: "What is the score called when each player has won one game?",
    choices: ["Fifteen-all", "Deuce", "Advantage", "Thirty-all"],
    correct: "Fifteen-all"
},
{
    hasContent: false,
    quest: "How many points are needed to win a game?",
    choices: ["At least 3 with a one-point difference", "At least 4 with a one-point difference", "At least 4 with a two-point difference", "At least 5 with a two-point difference"],
    correct: "At least 4 with a two-point difference"
},

// Surfaces & Tournaments
{
    hasContent: false,
    quest: "Wimbledon is played on which surface?",
    choices: ["Clay", "Grass", "Hardcourt", "Carpet"],
    correct: "Grass"
},
{
    hasContent: false,
    quest: "The French Open is played on which surface?",
    choices: ["Clay", "Grass", "Hardcourt", "Carpet"],
    correct: "Clay"
},
{
    hasContent: false,
    quest: "Which Grand Slam tournament is played in Australia?",
    choices: ["US Open", "Wimbledon", "Australian Open", "French Open"],
    correct: "Australian Open"
},
{
    hasContent: false,
    quest: "Outside Grand Slams, the most prestigious tournaments are part of:",
    choices: ["ATP/WTA Challenger Series", "ATP/WTA Masters 1000", "ITF World Tour", "Davis Cup/Billie Jean King Cup"],
    correct: "ATP/WTA Masters 1000"
},

// Technique & Shots 
{
    hasContent: false,
    quest: "A shot hit hard with topspin is called a:",
    choices: ["Volley", "Drop shot", "Forehand", "Backhand"],
    correct: "Forehand"
},
{
    hasContent: false,
    quest: "A 'slice' shot is hit with:",
    choices: ["Topspin", "Backspin", "Flat (no spin)", "Sidespin"],
    correct: "Backspin"
},
{
    hasContent: false,
    quest: "A 'lob' shot is:",
    choices: ["A powerful overhead shot", "A shot hit high to the opponent's backline", "A short, low shot",  "A serve"],
    correct: "A shot hit high to the opponent's backline"
},

// Famous Players
{
    hasContent: false,
    quest: "Who holds the record for most men's singles Grand Slam titles?",
    choices: ["Roger Federer", "Rafael Nadal", "Pete Sampras", "Novak Djokovic"],
    correct: "Rafael Nadal"
},
{
    hasContent: false,
    quest: "The Williams sisters, Serena and Venus, are known for:", 
    choices: ["Their powerful playstyle", "Their rivalry", "Their longevity ", "All of the above"],
    correct: "All of the above"
},
{
    hasContent: false,
    quest: "The only player to win a true 'Golden Slam' is:",
    choices: ["Steffi Graf", "Roger Federer", "Serena Williams", "Novak Djokovic"],
    correct: "Steffi Graf"
},

// Current Events (May change over time)
{
    hasContent: false,
    quest: "Who won the most recent Wimbledon men's singles title?",
    choices: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Andy Murray"],
    correct: "Novak Djokovic"
},

// Open-Ended 
{
    hasContent: false,
    quest: "What makes tennis a challenging sport? ",
    choices: ["...", "...", "...", "..." ],
    correct: "None of the above" 
},
{
    hasContent: false,
    quest: "What is your favorite tennis rivalry?  ",
    choices: ["...", "...", "...", "..." ],
    correct: "None of the above" 
},
// Legendary Figures
{
    hasContent: false,
    quest: "The Brazilian icon known as 'The King' is:",
    choices: ["Ronaldinho", "Ronaldo", "Pelé", "Neymar"], 
    correct: "Pelé"
},
{
    hasContent: false,
    quest: "The Argentinian player nicknamed 'La Pulga' (The Flea) is:",
    choices: ["Diego Maradona", "Lionel Messi", "Sergio Agüero", "Carlos Tevez"],
    correct: "Lionel Messi"
},
{
    hasContent: false,
    quest: "The Dutch 'Total Football' legend of the 1970s was:",
    choices: ["Marco van Basten", "Johan Cruyff", "Ruud Gullit", "Dennis Bergkamp"],
    correct: "Johan Cruyff"
},
{
    hasContent: false,
    quest: "The Portuguese superstar known for his goal-scoring prowess is:",
    choices: ["Eusébio", "Cristiano Ronaldo", "Luís Figo", "Bernardo Silva"],
    correct: "Cristiano Ronaldo"
},

// Positional Masters
{
    hasContent: false,
    quest: "The German known as 'Der Kaiser' revolutionized the role of:",
    choices: ["Striker", "Midfielder", "Defender", "Goalkeeper"],
    correct: "Defender"
},
{
    hasContent: false,
    quest: "Considered by many the greatest goalkeeper ever, this Russian was nicknamed 'The Black Spider':",
    choices: ["Oliver Kahn", "Lev Yashin", "Manuel Neuer", "Gianluigi Buffon"],
    correct: "Lev Yashin"
},
{
    hasContent: false,
    quest: "The attacking midfielder with the iconic number 10 shirt for Brazil was:",
    choices: ["Zico", "Pelé", "Rivaldo", "Ronaldinho"],
    correct: "Pelé"
},
{
    hasContent: false,
    quest: "Known for his dribbling skills and controversial 'Hand of God' goal:",
    choices: ["Diego Maradona", "Lionel Messi", "Ronaldo", "Cristiano Ronaldo"],
    correct: "Diego Maradona"
},

// Modern Stars
{
    hasContent: false,
    quest: "The French striker who led his nation to 2018 World Cup glory is:",
    choices: ["Thierry Henry", "Kylian Mbappé", "Karim Benzema", "Olivier Giroud"],
    correct: "Kylian Mbappé"
},
{
    hasContent: false,
    quest: "The Polish goal-scoring machine for Bayern Munich is:",
    choices: ["Robert Lewandowski", "Miroslav Klose", "Thomas Müller", "Gerd Müller"],
    correct: "Robert Lewandowski"
},
{
    hasContent: false,
    quest: "The technically gifted Belgian maestro for Manchester City is:",
    choices: ["Kevin De Bruyne", "Eden Hazard", "Romelu Lukaku", "Thibaut Courtois"],
    correct: "Kevin De Bruyne"
},
{
    hasContent: false,
    quest: "The Egyptian 'King' known for his pace and goalscoring for Liverpool is:",
    choices: ["Ahmed Elmohamady", "Amr Zaki", "Hossam Ghaly", "Mohamed Salah"],
    correct: "Mohamed Salah"
},

// Beyond the Obvious
{
    hasContent: false,
    quest: "The Italian defender famous for his aggressive style was:",
    choices: ["Paolo Maldini", "Giorgio Chiellini", "Alessandro Nesta", "Franco Baresi"],
    correct: "Giorgio Chiellini"
},
{
    hasContent: false,
    quest: "The 1995 Ballon d'Or winner, a Liberian striker known for his speed, is:",
    choices: ["Samuel Eto'o", "Roger Milla", "George Weah", "Didier Drogba"],
    correct: "George Weah"
},
{
    hasContent: false,
    quest: "The flamboyant Colombian goalkeeper famous for his 'Scorpion Kick' save was:",
    choices: ["René Higuita", "David Ospina", "Faryd Mondragón", "Óscar Córdoba"],
    correct: "René Higuita"
},
{
    "hasContent": False,
    "quest": "The masterful French midfielder nicknamed 'Zizou' is:",
    "choices": ["Michel Platini", "Thierry Henry", "Zinedine Zidane", "Patrick Vieira"],
    "correct": "Zinedine Zidane"
},
{
    "hasContent": False, 
    "quest": "The English icon known for his stylish free-kicks was:",
    "choices": ["Paul Scholes", "Steven Gerrard", "David Beckham", "Frank Lampard"],
    "correct": "David Beckham"
},
{
    "hasContent": False,
    "quest": "The all-time top scorer for Manchester United is:",
    "choices": ["Denis Law", "Wayne Rooney", "Eric Cantona", "Bobby Charlton"],
    "correct": "Wayne Rooney"
},
{
    "hasContent": False,
    "quest": "The prolific German striker nicknamed 'Der Bomber' was:",
    "choices": ["Gerd Müller", "Miroslav Klose", "Jürgen Klinsmann", "Rudi Völler"],
    "correct": "Gerd Müller"
},

// Positional Masters
{
    "hasContent": False,
    "quest": "The Italian goalkeeper known for his longevity and leadership is:",
    "choices": ["Dino Zoff", "Walter Zenga", "Gianluigi Buffon", "Gianluigi Donnarumma"],
    "correct": "Gianluigi Buffon"
},
{
    "hasContent": False,
    "quest": "The Brazilian full-back who redefined attacking wing play was:",
    "choices": ["Roberto Carlos", "Cafu", "Dani Alves", "Marcelo"],
    "correct": "Roberto Carlos"
},
{
    "hasContent": False,
    "quest": "The complete midfielder, known for his passing and vision for France, was:",
    "choices": ["Michel Platini", "Zinedine Zidane", "Patrick Vieira", "Paul Pogba"],
    "correct": "Michel Platini"
},
{
    "hasContent": False,
    "quest": "The Uruguayan striker known for his controversial biting incidents is:",
    "choices": ["Diego Forlán", "Edinson Cavani", "Luis Suárez", "Enzo Francescoli"],
    "correct": "Luis Suárez"
},

// Modern Stars
{
    "hasContent": False,
    "quest": "The Senegalese speedster renowned for his time at Liverpool is:",
    "choices": ["El Hadji Diouf", "Papiss Cissé", "Sadio Mané", "Demba Ba"],
    "correct": "Sadio Mané"
},
{
    "hasContent": False,
    "quest": "The Croatian midfield maestro who plays for Real Madrid is:",
    "choices": ["Luka Modrić", "Ivan Rakitić", "Mateo Kovačić", "Robert Prosinečki"],
    "correct": "Luka Modrić"
},
{
    "hasContent": False,
    "quest": "The prolific Norwegian striker known for his power and finishing is:",
    "choices": ["Erling Haaland", "Ole Gunnar Solskjær", "John Carew", "Tore André Flo"],
    "correct": "Erling Haaland"
},
{
    "hasContent": False,
    "quest": "The skillful winger known for his trickery who plays for Paris Saint-Germain is:",
    "choices": ["Neymar", "Kylian Mbappé", "Ángel Di María", "Lionel Messi"],
    "correct": "Neymar"
},
// Beyond the Obvious
{
    "hasContent": False,
    "quest": "Hungary's 'Magical Magyar' of the 1950s famous for his dribbling was:",
    "choices": ["Sándor Kocsis", "Ferenc Puskás", "László Kubala", "Zoltán Czibor"],
    "correct": "Ferenc Puskás"
},
{
    "hasContent": False,
    "quest": "The goalkeeper who won the World Cup as captain with Italy in 2006 is:",
    "choices": ["Dino Zoff", "Walter Zenga", "Gianluigi Buffon", "Gianluigi Donnarumma"],
    "correct": "Gianluigi Buffon"
},
{ 
    "hasContent": False,
    "quest": "The tough-tackling Irish midfielder famous for his time at Manchester United is:",
    "choices": ["Paul McGrath", "Roy Keane", "Denis Irwin", "Steve Staunton"],
    "correct": "Roy Keane"
},
{
    "hasContent": False,
    "quest": "The first African player to win the FIFA World Player of the Year award was:",
    "choices": ["Samuel Eto'o", "Roger Milla", "George Weah", "Didier Drogba"],
    "correct": "George Weah"
},
// General Olympic Knowledge
    {
        "hasContent": False,
        "quest": "The five intertwined rings of the Olympic symbol represent:",
        "choices": ["The five oceans", "The five original sports", "The five continents", "The five values of Olympism"],
        "correct": "The five continents"
    },
    {
        "hasContent": False,
        "quest": "The modern Olympic Games were revived in 1896 in which city?",
        "choices": ["Rome", "London", "Paris", "Athens"],
        "correct": "Athens"
    },
    {
        "hasContent": False,
        "quest": "Which country has won the most medals in Summer Olympic history?",
        "choices": ["China", "Russia", "United States", "Great Britain"],
        "correct": "United States"
    },
    {
        "hasContent": False,
        "quest": "The motto of the Olympic Games, 'Citius, Altius, Fortius', is Latin for:",
        "choices": ["Faster, Higher, Stronger", "Excellence, Friendship, Respect", "Together, Stronger, Higher", "One World, One Dream"],
        "correct": "Faster, Higher, Stronger"
    },

    //Summer Olympics
    {
        "hasContent": False,
        "quest": "The fastest person in the world is determined in which track and field event?",
        "choices": ["400 meter dash", "100 meter dash", "Marathon", "200 meter dash"],
        "correct": "100 meter dash"
    },
    {
        "hasContent": False,
        "quest": "Which gymnastics event features tumbling and acrobatic skills on a spring floor?",
        "choices": ["Vault", "Floor Exercise", "Uneven Bars", "Balance Beam"],
        "correct": "Floor Exercise"
    },
    {
        "hasContent": False,
        "quest": "In swimming, which stroke is known for its characteristic 'flutter kick'?",
        "choices": ["Freestyle", "Butterfly", "Backstroke", "Breaststroke"],
        "correct": "Butterfly"
    },
    {
        "hasContent": False,
        "quest": "Which combat sport involves striking and grappling techniques?",
        "choices": ["Boxing", "Fencing", "Judo", "Wrestling"],
        "correct": "Judo"
    },

    // Winter Olympics
    {
        "hasContent": False,
        "quest": "Which sport involves athletes sliding down an icy track head-first on a small sled?",
        "choices": ["Bobsleigh", "Luge", "Skeleton", "Speed Skating"],
        "correct": "Skeleton"
    },
    {
        "hasContent": False,
        "quest": "Which sport combines cross-country skiing with rifle shooting?",
        "choices": ["Ski Jumping", "Biathlon", "Nordic Combined", "Curling"],
        "correct": "Biathlon"
    },
    {
        "hasContent": False,
        "quest": "Which team sport played on ice involves passing a puck with sticks?",
        "choices": ["Ice Hockey", "Figure Skating", "Speed Skating", "Curling"],
        "correct": "Ice Hockey"
    },
    {
        "hasContent": False,
        "quest": "Snowboarding events are often categorized as 'freestyle' or what other type?",
        "choices": ["Alpine", "Cross-Country", "Mogul", "Nordic"],
        "correct": "Alpine" 
    },

    // More Challenging
    {
        "hasContent": False,
        "quest": "Which sport is similar to baseball but played with a larger ball and no gloves?",
        "choices": ["Cricket", "Softball", "Rounders", "Lacrosse"],
        "correct": "Softball"
    },
    {
        "hasContent": False,
        "quest": "'Dressage' is a competitive discipline found in which sport?",
        "choices": ["Gymnastics", "Equestrian", "Fencing", "Modern Pentathlon"],
        "correct": "Equestrian"
    },
    {
        "hasContent": False,
        "quest": "Which water sport involves athletes performing acrobatic routines in sync?",
        "choices": ["Synchronized Swimming", "Diving", "Water Polo", "Sailing"], 
        "correct": "Synchronized Swimming"
    }

];