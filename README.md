# Course Registration

Question 1: Add at least 3 Project features.

Answer: The three main common features of this project are given below: 

 * The user can add the course easily and shows in Cart section.

 * User can purchase maximum 20 hour credit course. User can select many course but according to credit he will purchase the course and the user can also see the remaining credit in the upper portion.

 * If User selects a course twice he will get a toast in upper portion and he can not add twice a course. And also if he adding total 20 credit the course offer will finished. after 20 credit it will show a toast in a upper portion and he can not add according to limit.



Question 2:  Discuss how you managed the state in your assignment Project.

Answer: First of all to create my Course Registration project I was installed vite using command prompt. after installing I opened the VS code environment.  After that I go the App.jsx file. I remove the unnecessary code and put my essential code.  Then I was creating a components folder, the folder's parent is src. In the components folder I took Home and Cart folder. In the Home folder I took two files as Home.jsx and Home.css. In the Cart folder I was also taking two files as Cart.jsx and Cart.css.  The project data must be show in dynamically and its a react project. That's why I take a data.json file in a public folder.  I take my fake data from json generator and put 9 data and I show the data in a card. That Card contains a cover image, the course title, description, course price, credit and a select button. I took the cover image by uploading ImgBB site and used direct link to show in card. I took the contents in the Home.jsx file and import it App.jsx file. I had fetch data from data.json file and show it a in a local site as a card. There are 9 cards and successfully show all the information. According to design I make my card css in the Home.css content. I also make a cart section beside the card section. In the cart section I have to show the operations and show it dynamically way. I took a button select for all card and handle it by function call. 
first time when I click the select button the course name was shown in cart section. mapping the all course firstly using useState. the course name show dynamically according to Id. After the course credit hour will added by adding the course. after selecting it will dynamically added. The total credit hour limitation is maximum 20. after clicking the course the course hour added and remaining also show in upper. I put the condition when it completed 20 credit hour it will show toasted as like You can not add more than 20 credit !. and also you can select a course one time. when you clicked twice. It also show a toast as an error like You already booked this course!. This is the main functionality of this project. I put the react icons. and for toast I install the package and use it accordingly. These are all states of my Course Registration project.

