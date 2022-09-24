import React from "react";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card';
import ReactPaginate from "react-paginate";

export default function Shows(){
    const [wweShows, setWweShows] = useState([
        {
          brand:"Friday Night SmackDown",
          date:"16/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Fatal-4 Way Tag Team"
        },{
          brand:"NXT",
          date:"14/9/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Shotzi"
        }
        ,{
          brand:"Mondat Night Raw",
          date:"12/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Dominik Mysterio"
        },{
          brand:"Friday Night SmackDown",
          date:"9/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"7/9/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"5/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        }
        ,{
          brand:"Clash At The Castle",
          date:"3/9/2022",
          ppv:true,
          poster:"https://pbs.twimg.com/media/FSoit9oXsAAThCt.jpg",
          me:"Drew McIntyre vs Roman Reigns"
        },{
          brand:"Friday Night SmackDown",
          date:"2/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Sami Zayn"
        },{
          brand:"NXT",
          date:"31/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Kevin Owens vs Bobby Rhode"
        },{
          brand:"Mondat Night Raw",
          date:"29/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Kevin Owens vs Jey Uso"
        },{
          brand:"Friday Night SmackDown",
          date:"26/8/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Karrion Cross vs Ridge Holand"
        },{
          brand:"NXT",
          date:"24/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Dakota Kai"
        },{
          brand:"Mondat Night Raw",
          date:"22/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"19/8/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Sheamus vs Gunther"
        },{
          brand:"NXT",
          date:"17/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Solo Sikoa vs Ricochet"
        },{
          brand:"Mondat Night Raw",
          date:"15/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"12/8/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"10/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Pete Dunne vs Thomaso Champa"
        },{
          brand:"Mondat Night Raw",
          date:"8/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"SummerSlam",
          date:"6/8/2022",
          ppv:true,
    poster:"https://shahed4u.vip/wp-content/uploads/2022/07/FXEDZLhXgAA_T-X.jpg",
          me:"Roman Reigns vs Brock Lesnar"
        },{
          brand:"Friday Night SmackDown",
          date:"5/8/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Sami Zayn"
        },{
          brand:"NXT",
          date:"3/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Johnny Gargano"
        },{
          brand:"Mondat Night Raw",
          date:"1/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Kevin Owens vs Jey Uso"
        },{
          brand:"Friday Night SmackDown",
          date:"29/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Karrion Cross vs Ridge Holand"
        },{
          brand:"NXT",
          date:"27/7/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Naomi"
        },{
          brand:"Mondat Night Raw",
          date:"25/7/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"22/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Sheamus vs Gunther"
        },{
          brand:"NXT",
          date:"20/7/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Sami Zayn vs Ricochet"
        },{
          brand:"Mondat Night Raw",
          date:"18/7/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"15/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"13/7/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Thomasso Champa vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"11/7/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"Money In The Bank",
          date:"10/7/2022",
          ppv:true,
    poster:"https://i.pinimg.com/originals/2a/c4/ae/2ac4ae357f154365b4efe0e79407dcf5.jpg",
          me:"8-Men MITB Ladder Match"
        },{
          brand:"Friday Night SmackDown",
          date:"8/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Fatal-4 Way Tag Team"
        },{
          brand:"NXT",
          date:"6/7/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Shotzi"
        }
        ,{
          brand:"Mondat Night Raw",
          date:"4/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Dominik Mysterio"
        },{
          brand:"Friday Night SmackDown",
          date:"1/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"29/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"27/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        }
        ,{
          brand:"Friday Night SmackDown",
          date:"24/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"22/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"20/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        },{
          brand:"Friday Night SmackDown",
          date:"17/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"15/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"13/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        },{
          brand:"Friday Night SmackDown",
          date:"10/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"8/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"6/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        },{
          brand:"Hell In A Cell",
          date:"5/6/2022",
          ppv:true,
          poster:"https://extrask.xyz/wp-content/uploads/2022/06/%D8%B9%D8%B1%D8%B6-WWE-Hell-in-a-Cell-2022-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-416x520.jpg",
          me:"Cody Rhodes vs Seth Rollins"
        },{
          brand:"Friday Night SmackDown",
          date:"3/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Sami Zayn"
        },{
          brand:"NXT",
          date:"1/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Kevin Owens vs Bobby Rhode"
        },{
          brand:"Mondat Night Raw",
          date:"30/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Kevin Owens vs Jey Uso"
        },{
          brand:"Friday Night SmackDown",
          date:"27/5/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Karrion Cross vs Ridge Holand"
        },{
          brand:"NXT",
          date:"25/5/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Dakota Kai"
        },{
          brand:"Mondat Night Raw",
          date:"23/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"20/5/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Sheamus vs Gunther"
        },{
          brand:"NXT",
          date:"18/5/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Solo Sikoa vs Ricochet"
        },{
          brand:"Mondat Night Raw",
          date:"16/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"13/5/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"11/5/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Pete Dunne vs Thomaso Champa"
        },{
          brand:"Mondat Night Raw",
          date:"9/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"WrestleMania BackLash",
          date:"8/5/2022",
          ppv:true,
    poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f69b216b-6172-4a87-9af3-b349ea926781/df478bz-d232390c-8329-4a7a-9cb4-728a0b54f823.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2OWIyMTZiLTYxNzItNGE4Ny05YWYzLWIzNDllYTkyNjc4MVwvZGY0Nzhiei1kMjMyMzkwYy04MzI5LTRhN2EtOWNiNC03MjhhMGI1NGY4MjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MJnoWML2ZXpAmX5qexi68MGmQyQdk6xq2yIhyePAdAQ",
          me:"The Bloodline vs Team Drew"
        },{
          brand:"Friday Night SmackDown",
          date:"6/5/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Sami Zayn"
        },{
          brand:"NXT",
          date:"4/5/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Johnny Gargano"
        },{
          brand:"Mondat Night Raw",
          date:"2/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Kevin Owens vs Jey Uso"
        },{
          brand:"Friday Night SmackDown",
          date:"29/4/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Karrion Cross vs Ridge Holand"
        },{
          brand:"NXT",
          date:"27/4/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Naomi"
        },{
          brand:"Mondat Night Raw",
          date:"25/4/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"22/4/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Sheamus vs Gunther"
        },{
          brand:"NXT",
          date:"20/4/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Sami Zayn vs Ricochet"
        },{
          brand:"Mondat Night Raw",
          date:"18/4/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"15/4/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"13/4/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Thomasso Champa vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"11/4/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"Friday Night SmackDown",
          date:"8/4/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"6/4/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Thomasso Champa vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"4/4/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"WrestleMania 38 Night 2",
          date:"3/4/2022",
          ppv:true,
    poster:"https://cimatickets.com/wp-content/uploads/2022/04/MV5BMGM1ZDJlNzMtMjQyOC00OWVmLTg5NDAtNTMwNzg5NjgxNmRjXkEyXkFqcGdeQXVyOTA0NzE2MzA@._V1_.jpg",
          me:"Roman Reigns vs Brock Lesnar"
        },{
          brand:"WrestleMania 38 Night 1",
          date:"3/4/2022",
          ppv:true,
    poster:"https://imgp.clickiocdn.com/fLAsBmYsyp0V98WoievA7pdWnkUIgLTJUIVOmwM7dvg/rs:fill:500:0/g:ce/q:70/aHR0cHM6Ly9zMy5zdXBlcmx1Y2hhcy5jb20vMjAyMi8wMy9GTldITlNHV1lBVWJ6QWwuanBn",
          me:"Kevin Owens vs Stone Cold Steve Austin"
        },{
          brand:"Friday Night SmackDown",
          date:"16/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Fatal-4 Way Tag Team"
        },{
          brand:"NXT",
          date:"14/9/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Shotzi"
        }
        ,{
          brand:"Mondat Night Raw",
          date:"12/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Dominik Mysterio"
        },{
          brand:"Friday Night SmackDown",
          date:"9/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"7/9/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"5/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        }
        ,{
          brand:"Clash At The Castle",
          date:"3/9/2022",
          ppv:true,
          poster:"https://pbs.twimg.com/media/FSoit9oXsAAThCt.jpg",
          me:"Drew McIntyre vs Roman Reigns"
        },{
          brand:"Friday Night SmackDown",
          date:"2/9/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Sami Zayn"
        },{
          brand:"NXT",
          date:"31/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Kevin Owens vs Bobby Rhode"
        },{
          brand:"Mondat Night Raw",
          date:"29/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Kevin Owens vs Jey Uso"
        },{
          brand:"Friday Night SmackDown",
          date:"26/8/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Karrion Cross vs Ridge Holand"
        },{
          brand:"NXT",
          date:"24/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Dakota Kai"
        },{
          brand:"Mondat Night Raw",
          date:"22/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"19/8/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Sheamus vs Gunther"
        },{
          brand:"NXT",
          date:"17/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Solo Sikoa vs Ricochet"
        },{
          brand:"Mondat Night Raw",
          date:"15/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"12/8/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"10/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Pete Dunne vs Thomaso Champa"
        },{
          brand:"Mondat Night Raw",
          date:"8/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"SummerSlam",
          date:"6/8/2022",
          ppv:true,
    poster:"https://shahed4u.vip/wp-content/uploads/2022/07/FXEDZLhXgAA_T-X.jpg",
          me:"Roman Reigns vs Brock Lesnar"
        },{
          brand:"Friday Night SmackDown",
          date:"5/8/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Sami Zayn"
        },{
          brand:"NXT",
          date:"3/8/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Johnny Gargano"
        },{
          brand:"Mondat Night Raw",
          date:"1/8/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Kevin Owens vs Jey Uso"
        },{
          brand:"Friday Night SmackDown",
          date:"29/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Karrion Cross vs Ridge Holand"
        },{
          brand:"NXT",
          date:"27/7/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Naomi"
        },{
          brand:"Mondat Night Raw",
          date:"25/7/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"22/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Sheamus vs Gunther"
        },{
          brand:"NXT",
          date:"20/7/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Sami Zayn vs Ricochet"
        },{
          brand:"Mondat Night Raw",
          date:"18/7/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"15/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"13/7/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Thomasso Champa vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"11/7/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"Money In The Bank",
          date:"10/7/2022",
          ppv:true,
    poster:"https://i.pinimg.com/originals/2a/c4/ae/2ac4ae357f154365b4efe0e79407dcf5.jpg",
          me:"8-Men MITB Ladder Match"
        },{
          brand:"Friday Night SmackDown",
          date:"8/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Fatal-4 Way Tag Team"
        },{
          brand:"NXT",
          date:"6/7/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Shotzi"
        }
        ,{
          brand:"Mondat Night Raw",
          date:"4/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Dominik Mysterio"
        },{
          brand:"Friday Night SmackDown",
          date:"1/7/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"29/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"27/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        }
        ,{
          brand:"Friday Night SmackDown",
          date:"24/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"22/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"20/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        },{
          brand:"Friday Night SmackDown",
          date:"17/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"15/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"13/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        },{
          brand:"Friday Night SmackDown",
          date:"10/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Solo Sikoa"
        },{
          brand:"NXT",
          date:"8/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"6/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Austin Theory"
        },{
          brand:"Hell In A Cell",
          date:"5/6/2022",
          ppv:true,
          poster:"https://extrask.xyz/wp-content/uploads/2022/06/%D8%B9%D8%B1%D8%B6-WWE-Hell-in-a-Cell-2022-%D9%85%D8%AA%D8%B1%D8%AC%D9%85-416x520.jpg",
          me:"Cody Rhodes vs Seth Rollins"
        },{
          brand:"Friday Night SmackDown",
          date:"3/6/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Sami Zayn"
        },{
          brand:"NXT",
          date:"1/6/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Kevin Owens vs Bobby Rhode"
        },{
          brand:"Mondat Night Raw",
          date:"30/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Kevin Owens vs Jey Uso"
        },{
          brand:"Friday Night SmackDown",
          date:"27/5/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Karrion Cross vs Ridge Holand"
        },{
          brand:"NXT",
          date:"25/5/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Dakota Kai"
        },{
          brand:"Mondat Night Raw",
          date:"23/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"20/5/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Sheamus vs Gunther"
        },{
          brand:"NXT",
          date:"18/5/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Solo Sikoa vs Ricochet"
        },{
          brand:"Mondat Night Raw",
          date:"16/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"13/5/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"11/5/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Pete Dunne vs Thomaso Champa"
        },{
          brand:"Mondat Night Raw",
          date:"9/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"WrestleMania BackLash",
          date:"8/5/2022",
          ppv:true,
    poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f69b216b-6172-4a87-9af3-b349ea926781/df478bz-d232390c-8329-4a7a-9cb4-728a0b54f823.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y2OWIyMTZiLTYxNzItNGE4Ny05YWYzLWIzNDllYTkyNjc4MVwvZGY0Nzhiei1kMjMyMzkwYy04MzI5LTRhN2EtOWNiNC03MjhhMGI1NGY4MjMuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MJnoWML2ZXpAmX5qexi68MGmQyQdk6xq2yIhyePAdAQ",
          me:"The Bloodline vs Team Drew"
        },{
          brand:"Friday Night SmackDown",
          date:"6/5/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Sami Zayn"
        },{
          brand:"NXT",
          date:"4/5/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Adam Cole vs Johnny Gargano"
        },{
          brand:"Mondat Night Raw",
          date:"2/5/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Kevin Owens vs Jey Uso"
        },{
          brand:"Friday Night SmackDown",
          date:"29/4/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Karrion Cross vs Ridge Holand"
        },{
          brand:"NXT",
          date:"27/4/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Mandy Rose vs Naomi"
        },{
          brand:"Mondat Night Raw",
          date:"25/4/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Edge vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"22/4/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Sheamus vs Gunther"
        },{
          brand:"NXT",
          date:"20/4/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Sami Zayn vs Ricochet"
        },{
          brand:"Mondat Night Raw",
          date:"18/4/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"Bobby Lashely vs Damian Priest"
        },{
          brand:"Friday Night SmackDown",
          date:"15/4/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"13/4/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Thomasso Champa vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"11/4/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"Friday Night SmackDown",
          date:"8/4/2022",
          ppv:false,
          poster:"https://i.pinimg.com/originals/76/81/97/7681977c92c2d9c1d67dfbf5cc791d7b.jpg",
          me:"Drew McIntyre vs Jey Uso"
        },{
          brand:"NXT",
          date:"6/4/2022",
          ppv:false,
          poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/77aab2d6-dc2c-498a-b715-cecb0b321211/d8p3z6a-99a15fe2-54d0-4141-a430-c13eeddf8b2b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3YWFiMmQ2LWRjMmMtNDk4YS1iNzE1LWNlY2IwYjMyMTIxMVwvZDhwM3o2YS05OWExNWZlMi01NGQwLTQxNDEtYTQzMC1jMTNlZWRkZjhiMmIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.zyH1TBIj0UDzVk7Aqn7wTc2NECMt67pKiHqdlF9kO5Y",
          me:"Thomasso Champa vs Finn Balor"
        },{
          brand:"Mondat Night Raw",
          date:"4/4/2022",
          ppv:false,
    poster:"https://i.pinimg.com/originals/1c/46/5f/1c465faf5392d162dad6e8ad58f9ea45.jpg",
          me:"AJ Styles vs The Miz"
        },{
          brand:"WrestleMania 38 Night 2",
          date:"3/4/2022",
          ppv:true,
    poster:"https://cimatickets.com/wp-content/uploads/2022/04/MV5BMGM1ZDJlNzMtMjQyOC00OWVmLTg5NDAtNTMwNzg5NjgxNmRjXkEyXkFqcGdeQXVyOTA0NzE2MzA@._V1_.jpg",
          me:"Roman Reigns vs Brock Lesnar"
        },{
          brand:"WrestleMania 38 Night 1",
          date:"3/4/2022",
          ppv:true,
    poster:"https://imgp.clickiocdn.com/fLAsBmYsyp0V98WoievA7pdWnkUIgLTJUIVOmwM7dvg/rs:fill:500:0/g:ce/q:70/aHR0cHM6Ly9zMy5zdXBlcmx1Y2hhcy5jb20vMjAyMi8wMy9GTldITlNHV1lBVWJ6QWwuanBn",
          me:"Kevin Owens vs Stone Cold Steve Austin"
        }
        
      ]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [pages,setPages] = useState(0);
    const showsPerPage = 12;
    const pagesVisited = pages * showsPerPage;
    const displayShows = wweShows.slice(pagesVisited, pagesVisited + showsPerPage).map(show => {
      let badge;
      badge = show.ppv;
      return (
        <div className="col-12 col-md-6 col-lg-3 d-flex mb-4 justify-content-center">
          <Card style={{ width: '18rem' }} className="rounded-0">
            
            <Card.Img variant="top" src={show.poster} className="rounded-0"/>
            <Card.Body>
              <Card.Title className="d-flex align-items-center gap-2">{show.brand}{badge && <span className="badge border border-danger text-danger rounded-0">PPV</span>}</Card.Title>
              <Card.Text>
                {show.date}
              </Card.Text>
              <Card.Text>
                {show.me}
              </Card.Text>
              <Button variant="danger" className="rounded-0" onClick={()=>{
                if(badge){
                  handleShow();
                }
              }}>Watch</Button>
            </Card.Body>
          </Card>
        </div>
      );
    })
    const pageCount = Math.ceil(wweShows.length / showsPerPage);
    const changePage = ({selected})=>{
      document.getElementById("shows").scrollIntoView();
      setPages(selected)
    }
    return(
        <>
            <div className="container shows d-flex flex-column align-items-center">
                <div className="row" style={{width: '100%'}}>
                {displayShows}
                </div>
                <ReactPaginate 
                
                pageRangeDisplayed = {0}
                siblingCount = {0}
                previousLabel={"Previous"} 
                nextLabel = {"Next"} 
                breakLabel = {"..."}
                pageCount={pageCount} 
                onPageChange={changePage}
                containerClassName = {"pagination-btns d-flex align-items-center gap-2 gap-md-4 px-0"}
                previousLinkClassName = {"previous-btn btn btn-danger rounded-0 d-flex"}
                nextLinkClassName = {"next-btn btn btn-danger rounded-0 d-flex"}
                disabledClassName = {"pagination-disabled rounded-0 d-flex"}
                activeClassName = {"pagination-activ btn btn-outline-danger rounded-0 d-flex"}
                />
                <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>WWE Premium</Modal.Title>
                </Modal.Header>
                <Modal.Body>You need to be subscribed to WWE Network to be able to watch our PPVs</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose} className="rounded-0">
                    Cancel
                  </Button>
                  <Button variant="danger" onClick={handleClose} className="rounded-0">
                    Subscribe Now
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
        </>
    )
}