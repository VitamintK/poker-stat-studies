import math
cards = '23456789TJQKA'
#There are 169 starting hands in poker.
#of these, 13 are pocket pairs.
#          

#probability of getting a pocket pair is 3/51

ranking="""1	AA	AA	AA	AA	AA	AA	AA	AA	AA	AA
2	KK	KK	KK	KK	KK	KK	KK	KK	KK	KK
3	QQ	QQ	QQ	QQ	QQ	QQ	QQ	QQ	QQ	QQ
4	JJ	JJ	JJ	JJ	JJ	JJ	AKs	AKs	AKs	AKs
5	TT	TT	TT	TT	AKs	AKs	JJ	AQs	AQs	AQs
6	99	99	AKs	AKs	AQs	AQs	AQs	JJ	JJ	KQs
7	88	AKs	99	AQs	TT	KQs	KQs	KQs	KQs	JJ
8	AKs	AQs	AQs	KQs	KQs	AJs	AJs	AJs	AJs	AJs
9	AQs	88	AJs	AJs	AJs	TT	AKo	KJs	KJs	KJs
10	77	AJs	AKo	AKo	AKo	AKo	KJs	ATs	ATs	ATs
11	AJs	AKo	KQs	99	KJs	KJs	ATs	AKo	QJs	QJs
12	AKo	ATs	ATs	ATs	ATs	ATs	TT	QJs	KTs	KTs
13	ATs	KQs	KJs	KJs	QJs	QJs	QJs	KTs	AKo	JTs
14	AQo	AQo	88	AQo	KTs	KTs	KTs	TT	JTs	QTs
15	AJo	KJs	AQo	QJs	AQo	AQo	QTs	QTs	QTs	AKo
16	KQs	77	KTs	KTs	99	QTs	JTs	JTs	TT	TT
17	A9s	AJo	QJs	QTs	QTs	JTs	AQo	AQo	A9s	A9s
18	ATo	KTs	AJo	KQo	JTs	KQo	KQo	A9s	AQo	T9s
19	66	A9s	KQo	AJo	KQo	99	A9s	KQo	A8s	AQo
20	KJs	ATo	A9s	JTs	AJo	A9s	99	A8s	T9s	A8s
21	A8s	KQo	QTs	A9s	A9s	AJo	AJo	99	KQo	A5s
22	KTs	QJs	ATo	88	A8s	A8s	A8s	K9s	K9s	K9s
23	A7s	A8s	JTs	A8s	KJo	K9s	K9s	T9s	A5s	J9s
24	KQo	QTs	A8s	ATo	K9s	KJo	A5s	A5s	99	99
25	A9o	KJo	KJo	KJo	ATo	A5s	T9s	AJo	J9s	A4s
26	A5s	A7s	77	K9s	88	ATo	A7s	A7s	A7s	Q9s
27	KJo	K9s	K9s	QJo	QJo	A7s	KJo	Q9s	Q9s	KQo
28	A6s	66	A7s	A7s	A7s	Q9s	Q9s	J9s	A4s	A7s
29	QJs	A5s	QJo	A5s	A5s	T9s	J9s	A4s	AJo	A6s
30	K9s	JTs	KTo	KTo	Q9s	QJo	A4s	KJo	A6s	A3s
31	A8o	KTo	A5s	Q9s	T9s	J9s	ATo	A6s	A3s	AJo
32	55	A9o	Q9s	J9s	J9s	A4s	QJo	A3s	KJo	T8s
33	KTo	A6s	A6s	T9s	KTo	88	A6s	QJo	QJo	A2s
34	A4s	QJo	A4s	A4s	A4s	A6s	A3s	ATo	T8s	88
35	QTs	A4s	A9o	A6s	A6s	KTo	KTo	K8s	A2s	K8s
36	A7o	A8o	J9s	77	QTo	A3s	88	88	K8s	KJo
37	A3s	Q9s	QTo	QTo	A3s	K8s	K8s	A2s	88	98s
38	K8s	K8s	T9s	JTo	JTo	QTo	A2s	T8s	ATo	QJo
39	A5o	A3s	K8s	K8s	K8s	JTo	JTo	KTo	98s	J8s
40	A6o	QTo	A3s	A3s	A2s	A2s	QTo	JTo	J8s	K7s
41	QJo	A7o	JTo	A9o	77	K7s	T8s	K7s	K7s	Q8s
42	A2s	K7s	66	K7s	K7s	T8s	K7s	QTo	JTo	ATo
43	K7s	J9s	A8o	A2s	Q8s	Q8s	Q8s	J8s	Q8s	JTo
44	K9o	A2s	K7s	Q8s	T8s	J8s	J8s	Q8s	KTo	K6s
45	Q9s	K9o	A2s	J8s	J8s	98s	98s	98s	QTo	77
46	JTs	55	Q8s	T8s	A9o	K6s	K6s	K6s	K6s	KTo
47	A4o	JTo	K9o	K6s	K6s	77	77	K5s	77	QTo
48	QTo	A5o	K6s	A8o	98s	K5s	K5s	77	K5s	87s
49	K6s	T9s	A7o	98s	K5s	A9o	K4s	87s	87s	K5s
50	A3o	K6s	J8s	K9o	A8o	K4s	87s	K4s	T7s	T7s
51	44	Q8s	T8s	66	K9o	Q7s	T7s	T7s	97s	97s
52	K5s	A6o	K5s	K5s	K4s	T7s	A9o	97s	K4s	K4s
53	Q8s	K5s	A5o	A7o	Q7s	87s	97s	Q7s	Q7s	66
54	K8o	A4o	98s	Q9o	66	97s	Q7s	K3s	76s	76s
55	J9s	Q9o	Q9o	Q7s	T9o	K9o	J7s	J7s	J7s	Q7s
56	K7o	J8s	A6o	K4s	T7s	A8o	K3s	66	66	J7s
57	A2o	K8o	K4s	A5o	Q9o	J7s	Q6s	76s	K3s	K3s
58	Q9o	K4s	J9o	T9o	87s	K3s	66	Q6s	Q6s	65s
59	K4s	A3o	55	J9o	J7s	T9o	K2s	K2s	K2s	86s
60	JTo	T8s	Q7s	J7s	97s	66	T9o	A9o	86s	Q6s
61	K6o	Q7s	A4o	T7s	J9o	Q6s	76s	Q5s	65s	K2s
62	Q7s	J9o	T9o	Q6s	K3s	J9o	K9o	86s	Q5s	54s
63	K3s	K7o	K8o	87s	A7o	Q9o	A8o	T9o	54s	55
64	J8s	K3s	Q6s	K3s	Q6s	K2s	Q5s	65s	55	Q5s
65	T9s	98s	J7s	97s	A5o	Q5s	86s	Q4s	T9o	75s
66	Q6s	Q6s	K3s	A6o	K2s	A5o	J9o	K9o	A9o	44
67	K5o	A2o	T7s	A4o	Q5s	A7o	Q9o	T6s	Q4s	96s
68	Q8o	44	A3o	Q5s	A4o	76s	Q4s	55	75s	T6s
69	K2s	T9o	97s	K8o	A6o	86s	A5o	96s	96s	T9o
70	J9o	J7s	87s	K2s	76s	Q4s	65s	54s	T6s	Q4s
71	Q5s	Q8o	Q5s	55	Q4s	A4o	T6s	A8o	J6s	33
72	33	K6o	K7o	A3o	86s	T6s	96s	J9o	44	J6s
73	K4o	K2s	K2s	Q4s	55	96s	A7o	75s	Q3s	22
74	T8s	Q5s	Q8o	K7o	K8o	J6s	J6s	J6s	J9o	64s
75	J7s	T7s	A2o	76s	J6s	A6o	55	Q9o	J5s	Q3s
76	Q4s	K5o	Q4s	Q8o	T6s	55	Q3s	Q3s	33	J5s
77	Q7o	Q4s	J8o	J6s	A3o	65s	54s	A5o	K9o	A9o
78	K3o	97s	K6o	86s	96s	Q3s	75s	J5s	64s	85s
79	J8o	J8o	T8o	T6s	Q3s	J5s	J5s	44	85s	Q2s
80	T9o	87s	J6s	T8o	J5s	A3o	A4o	Q2s	Q2s	53s
81	Q3s	J6s	44	96s	T8o	K8o	Q2s	A7o	A8o	J9o
82	Q6o	T8o	T6s	J8o	Q8o	75s	A6o	85s	22	J4s
83	98s	Q3s	Q3s	Q3s	65s	Q2s	44	64s	Q9o	T5s
84	J6s	K4o	76s	A2o	K7o	54s	J4s	J4s	J4s	K9o
85	T7s	Q7o	98o	J5s	J8o	T8o	85s	33	53s	Q9o
86	K2o	J5s	86s	98o	Q2s	J4s	A3o	A4o	A5o	J3s
87	Q5o	T6s	J5s	K6o	98o	85s	T8o	T5s	T5s	A8o
88	Q2s	98o	96s	Q2s	A2o	Q8o	64s	53s	J3s	95s
89	J5s	Q2s	K5o	65s	75s	J8o	K8o	22	95s	74s
90	J7o	33	Q2s	J4s	J4s	44	T5s	J3s	A7o	A5o
91	T8o	Q6o	J4s	44	54s	K7o	J3s	A6o	A4o	T4s
92	Q4o	K3o	Q7o	75s	44	98o	95s	95s	74s	43s
93	J4s	96s	K4o	K5o	85s	A2o	33	T8o	T4s	J2s
94	22	J4s	65s	T5s	K6o	T5s	53s	A3o	J2s	T8o
95	97s	86s	J7o	J3s	T5s	J3s	98o	T4s	T8o	A7o
96	T6s	J7o	Q6o	85s	J3s	64s	J8o	74s	43s	T3s
97	Q3o	76s	J3s	54s	95s	95s	T4s	J2s	A6o	A4o
98	J3s	Q5o	75s	95s	T4s	T4s	J2s	K8o	T3s	63s
99	87s	K2o	T5s	Q7o	64s	J2s	Q8o	98o	A3o	84s
100	98o	T7o	T7o	K4o	K5o	K6o	A2o	T3s	98o	98o
101	T7o	J3s	85s	T4s	J2s	53s	K7o	J8o	63s	T2s
102	J6o	T5s	K3o	T7o	87o	33	74s	43s	84s	A6o
103	96s	97o	87o	87o	74s	74s	22	A2o	T2s	52s
104	J2s	Q4o	95s	J7o	T7o	T3s	T3s	Q8o	K8o	A3o
105	Q2o	J2s	97o	J2s	T3s	K5o	43s	84s	J8o	94s
106	T5s	87o	33	97o	Q7o	22	K6o	T2s	52s	J8o
107	J5o	95s	T4s	64s	33	87o	T2s	63s	94s	K8o
108	T4s	65s	J2s	Q6o	K4o	T2s	84s	K7o	A2o	42s
109	86s	T4s	Q5o	T3s	53s	84s	63s	94s	Q8o	73s
110	J4o	75s	54s	33	97o	T7o	87o	52s	K7o	87o
111	97o	85s	K2o	K3o	J7o	43s	94s	87o	87o	93s
112	T6o	J6o	T3s	74s	T2s	97o	K5o	K6o	42s	Q8o
113	95s	Q3o	64s	Q5o	84s	94s	T7o	93s	73s	A2o
114	T3s	T3s	Q4o	53s	Q6o	Q7o	97o	73s	93s	92s
115	76s	22	74s	84s	94s	63s	52s	97o	97o	K7o
116	J3o	J5o	J6o	T2s	K3o	K4o	93s	42s	K6o	97o
117	87o	T6o	T2s	K2o	22	J7o	73s	T7o	T7o	76o
118	T2s	54s	84s	94s	43s	93s	K4o	K5o	92s	83s
119	85s	Q2o	76o	76o	63s	Q6o	Q7o	92s	76o	T7o
120	96o	T2s	94s	86o	93s	52s	J7o	76o	83s	62s
121	J2o	96o	T6o	93s	Q5o	K3o	76o	83s	62s	32s
122	T5o	64s	86o	Q4o	76o	76o	42s	J7o	K5o	K6o
123	75s	86o	96o	T6o	K2o	73s	92s	K4o	32s	82s
124	94s	76o	53s	43s	86o	92s	83s	Q7o	82s	65o
125	T4o	94s	Q3o	63s	73s	86o	Q6o	62s	65o	86o
126	65s	J4o	J5o	J6o	92s	Q5o	K3o	32s	86o	K5o
127	86o	74s	93s	22	52s	83s	86o	82s	J7o	72s
128	93s	84s	22	96o	Q4o	42s	62s	86o	K4o	54o
129	84s	93s	63s	92s	T6o	K2o	82s	65o	Q7o	J7o
130	95o	J3o	Q2o	73s	96o	82s	65o	K3o	72s	Q7o
131	T3o	T5o	J4o	J5o	J6o	65o	32s	Q6o	54o	K4o
132	76o	53s	43s	Q3o	83s	62s	Q5o	72s	75o	75o
133	92s	92s	92s	52s	65o	T6o	K2o	54o	K3o	96o
134	74s	65o	65o	65o	42s	96o	96o	Q5o	Q6o	Q6o
135	54s	95o	73s	83s	82s	Q4o	72s	75o	96o	K3o
136	64s	J2o	83s	75o	Q3o	J6o	T6o	K2o	Q5o	T6o
137	T2o	63s	75o	Q2o	J5o	32s	54o	96o	T6o	64o
138	85o	75o	T5o	82s	75o	75o	75o	T6o	K2o	Q5o
139	83s	T4o	85o	J4o	62s	72s	Q4o	Q4o	64o	K2o
140	75o	85o	J3o	42s	54o	54o	J6o	J6o	J6o	53o
141	94o	73s	52s	85o	32s	J5o	J5o	64o	Q4o	85o
142	65o	83s	82s	62s	Q2o	Q3o	Q3o	85o	85o	J6o
143	82s	43s	95o	54o	72s	85o	85o	J5o	53o	Q4o
144	73s	82s	T4o	T5o	J4o	Q2o	64o	Q3o	J5o	J5o
145	53s	T3o	54o	95o	85o	J4o	Q2o	53o	Q3o	Q3o
146	93o	54o	J2o	J3o	T5o	64o	J4o	Q2o	J4o	74o
147	63s	52s	42s	72s	95o	T5o	T5o	J4o	74o	43o
148	84o	64o	62s	32s	J3o	95o	53o	T5o	Q2o	T5o
149	92o	T2o	72s	T4o	64o	J3o	95o	95o	T5o	J4o
150	43s	62s	64o	64o	T4o	53o	J3o	74o	95o	95o
151	74o	94o	T3o	J2o	J2o	T4o	74o	J3o	43o	Q2o
152	54o	74o	74o	T3o	74o	74o	T4o	T4o	J3o	J3o
153	64o	42s	32s	74o	53o	J2o	J2o	43o	T4o	T4o
154	72s	72s	84o	53o	T3o	T3o	43o	J2o	63o	63o
155	52s	84o	T2o	84o	84o	43o	T3o	T3o	J2o	52o
156	62s	93o	94o	T2o	T2o	84o	84o	63o	T3o	84o
157	83o	32s	53o	94o	94o	T2o	63o	84o	84o	J2o
158	42s	53o	93o	93o	43o	63o	T2o	52o	52o	T3o
159	82o	92o	63o	43o	63o	94o	94o	T2o	T2o	T2o
160	73o	63o	43o	63o	93o	52o	52o	94o	94o	42o
161	53o	43o	92o	73o	52o	93o	73o	73o	42o	94o
162	63o	73o	73o	92o	73o	73o	93o	42o	73o	73o
163	32s	83o	83o	52o	92o	92o	42o	93o	93o	93o
164	43o	82o	52o	83o	83o	42o	92o	92o	62o	32o
165	72o	52o	82o	82o	42o	83o	83o	83o	83o	62o
166	52o	62o	42o	42o	82o	62o	62o	62o	92o	83o
167	62o	42o	62o	62o	62o	82o	32o	32o	32o	92o
168	42o	72o	72o	72o	32o	32o	82o	82o	82o	82o
169	32o	32o	32o	32o	72o	72o	72o	72o	72o	72o"""

hands = [[] for i in range(len(ranking.split('\n')[0].split())-1)]
for row in ranking.split('\n'):
    for index, hand in enumerate(row.split()[1:]):
        try:
            hands[index].append(hand)
        except IndexError:
            hands[index] = [hand]
            print("exception needed")
#for fcard in cards:
#    for scard in cards:
#        if fcard != scard:
#            pass#allhands.append
allhands = [[{fcard,scard} for fcard in cards] for scard in cards]
#print(allhands)
#for fhand in allhands:
#    for shand in allhands:
#       pass
#print(hands)

players = 2
def get_range(VPIP):
    assert 0<=VPIP<=100, "I don't know how to interpret a VPIP of {}".format(VPIP)
    if VPIP <= 1 and VPIP >= 0:
        vpippct = VPIP
    elif VPIP >= 0 and VPIP <=100:
        vpippct = VPIP/100
    num_of_hands = math.ceil(len(hands[players])*vpippct)
    return hands[players][:num_of_hands]

print('\n'.join(get_range(23)))
print(hands)
