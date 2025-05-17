import React from 'react'
import { useSelector } from 'react-redux';

function Comments() {
   const state = useSelector((state) => state.theme)
  const comments = [
    {
      name: "James Washington",
      role: "Content Marketing",
      company : 'Wipro',
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100",
      comment: "Great platform! Helped me connect with amazing clients.",
    },
    {
      name: "Richard Nelson",
      role: "Content Writer",
      company : 'Wipro',
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100",
      comment: "User-friendly and very efficient. Highly recommended!",
    },
    {
      name: "Donald Jackman",
      role: "Content Creator",
      company : 'Tata Groups',
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop",
      comment: "Support team is responsive and helpful. Great experience overall.",
    },
  ];

  return (
    <div className="p-6">
      <h2 className={`text-3xl font-bold text-center mb-16 ${state.textColor}`}>
        Customer Reviews
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {comments.map((user, index) => (
          <div
           data-aos="fade-left"
            key={index}
            className="w-80 text-sm text-gray-100 border border-gray-500/30 rounded bg-blue-600 hover:bg-green-600 transition-colors duration-300"
          >
            <div className="flex items-start justify-between p-3">
              <div>
                <h2 className="text-lg text-white font-semibold">{user.name}</h2>
                <p className="text-gray-200">{user.role}</p>
                <p className="text-gray-200">{user.company}</p>
              </div>
              <img
                className="h-10 w-10 rounded-full"
                src={user.image}
                alt={`userImage${index + 1}`}
              />
            </div>
            <div className="px-3 pb-4 text-gray-100">{user.comment}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
