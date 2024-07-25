/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.
*/
// Author: [Mudassir Baig]
// Date: [10-4-2024]

let Invite_for_Dinner_Replace: string[] = ["Mudassir","Ahad","Aliyar"];
for(let i = 0; i < Invite_for_Dinner_Replace.length; i++){
    console.log("Your are invited for a Dinner " + Invite_for_Dinner_Replace[i] + " Please join us and Enjoy");
}

console.log("Unfortunatily, " + Invite_for_Dinner_Replace[1] + " We can not make it to");

Invite_for_Dinner_Replace[1] = "Baig";
console.log("\n\t---------Again sent Invitation Messages:------------");
for(let i = 0; i < Invite_for_Dinner_Replace.length; i++){
    console.log("Your are invited for a Dinner " + Invite_for_Dinner_Replace[i] + " Please join us and Enjoy");
}
