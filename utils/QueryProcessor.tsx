export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrew")) {
    return (
      "Your Andrew ID is asalu."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "Your name is Akintayo."
    );
  }

  if (query.toLowerCase().includes("99, 40, 24")) {
    return (
      "The largest number is 99."
    );
  }

  const addMatch = query.match(/What is (\d+) plus (\d+)/);
  if (addMatch) {
    const x: number = parseInt(addMatch[1]);
    const y: number = parseInt(addMatch[2]);
    return (x+y).toString();
  }

  const largestNum = query.match(/Which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largestNum){
    const x: number = parseInt(largestNum[1]);
    const y: number = parseInt(largestNum[2]);
    const z: number = parseInt(largestNum[3]);
    return Math.max(x,y,z).toString();
  }

  const multiplied =  query.match(/What is (\d+) multiplied by (\d+)/);
  if (multiplied){
    const x: number = parseInt(multiplied[1]);
    const y: number = parseInt(multiplied[2]);
    return (x*y).toString();
  }

  const minus =  query.match(/What is (\d+) minus (\d+)/);
  if (minus){
    const x: number = parseInt(minus[1]);
    const y: number = parseInt(minus[2]);
    return (x-y).toString();
  }

  return "";
}
