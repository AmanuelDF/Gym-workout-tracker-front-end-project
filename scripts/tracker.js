age=localStorage.getItem('age');
weight=localStorage.getItem('weight');

if(age<20&&weight>=180){
    document.getElementById('recommend').innerHTML="You should focus more on calorie burnning exercises";
    document.getElementById('pullups').style.display='none';
    document.getElementById('pushups').style.display='none';
}
if(age>60&&weight<60){
    document.getElementById('recommend').innerHTML="You should focus more on low intensity excercises";
    document.getElementById('bench').style.display='none';
    document.getElementById('deadlift').style.display='none';
    document.getElementById('shoulder').style.display='none';
    document.getElementById('bsquats').style.display='none';

}
if(age>20&&age<60&&weight>80&&weight<150){
    document.getElementById('recommend').innerHTML="You should focus more on controlling your body weight whilst gaining muscle";

}
