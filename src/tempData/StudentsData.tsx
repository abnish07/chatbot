import Boy from "../assets/boy.jpeg";
import Girl from '../assets/girl.jpg';

export interface StudentsData {
    id: number,
    mode: string,
    studentImage: string,
    studentName: string,
    className: string,
    date: string,
    time: string,
    title: string,
}

export const StudentsData: StudentsData[] = 
[
    {
        id: 1,
        mode: "online",
        studentImage: Boy,
        studentName: "Anuj",
        className: "9th",
        date: "17 Feb 2021",
        time: "8:15 AM",
        title: "Three Ways To Get Travel Disco"
    },
    {
        id: 2,
        mode: "offline",
        studentImage: Boy,
        studentName: "Ram",
        className: "10th",
        date: "17 Feb 2021",
        time: "8:15 AM",
        title: "Dolor sit amet"
    },
    {
        id: 3,
        mode: "online",
        studentImage: Girl,
        studentName: "Nikki Ahuja",
        className: "7th",
        date: "17 Feb 2021",
        time: "8:15 AM",
        title: "New LOren Ipsum dolor sit amet"
    },
    {
        id: 4,
        mode: "online",
        studentImage: Girl,
        studentName: "Prema Kala",
        className: "10th",
        date: "17 Feb 2021",
        time: "8:15 AM",
        title: "New LOren Ipsum dolor sit amet"
    },
    {
        id: 5,
        mode: "offline",
        studentImage: Girl,
        studentName: "Swati mahiwal",
        className: "9th",
        date: "17 Feb 2021",
        time: "8:15 AM",
        title: "New LOren Ipsum dolor sit amet"
    },
    {
        id: 6,
        mode: "online",
        studentImage: Girl,
        studentName: "Anjana Sharma",
        className: "8th",
        date: "17 Feb 2021",
        time: "8:15 AM",
        title: "New LOren Ipsum dolor sit amet"
    },
    {
        id: 7,
        mode: "offline",
        studentImage: Boy,
        studentName: "Kundan Choudhary",
        className: "9th",
        date: "17 Feb 2021",
        time: "8:15 AM",
        title: "New LOren Ipsum dolor sit amet"
    },
    {
        id: 8,
        mode: "offline",
        studentImage: Boy,
        studentName: "Rahul Samrat",
        className: "9th",
        date: "13 Feb 2021",
        time: "8:33 AM",
        title: "New LOren Ipsum dolor sit amet"
    },
    {
        id: 9,
        mode: "offline",
        studentImage: Girl,
        studentName: "Priya Kumari",
        className: "7th",
        date: "17 Feb 2021",
        time: "12:15 PM",
        title: "New LOren Ipsum dolor sit amet"
    },
    {
        id: 10,
        mode: "offline",
        studentImage: Boy,
        studentName: "Shafiq Ahmed",
        className: "10th",
        date: "12 Feb 2021",
        time: "9:20 AM",
        title: "New LOren Ipsum dolor sit amet"
    },
    {
        id: 11,
        mode: "offline",
        studentImage: Girl,
        studentName: "Rashmi Anand",
        className: "10th",
        date: "12 Feb 2021",
        time: "9:20 AM",
        title: "New LOren Ipsum dolor sit amet"
    },
    {
        id: 12,
        mode: "offline",
        studentImage: Boy,
        studentName: "Roushan Singh",
        className: "10th",
        date: "12 Feb 2021",
        time: "9:20 AM",
        title: "New LOren Ipsum dolor sit amet"
    },

]