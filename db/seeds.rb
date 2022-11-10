user1 = User.create(username: "jsjennings", password: "12341234", email: "jordanjennings12@gmail.com", firstname: "Jordan", lastname: "Jennings")
user2 = User.create(username: "toulouse", password: "12341234", email: "tootoo@gmail.com", firstname: "toulouse", lastname: "perederiy")

reflection1 = MeditationReflection.create(question_1: "Great", question_2: "Wonderful", question_3: "Yay", question_4: "the best")
reflection2 = MeditationReflection.create(question_1: "Great", question_2: "Wonderful", question_3: "Yay", question_4: "the best")
reflection3 = MeditationReflection.create(question_1: "Great", question_2: "Wonderful", question_3: "Yay", question_4: "the best")
reflection4 = MeditationReflection.create(question_1: "Great", question_2: "Wonderful", question_3: "Yay", question_4: "the best")

intention1 = Intention.create(question_1: "Happiness", question_2: "Joy", question_3: "work", user: user1)

intention2 = Intention.create(question_1: "Peace", question_2: "Joy", question_3: "work", user: user1)

theme1 = Theme.create(name: "Stary Night", background: "https://images.unsplash.com/photo-1532721344391-eaf75d3ab37f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80", audio: "haha")
theme2 = Theme.create(name: "Beach Day", background: "https://images.unsplash.com/photo-1476673160081-cf065607f449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80", audio: "haha")
theme3 = Theme.create(name: "Cozy fire", background: "https://images.unsplash.com/photo-1585743792825-228b00d1f2b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80", audio: "haha")

meditation1 = Meditation.create(length: 456, user: user1, meditation_reflection: reflection1, theme: theme1)
meditation2 = Meditation.create(length: 129, user: user1, meditation_reflection: reflection2, theme: theme2)
meditation3 = Meditation.create(length: 345, user: user1, meditation_reflection: reflection2, theme: theme2)
meditation4 = Meditation.create(length: 345, user: user2, meditation_reflection: reflection4, theme: theme3)
meditation5 = Meditation.create(length: 378, user: user2, meditation_reflection: reflection3, theme: theme2)
