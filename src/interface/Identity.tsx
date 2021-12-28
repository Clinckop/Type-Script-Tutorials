import { IsPerson } from "./IsPerson";

const Identity = () => {
  const me: IsPerson = {
    name: "harry",
    email: "joe@hotmail.com",
    speak(text: string): string {
      console.log(text);
      return text;
    },
    spend(amount: number): number {
      console.log("I've spent ", amount);
      return amount;
    }
  };
  return (
    <div className="App">
      <h1>{me.name}</h1>
      <h1>{me.email}</h1>
      {me.speak("hello")}
      {me.spend(99)}
    </div>
  );
}

export default Identity;