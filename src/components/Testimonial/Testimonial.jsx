import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      avatar: 'https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg',
      name: 'Martin escobar',
      title: 'Founder of meta',
      quote:
        "I'm so glad I found this website! The recipes are not only delicious but also easy to follow. My family and friends are always impressed with the meals I make using the recipes I find here.",
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/79.jpg',
      name: 'Angela stian',
      title: 'Fashion Designer',
      quote:
        'The chef behind this website is a true culinary genius! I love trying out his recipes and learning about different cooking techniques. His passion for food is contagious and inspiring.',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/86.jpg',
      name: 'Karim ahmed',
      title: 'Home Chef',
      quote:
        'This website has become my go-to resource for dinner party ideas. The recipes are always a hit with my guests, and I love that I can impress them without spending hours in the kitchen.',
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="max-w-xl sm:text-center md:mx-auto">
          <h3 className="text-4xl font-logo font-medium text-primary md:text-5xl">Real Stories from Real People</h3>
          <p className="mt-5 text-gray-600">Testimonials from Our Satisfied Customers shows that our chefs are world class in italian cuisine. They have made over 10000 dishes past few years.</p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item, idx) => (
              <li
                key={idx}
                className="rounded-xl bg-gray-50 p-4">
                <figure>
                  <div className="flex items-center gap-x-4">
                    <img
                      src={item.avatar}
                      className="h-16 w-16 rounded-full"
                    />
                    <div>
                      <span className="block font-semibold text-gray-800">{item.name}</span>
                      <span className="mt-0.5 block text-sm text-gray-600">{item.title}</span>
                    </div>
                  </div>
                  <blockquote>
                    <p className="mt-6 text-gray-700">{item.quote}</p>
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
