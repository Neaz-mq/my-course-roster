# Course Registration

Question 1: Add at least 3 Project features.

Answer: The three main common features of this project are given below: 

 * The user can add the course easily and shows in Cart section.

 * User can purchase maximum 20 hour credit course. User can select many course but according to credit he will purchase the course and the user can also see the remaining credit in the upper portion.

 * If User selects a course twice he will get a toast in upper portion and he can not add twice a course. And also if he adding total 20 credit the course offer will finished. after 20 credit it will show a toast in a upper portion and he can not add according to limit.



Question 2:  Discuss how you managed the state in your assignment Project.

Answer: The states I have used in a Home.jsx file. In the Home function I have declared the states. First of all to show the courses I have taken in the array allCourses and setAllCourses and using the useState and keep it blank for getting the all data. after the mapping the allCourses and setAllCourses in the fetch to get the data. after take another states as selectedCourses, setSelectedCourses. selectedCourses data handle by a button and find the item and call it in the cart section.after take another states as totalCredit and setTotalCredit. using the setTotalCredit for show the total credit take in the cart. totalCredit call in the cart section. again take the useState for remaining and setRemaining. First of all the useState will be initially 20 hour declared as a condition. take a operation by remaining the taken credit. And conditionally set the setRemaining. The remaining called in the cart section for see the remaining credit according the condition.

