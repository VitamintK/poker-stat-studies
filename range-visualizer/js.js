PLAYER_AMT = 2;
Hands = [['AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', 'AKs', 'AQs', '77', 'AJs', 'AKo', 'ATs', 'AQo', 'AJo', 'KQs', 'A9s', 'ATo', '66', 'KJs', 'A8s', 'KTs', 'A7s', 'KQo', 'A9o', 'A5s', 'KJo', 'A6s', 'QJs', 'K9s', 'A8o', '55', 'KTo', 'A4s', 'QTs', 'A7o', 'A3s', 'K8s', 'A5o', 'A6o', 'QJo', 'A2s', 'K7s', 'K9o', 'Q9s', 'JTs', 'A4o', 'QTo', 'K6s', 'A3o', '44', 'K5s', 'Q8s', 'K8o', 'J9s', 'K7o', 'A2o', 'Q9o', 'K4s', 'JTo', 'K6o', 'Q7s', 'K3s', 'J8s', 'T9s', 'Q6s', 'K5o', 'Q8o', 'K2s', 'J9o', 'Q5s', '33', 'K4o', 'T8s', 'J7s', 'Q4s', 'Q7o', 'K3o', 'J8o', 'T9o', 'Q3s', 'Q6o', '98s', 'J6s', 'T7s', 'K2o', 'Q5o', 'Q2s', 'J5s', 'J7o', 'T8o', 'Q4o', 'J4s', '22', '97s', 'T6s', 'Q3o', 'J3s', '87s', '98o', 'T7o', 'J6o', '96s', 'J2s', 'Q2o', 'T5s', 'J5o', 'T4s', '86s', 'J4o', '97o', 'T6o', '95s', 'T3s', '76s', 'J3o', '87o', 'T2s', '85s', '96o', 'J2o', 'T5o', '75s', '94s', 'T4o', '65s', '86o', '93s', '84s', '95o', 'T3o', '76o', '92s', '74s', '54s', '64s', 'T2o', '85o', '83s', '75o', '94o', '65o', '82s', '73s', '53s', '93o', '63s', '84o', '92o', '43s', '74o', '54o', '64o', '72s', '52s', '62s', '83o', '42s', '82o', '73o', '53o', '63o', '32s', '43o', '72o', '52o', '62o', '42o', '32o'], ['AA', 'KK', 'QQ', 'JJ', 'TT', '99', 'AKs', 'AQs', '88', 'AJs', 'AKo', 'ATs', 'KQs', 'AQo', 'KJs', '77', 'AJo', 'KTs', 'A9s', 'ATo', 'KQo', 'QJs', 'A8s', 'QTs', 'KJo', 'A7s', 'K9s', '66', 'A5s', 'JTs', 'KTo', 'A9o', 'A6s', 'QJo', 'A4s', 'A8o', 'Q9s', 'K8s', 'A3s', 'QTo', 'A7o', 'K7s', 'J9s', 'A2s', 'K9o', '55', 'JTo', 'A5o', 'T9s', 'K6s', 'Q8s', 'A6o', 'K5s', 'A4o', 'Q9o', 'J8s', 'K8o', 'K4s', 'A3o', 'T8s', 'Q7s', 'J9o', 'K7o', 'K3s', '98s', 'Q6s', 'A2o', '44', 'T9o', 'J7s', 'Q8o', 'K6o', 'K2s', 'Q5s', 'T7s', 'K5o', 'Q4s', '97s', 'J8o', '87s', 'J6s', 'T8o', 'Q3s', 'K4o', 'Q7o', 'J5s', 'T6s', '98o', 'Q2s', '33', 'Q6o', 'K3o', '96s', 'J4s', '86s', 'J7o', '76s', 'Q5o', 'K2o', 'T7o', 'J3s', 'T5s', '97o', 'Q4o', 'J2s', '87o', '95s', '65s', 'T4s', '75s', '85s', 'J6o', 'Q3o', 'T3s', '22', 'J5o', 'T6o', '54s', 'Q2o', 'T2s', '96o', '64s', '86o', '76o', '94s', 'J4o', '74s', '84s', '93s', 'J3o', 'T5o', '53s', '92s', '65o', '95o', 'J2o', '63s', '75o', 'T4o', '85o', '73s', '83s', '43s', '82s', 'T3o', '54o', '52s', '64o', 'T2o', '62s', '94o', '74o', '42s', '72s', '84o', '93o', '32s', '53o', '92o', '63o', '43o', '73o', '83o', '82o', '52o', '62o', '42o', '72o', '32o'], ['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', '99', 'AQs', 'AJs', 'AKo', 'KQs', 'ATs', 'KJs', '88', 'AQo', 'KTs', 'QJs', 'AJo', 'KQo', 'A9s', 'QTs', 'ATo', 'JTs', 'A8s', 'KJo', '77', 'K9s', 'A7s', 'QJo', 'KTo', 'A5s', 'Q9s', 'A6s', 'A4s', 'A9o', 'J9s', 'QTo', 'T9s', 'K8s', 'A3s', 'JTo', '66', 'A8o', 'K7s', 'A2s', 'Q8s', 'K9o', 'K6s', 'A7o', 'J8s', 'T8s', 'K5s', 'A5o', '98s', 'Q9o', 'A6o', 'K4s', 'J9o', '55', 'Q7s', 'A4o', 'T9o', 'K8o', 'Q6s', 'J7s', 'K3s', 'T7s', 'A3o', '97s', '87s', 'Q5s', 'K7o', 'K2s', 'Q8o', 'A2o', 'Q4s', 'J8o', 'K6o', 'T8o', 'J6s', '44', 'T6s', 'Q3s', '76s', '98o', '86s', 'J5s', '96s', 'K5o', 'Q2s', 'J4s', 'Q7o', 'K4o', '65s', 'J7o', 'Q6o', 'J3s', '75s', 'T5s', 'T7o', '85s', 'K3o', '87o', '95s', '97o', '33', 'T4s', 'J2s', 'Q5o', '54s', 'K2o', 'T3s', '64s', 'Q4o', '74s', 'J6o', 'T2s', '84s', '76o', '94s', 'T6o', '86o', '96o', '53s', 'Q3o', 'J5o', '93s', '22', '63s', 'Q2o', 'J4o', '43s', '92s', '65o', '73s', '83s', '75o', 'T5o', '85o', 'J3o', '52s', '82s', '95o', 'T4o', '54o', 'J2o', '42s', '62s', '72s', '64o', 'T3o', '74o', '32s', '84o', 'T2o', '94o', '53o', '93o', '63o', '43o', '92o', '73o', '83o', '52o', '82o', '42o', '62o', '72o', '32o'], ['AA', 'KK', 'QQ', 'JJ', 'TT', 'AKs', 'AQs', 'KQs', 'AJs', 'AKo', '99', 'ATs', 'KJs', 'AQo', 'QJs', 'KTs', 'QTs', 'KQo', 'AJo', 'JTs', 'A9s', '88', 'A8s', 'ATo', 'KJo', 'K9s', 'QJo', 'A7s', 'A5s', 'KTo', 'Q9s', 'J9s', 'T9s', 'A4s', 'A6s', '77', 'QTo', 'JTo', 'K8s', 'A3s', 'A9o', 'K7s', 'A2s', 'Q8s', 'J8s', 'T8s', 'K6s', 'A8o', '98s', 'K9o', '66', 'K5s', 'A7o', 'Q9o', 'Q7s', 'K4s', 'A5o', 'T9o', 'J9o', 'J7s', 'T7s', 'Q6s', '87s', 'K3s', '97s', 'A6o', 'A4o', 'Q5s', 'K8o', 'K2s', '55', 'A3o', 'Q4s', 'K7o', '76s', 'Q8o', 'J6s', '86s', 'T6s', 'T8o', '96s', 'J8o', 'Q3s', 'A2o', 'J5s', '98o', 'K6o', 'Q2s', '65s', 'J4s', '44', '75s', 'K5o', 'T5s', 'J3s', '85s', '54s', '95s', 'Q7o', 'K4o', 'T4s', 'T7o', '87o', 'J7o', 'J2s', '97o', '64s', 'Q6o', 'T3s', '33', 'K3o', '74s', 'Q5o', '53s', '84s', 'T2s', 'K2o', '94s', '76o', '86o', '93s', 'Q4o', 'T6o', '43s', '63s', 'J6o', '22', '96o', '92s', '73s', 'J5o', 'Q3o', '52s', '65o', '83s', '75o', 'Q2o', '82s', 'J4o', '42s', '85o', '62s', '54o', 'T5o', '95o', 'J3o', '72s', '32s', 'T4o', '64o', 'J2o', 'T3o', '74o', '53o', '84o', 'T2o', '94o', '93o', '43o', '63o', '73o', '92o', '52o', '83o', '82o', '42o', '62o', '72o', '32o'], ['AA', 'KK', 'QQ', 'JJ', 'AKs', 'AQs', 'TT', 'KQs', 'AJs', 'AKo', 'KJs', 'ATs', 'QJs', 'KTs', 'AQo', '99', 'QTs', 'JTs', 'KQo', 'AJo', 'A9s', 'A8s', 'KJo', 'K9s', 'ATo', '88', 'QJo', 'A7s', 'A5s', 'Q9s', 'T9s', 'J9s', 'KTo', 'A4s', 'A6s', 'QTo', 'A3s', 'JTo', 'K8s', 'A2s', '77', 'K7s', 'Q8s', 'T8s', 'J8s', 'A9o', 'K6s', '98s', 'K5s', 'A8o', 'K9o', 'K4s', 'Q7s', '66', 'T9o', 'T7s', 'Q9o', '87s', 'J7s', '97s', 'J9o', 'K3s', 'A7o', 'Q6s', 'A5o', 'K2s', 'Q5s', 'A4o', 'A6o', '76s', 'Q4s', '86s', '55', 'K8o', 'J6s', 'T6s', 'A3o', '96s', 'Q3s', 'J5s', 'T8o', 'Q8o', '65s', 'K7o', 'J8o', 'Q2s', '98o', 'A2o', '75s', 'J4s', '54s', '44', '85s', 'K6o', 'T5s', 'J3s', '95s', 'T4s', '64s', 'K5o', 'J2s', '87o', '74s', 'T7o', 'T3s', 'Q7o', '33', 'K4o', '53s', '97o', 'J7o', 'T2s', '84s', 'Q6o', '94s', 'K3o', '22', '43s', '63s', '93s', 'Q5o', '76o', 'K2o', '86o', '73s', '92s', '52s', 'Q4o', 'T6o', '96o', 'J6o', '83s', '65o', '42s', '82s', 'Q3o', 'J5o', '75o', '62s', '54o', '32s', 'Q2o', '72s', 'J4o', '85o', 'T5o', '95o', 'J3o', '64o', 'T4o', 'J2o', '74o', '53o', 'T3o', '84o', 'T2o', '94o', '43o', '63o', '93o', '52o', '73o', '92o', '83o', '42o', '82o', '62o', '32o', '72o'], ['AA', 'KK', 'QQ', 'JJ', 'AKs', 'AQs', 'KQs', 'AJs', 'TT', 'AKo', 'KJs', 'ATs', 'QJs', 'KTs', 'AQo', 'QTs', 'JTs', 'KQo', '99', 'A9s', 'AJo', 'A8s', 'K9s', 'KJo', 'A5s', 'ATo', 'A7s', 'Q9s', 'T9s', 'QJo', 'J9s', 'A4s', '88', 'A6s', 'KTo', 'A3s', 'K8s', 'QTo', 'JTo', 'A2s', 'K7s', 'T8s', 'Q8s', 'J8s', '98s', 'K6s', '77', 'K5s', 'A9o', 'K4s', 'Q7s', 'T7s', '87s', '97s', 'K9o', 'A8o', 'J7s', 'K3s', 'T9o', '66', 'Q6s', 'J9o', 'Q9o', 'K2s', 'Q5s', 'A5o', 'A7o', '76s', '86s', 'Q4s', 'A4o', 'T6s', '96s', 'J6s', 'A6o', '55', '65s', 'Q3s', 'J5s', 'A3o', 'K8o', '75s', 'Q2s', '54s', 'T8o', 'J4s', '85s', 'Q8o', 'J8o', '44', 'K7o', '98o', 'A2o', 'T5s', 'J3s', '64s', '95s', 'T4s', 'J2s', 'K6o', '53s', '33', '74s', 'T3s', 'K5o', '22', '87o', 'T2s', '84s', 'T7o', '43s', '97o', '94s', 'Q7o', '63s', 'K4o', 'J7o', '93s', 'Q6o', '52s', 'K3o', '76o', '73s', '92s', '86o', 'Q5o', '83s', '42s', 'K2o', '82s', '65o', '62s', 'T6o', '96o', 'Q4o', 'J6o', '32s', '75o', '72s', '54o', 'J5o', 'Q3o', '85o', 'Q2o', 'J4o', '64o', 'T5o', '95o', 'J3o', '53o', 'T4o', '74o', 'J2o', 'T3o', '43o', '84o', 'T2o', '63o', '94o', '52o', '93o', '73o', '92o', '42o', '83o', '62o', '82o', '32o', '72o'], ['AA', 'KK', 'QQ', 'AKs', 'JJ', 'AQs', 'KQs', 'AJs', 'AKo', 'KJs', 'ATs', 'TT', 'QJs', 'KTs', 'QTs', 'JTs', 'AQo', 'KQo', 'A9s', '99', 'AJo', 'A8s', 'K9s', 'A5s', 'T9s', 'A7s', 'KJo', 'Q9s', 'J9s', 'A4s', 'ATo', 'QJo', 'A6s', 'A3s', 'KTo', '88', 'K8s', 'A2s', 'JTo', 'QTo', 'T8s', 'K7s', 'Q8s', 'J8s', '98s', 'K6s', '77', 'K5s', 'K4s', '87s', 'T7s', 'A9o', '97s', 'Q7s', 'J7s', 'K3s', 'Q6s', '66', 'K2s', 'T9o', '76s', 'K9o', 'A8o', 'Q5s', '86s', 'J9o', 'Q9o', 'Q4s', 'A5o', '65s', 'T6s', '96s', 'A7o', 'J6s', '55', 'Q3s', '54s', '75s', 'J5s', 'A4o', 'Q2s', 'A6o', '44', 'J4s', '85s', 'A3o', 'T8o', '64s', 'K8o', 'T5s', 'J3s', '95s', '33', '53s', '98o', 'J8o', 'T4s', 'J2s', 'Q8o', 'A2o', 'K7o', '74s', '22', 'T3s', '43s', 'K6o', 'T2s', '84s', '63s', '87o', '94s', 'K5o', 'T7o', '97o', '52s', '93s', '73s', 'K4o', 'Q7o', 'J7o', '76o', '42s', '92s', '83s', 'Q6o', 'K3o', '86o', '62s', '82s', '65o', '32s', 'Q5o', 'K2o', '96o', '72s', 'T6o', '54o', '75o', 'Q4o', 'J6o', 'J5o', 'Q3o', '85o', '64o', 'Q2o', 'J4o', 'T5o', '53o', '95o', 'J3o', '74o', 'T4o', 'J2o', '43o', 'T3o', '84o', '63o', 'T2o', '94o', '52o', '73o', '93o', '42o', '92o', '83o', '62o', '32o', '82o', '72o'], ['AA', 'KK', 'QQ', 'AKs', 'AQs', 'JJ', 'KQs', 'AJs', 'KJs', 'ATs', 'AKo', 'QJs', 'KTs', 'TT', 'QTs', 'JTs', 'AQo', 'A9s', 'KQo', 'A8s', '99', 'K9s', 'T9s', 'A5s', 'AJo', 'A7s', 'Q9s', 'J9s', 'A4s', 'KJo', 'A6s', 'A3s', 'QJo', 'ATo', 'K8s', '88', 'A2s', 'T8s', 'KTo', 'JTo', 'K7s', 'QTo', 'J8s', 'Q8s', '98s', 'K6s', 'K5s', '77', '87s', 'K4s', 'T7s', '97s', 'Q7s', 'K3s', 'J7s', '66', '76s', 'Q6s', 'K2s', 'A9o', 'Q5s', '86s', 'T9o', '65s', 'Q4s', 'K9o', 'T6s', '55', '96s', '54s', 'A8o', 'J9o', '75s', 'J6s', 'Q9o', 'Q3s', 'A5o', 'J5s', '44', 'Q2s', 'A7o', '85s', '64s', 'J4s', '33', 'A4o', 'T5s', '53s', '22', 'J3s', 'A6o', '95s', 'T8o', 'A3o', 'T4s', '74s', 'J2s', 'K8o', '98o', 'T3s', 'J8o', '43s', 'A2o', 'Q8o', '84s', 'T2s', '63s', 'K7o', '94s', '52s', '87o', 'K6o', '93s', '73s', '97o', '42s', 'T7o', 'K5o', '92s', '76o', '83s', 'J7o', 'K4o', 'Q7o', '62s', '32s', '82s', '86o', '65o', 'K3o', 'Q6o', '72s', '54o', 'Q5o', '75o', 'K2o', '96o', 'T6o', 'Q4o', 'J6o', '64o', '85o', 'J5o', 'Q3o', '53o', 'Q2o', 'J4o', 'T5o', '95o', '74o', 'J3o', 'T4o', '43o', 'J2o', 'T3o', '63o', '84o', '52o', 'T2o', '94o', '73o', '42o', '93o', '92o', '83o', '62o', '32o', '82o', '72o'], ['AA', 'KK', 'QQ', 'AKs', 'AQs', 'JJ', 'KQs', 'AJs', 'KJs', 'ATs', 'QJs', 'KTs', 'AKo', 'JTs', 'QTs', 'TT', 'A9s', 'AQo', 'A8s', 'T9s', 'KQo', 'K9s', 'A5s', '99', 'J9s', 'A7s', 'Q9s', 'A4s', 'AJo', 'A6s', 'A3s', 'KJo', 'QJo', 'T8s', 'A2s', 'K8s', '88', 'ATo', '98s', 'J8s', 'K7s', 'JTo', 'Q8s', 'KTo', 'QTo', 'K6s', '77', 'K5s', '87s', 'T7s', '97s', 'K4s', 'Q7s', '76s', 'J7s', '66', 'K3s', 'Q6s', 'K2s', '86s', '65s', 'Q5s', '54s', '55', 'T9o', 'A9o', 'Q4s', '75s', '96s', 'T6s', 'J6s', '44', 'Q3s', 'J9o', 'J5s', '33', 'K9o', '64s', '85s', 'Q2s', 'A8o', '22', 'Q9o', 'J4s', '53s', 'A5o', 'T5s', 'J3s', '95s', 'A7o', 'A4o', '74s', 'T4s', 'J2s', 'T8o', '43s', 'A6o', 'T3s', 'A3o', '98o', '63s', '84s', 'T2s', 'K8o', 'J8o', '52s', '94s', 'A2o', 'Q8o', 'K7o', '87o', '42s', '73s', '93s', '97o', 'K6o', 'T7o', '92s', '76o', '83s', '62s', 'K5o', '32s', '82s', '65o', '86o', 'J7o', 'K4o', 'Q7o', '72s', '54o', '75o', 'K3o', 'Q6o', '96o', 'Q5o', 'T6o', 'K2o', '64o', 'J6o', 'Q4o', '85o', '53o', 'J5o', 'Q3o', 'J4o', '74o', 'Q2o', 'T5o', '95o', '43o', 'J3o', 'T4o', '63o', 'J2o', 'T3o', '84o', '52o', 'T2o', '94o', '42o', '73o', '93o', '62o', '83o', '92o', '32o', '82o', '72o'], ['AA', 'KK', 'QQ', 'AKs', 'AQs', 'KQs', 'JJ', 'AJs', 'KJs', 'ATs', 'QJs', 'KTs', 'JTs', 'QTs', 'AKo', 'TT', 'A9s', 'T9s', 'AQo', 'A8s', 'A5s', 'K9s', 'J9s', '99', 'A4s', 'Q9s', 'KQo', 'A7s', 'A6s', 'A3s', 'AJo', 'T8s', 'A2s', '88', 'K8s', 'KJo', '98s', 'QJo', 'J8s', 'K7s', 'Q8s', 'ATo', 'JTo', 'K6s', '77', 'KTo', 'QTo', '87s', 'K5s', 'T7s', '97s', 'K4s', '66', '76s', 'Q7s', 'J7s', 'K3s', '65s', '86s', 'Q6s', 'K2s', '54s', '55', 'Q5s', '75s', '44', '96s', 'T6s', 'T9o', 'Q4s', '33', 'J6s', '22', '64s', 'Q3s', 'J5s', 'A9o', '85s', 'Q2s', '53s', 'J9o', 'J4s', 'T5s', 'K9o', 'Q9o', 'J3s', 'A8o', '95s', '74s', 'A5o', 'T4s', '43s', 'J2s', 'T8o', 'A7o', 'T3s', 'A4o', '63s', '84s', '98o', 'T2s', 'A6o', '52s', 'A3o', '94s', 'J8o', 'K8o', '42s', '73s', '87o', '93s', 'Q8o', 'A2o', '92s', 'K7o', '97o', '76o', '83s', 'T7o', '62s', '32s', 'K6o', '82s', '65o', '86o', 'K5o', '72s', '54o', 'J7o', 'Q7o', 'K4o', '75o', '96o', 'Q6o', 'K3o', 'T6o', '64o', 'Q5o', 'K2o', '53o', '85o', 'J6o', 'Q4o', 'J5o', 'Q3o', '74o', '43o', 'T5o', 'J4o', '95o', 'Q2o', 'J3o', 'T4o', '63o', '52o', '84o', 'J2o', 'T3o', 'T2o', '42o', '94o', '73o', '93o', '32o', '62o', '83o', '92o', '82o', '72o']]
cols = 10;

function get_range_from_inp(inp){
	if(inp<1){
		//ASSUME INPUT IS IN THE RANGE 0 to 1, where 1 = 100% VPIP
		return get_range_size(inp);
	} else{
		return get_range_size(inp/100);
	}
}

function get_range_size(vpip_pct){
	return Hands[PLAYER_AMT-2].length * vpip_pct;
}

function make_table(lst){
	var tbl = document.getElementById("ranktable");
	//var tblBody = document.createElement("tbody");
	for(var i=0;i<Math.ceil(lst.length/cols);i++){
		var tr = tbl.insertRow();
		for(var j=0;j<cols;j++){
			if(lst[i*cols + j]){
				var td = tr.insertCell();
				td.appendChild(document.createTextNode(lst[i*cols + j]));
			}
		}
	}
}

function mark_range(num_hands){
	var tbl = document.getElementById("ranktable");
	for(var i=0, cell; cell = tbl.getElementsByTagName("td")[i] ; i++){
		if(i<num_hands){
			cell.style.backgroundColor = "green";
		} else {
			cell.style.backgroundColor = "white";
		}
	}
}
	/*for(var i=0;i<lst.length;i++){
		var tr = tbl.insertRow();
		var td = tr.insertCell();
		td.appendChild(document.createTextNode(lst[i]));
	}*/




window.onload = function(){
	make_table(Hands[PLAYER_AMT-2]);
	var button = document.getElementById("theButton");
	button.onclick = function(){
		vpipInp = button.form.vpipInp.value;
		mark_range(get_range_from_inp(vpipInp));
		button.form.vpipInp.select()
		//alert(vpipInp);
	}
}