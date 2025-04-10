export interface BlogPost {
  id: number;
  title: string;
  preview: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Clean Your Sneakers Like a Pro",
    preview: "Learn the best techniques to keep your sneakers looking fresh and extend their lifespan with our expert tips.",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Choosing Running Shoes",
    preview: "Finding the perfect running shoes can make all the difference in your performance and comfort. Here's what to look for.",
    image: "https://images.unsplash.com/photo-1465453869711-7e174808ace9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80"
  },
  {
    id: 3,
    title: "Adidas Superstar: A History of an Icon",
    preview: "Explore the rich history and cultural impact of one of the most influential sneaker designs of all time.",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
  }
];
