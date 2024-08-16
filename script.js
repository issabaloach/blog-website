import {
    app,
    auth,
    db,
    storage,
    onAuthStateChanged,
    signOut,
    doc,
    getDoc,
    getDocs,
    collection,
}
     from "./utils/utils.js";


     const user_image = document.getElementById('user_image');
     const avatar = document.getElementById('avatar');
     const login_link = document.getElementById('login_link')

     onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const uid = user.uid;
            login_link.style.display = "none";
            avatar.style.display = "inline-block";
            getUserInfo(uid);
            // console.log(uid);
            // ...
        } else {
            // window.location.href = './authentication/login/login.html';
            login_link.style.display = "inline-block";
            avatar.style.display = "none";
        }
    });
    


function getUserInfo(uid) {

    const userRef = doc(db, "users", uid);

    getDoc(userRef).then((data) => {
        console.log(data.id);
        console.log(data.data());

        user_image.src = data.data().image;
        user_contact.innerText = data.data().number;

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
    });
};




const signout = document.getElementById("logout");

signout.addEventListener("click", () => {
  signOut(auth);
});


const technologyBlogs = [
    {
        name: "The Future of AI",
        image: 'https://media.istockphoto.com/id/1206796363/photo/ai-machine-learning-hands-of-robot-and-human-touching-on-big-data-network-connection.webp?b=1&s=612x612&w=0&k=20&c=h8KUcW6CWFRHa_5qFQDa1402xWv-tKDly-BDBc9EhjY=',
        description: "Explore how artificial intelligence is shaping the future of technology and its potential impact on various industries.",
        date: "2024-08-16",
        author: "Alice Johnson",
        tags: ["AI", "Machine Learning", "Future Tech"],
        
    },
    {
        name: "Blockchain Beyond Cryptocurrency",
        image:'https://images.unsplash.com/photo-1640161704729-cbe966a08476?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmxvY2tjaGFpbiUyMEJleW9uZCUyMENyeXB0b2N1cnJlbmN5fGVufDB8fDB8fHww',
        description: "Discover how blockchain technology is being used in sectors beyond cryptocurrency, including healthcare, finance, and supply chain management.",
        date: "2024-08-10",
        author: "Bob Smith",
        tags: ["Blockchain", "Cryptocurrency", "Technology"],
  
    },
    {
        name: "The Rise of Quantum Computing",
        image:'https://plus.unsplash.com/premium_photo-1682464783007-4deb8485301e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFRoZSUyMFJpc2UlMjBvZiUyMFF1YW50dW0lMjBDb21wdXRpbmd8ZW58MHx8MHx8fDA%3D',
        description: "An introduction to quantum computing, how it works, and its potential to revolutionize industries such as cryptography and materials science.",
        date: "2024-08-05",
        author: "Clara Davis",
        tags: ["Quantum Computing", "Cryptography", "Technology"],

    },
    {
        name: "5G and the Internet of Things (IoT)",
        image:'https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fDVHJTIwYW5kJTIwdGhlJTIwSW50ZXJuZXQlMjBvZiUyMFRoaW5ncyUyMChJb1QpfGVufDB8fDB8fHww',
        description: "How 5G technology is enabling the next wave of IoT devices and what it means for smart cities, autonomous vehicles, and more.",
        date: "2024-07-30",
        author: "David Lee",
        tags: ["5G", "IoT", "Smart Cities"],
  
    },
    {
        name: "Cybersecurity Trends in 2024",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q3liZXJzZWN1cml0eSUyMFRyZW5kcyUyMGluJTIwMjAyNHxlbnwwfHwwfHx8MA%3D%3D",
        description: "An overview of the latest cybersecurity threats and trends, including tips on how to protect yourself and your business from cyberattacks.",
        date: "2024-07-25",
        author: "Emily Johnson",
        tags: ["Cybersecurity", "Data Protection", "Tech Trends"],
  
    },
    {
        name: "Virtual Reality: Beyond Gaming",
        image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VmlydHVhbCUyMFJlYWxpdHklM0ElMjBCZXlvbmQlMjBHYW1pbmd8ZW58MHx8MHx8fDA%3D",
        description: "Exploring the use of virtual reality (VR) in fields like education, healthcare, and remote work, and how it's changing the way we interact with the world.",
        date: "2024-07-20",
        author: "Frank Miller",
        tags: ["Virtual Reality", "VR", "Education"],
    
    },
    {
        name: "The Evolution of Cloud Computing",
        image: "https://plus.unsplash.com/premium_photo-1683836722608-60ab4d1b58e5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGhlJTIwRXZvbHV0aW9uJTIwb2YlMjBDbG91ZCUyMENvbXB1dGluZ3xlbnwwfHwwfHx8MA%3D%3D",
        description: "A look at the evolution of cloud computing, its benefits for businesses, and the latest advancements in cloud technology.",
        date: "2024-07-15",
        author: "Grace Williams",
        tags: ["Cloud Computing", "Tech Infrastructure", "Innovation"],

    },
    {
        name: "Ethical Dilemmas in Tech",
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fEV0aGljYWwlMjBEaWxlbW1hcyUyMGluJTIwVGVjaHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Discussing the ethical challenges that arise with the development of new technologies, such as AI, data privacy, and automation.",
        date: "2024-07-10",
        author: "Henry Thomas",
        tags: ["Ethics", "AI", "Data Privacy"],
     
    },
    {
        name: "The Role of Robotics in Industry 4.0",
        image: "https://plus.unsplash.com/premium_photo-1682144729399-061e5c50d8df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFRoZSUyMFJvbGUlMjBvZiUyMFJvYm90aWNzJTIwaW4lMjBJbmR1c3RyeSUyMDQuMHxlbnwwfHwwfHx8MA%3D%3D",
        description: "How robotics is playing a critical role in the fourth industrial revolution, automating processes in manufacturing and beyond.",
        date: "2024-07-05",
        author: "Isabella Brown",
        tags: ["Robotics", "Industry 4.0", "Automation"],
  
    },
    {
        name: "Wearable Technology: Health and Beyond",
        image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFdlYXJhYmxlJTIwVGVjaG5vbG9neSUzQSUyMEhlYWx0aCUyMGFuZCUyMEJleW9uZHxlbnwwfHwwfHx8MA%3D%3D",
        description: "Exploring the impact of wearable technology on health monitoring, fitness, and how it's expanding into new areas like fashion and safety.",
        date: "2024-07-01",
        author: "Jack Wilson",
        tags: ["Wearable Tech", "Health Tech", "Innovation"],
  
    }
];


const blogsContainer = document.getElementById('blogsContainer');

technologyBlogs.forEach(blog => {
    const blogElement = document.createElement('div');
    blogElement.className = 'bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105';

    blogElement.innerHTML = `
        <img src="${blog.image}" alt="${blog.name}" class="w-full h-48 object-cover">
        <div class="p-4">
            <h2 class="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-200">
                <a href="${blog.url}">${blog.name}</a>
            </h2>
            <p class="text-gray-600 mt-2">${blog.description}</p>
            <div class="mt-4 flex items-center justify-between text-gray-500 text-sm">
                <span>By ${blog.author}</span>
                <span>${blog.date}</span>
            </div>
            <div class="mt-2 flex flex-wrap gap-2">
                ${blog.tags.map(tag => `<span class="bg-blue-100 text-blue-500 px-2 py-1 rounded">${tag}</span>`).join('')}
            </div>
        </div>
    `;

    blogsContainer.appendChild(blogElement);
});