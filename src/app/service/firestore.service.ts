import {Injectable} from '@angular/core';
import {
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  docData,
  Firestore,
  setDoc,
  updateDoc
} from "@angular/fire/firestore";
import {Category, Food} from "../FoodList";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  foodList: Food[] = [];
  foodListChange: Subject<Food[]> = new Subject<Food[]>();

  constructor(private firestore: Firestore) {
  }

  public saveFoodList(foodList: Food[]) {
    this.foodList = foodList;
    this.foodListChange.next(foodList);
  }


  addFood(food: Food) {
    const foodRef = collection(this.firestore, 'food-list');
    return addDoc(foodRef, food);
  }

  addCollection(food: Food[]) {
    const foodRef = collection(this.firestore, 'food-list');
    return addDoc(foodRef, food);
  }

  getFoodList(): Observable<Food[]> {
    const foodRef = collection(this.firestore, 'food-list');
    return collectionData(foodRef, {idField: 'id'}) as Observable<Food[]>;
  }

  deleteFood(food: Food) {
    const foodDocRef = doc(this.firestore, `food-list/${food.id}`);
    return deleteDoc(foodDocRef);
  }

  getFoodById(id: string) {
    const foodRef = doc(this.firestore, `food-list/${id}`);
    return docData(foodRef, {idField: 'id'}) as Observable<Food>;
  }

  updateFood(food: Food) {
    const foodDocRef = doc(this.firestore, `food-list/${food.id}`);
    return setDoc(foodDocRef, food);
  }

  modifyFoodName(food: Food, newName: string) {
    const foodDocRef = doc(this.firestore, `food/${food.id}`);
    return updateDoc(foodDocRef, {name: newName});
  }

  modifyFoodCategory(food: Food, newCategory: Category) {
    const foodDocRef = doc(this.firestore, `food/${food.id}`);
    return updateDoc(foodDocRef, {category: newCategory});
  }
}
