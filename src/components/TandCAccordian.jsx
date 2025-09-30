import React from "react";

const tandcData = {
  0: {
    title: "Introduction",
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque veritatis aut similique itaque vero odit ducimus obcaecati quis maiores explicabo. Inventore obcaecati ea consectetur laborum iure eius distinctio quam animi!
    Architecto corporis adipisci voluptatem repudiandae neque deleniti blanditiis sequi! Ut iusto corrupti nostrum sunt facilis totam officia dolorem. Officia eaque mollitia, deserunt molestias tempora labore quisquam ex natus aspernatur beatae?
    Fuga debitis, commodi nostrum excepturi atque quod esse reprehenderit molestiae voluptatibus. Quo nulla animi veniam optio perferendis quis, quisquam minima blanditiis unde doloremque eveniet possimus ea nam voluptates ex itaque.
    Dolorem dolor obcaecati in ad quibusdam soluta corrupti? Earum fuga ea laudantium. Magni doloremque nostrum itaque similique illum distinctio, unde harum impedit odit officia enim aperiam placeat dicta expedita ullam.
    Iste, itaque! Illum repellendus consectetur voluptas velit. Sequi recusandae possimus ea eum natus numquam tempore amet repudiandae velit. Ipsam ea, porro eligendi laudantium voluptatem quia ipsa sit aspernatur tempora quis!
    Quasi est alias natus repellendus ipsum. Expedita minima fugiat fuga molestias dolorem repudiandae laudantium facere iusto deserunt veniam, veritatis, vero possimus sint. Id error perferendis dolores repudiandae unde? Alias, quis.
    Incidunt sapiente nulla qui, veniam odio quia voluptas aperiam nemo enim reprehenderit excepturi ea alias atque nostrum expedita sunt blanditiis magnam eaque ipsa, inventore quisquam soluta totam illum. A, enim?
    Molestiae illum ducimus quas tempore explicabo ut nulla, odio nesciunt voluptate cupiditate officia excepturi voluptatum accusamus quae culpa consectetur mollitia, cum blanditiis hic ratione molestias! At aperiam enim culpa praesentium?
    Iure, modi reprehenderit quisquam saepe nemo libero assumenda soluta exercitationem ea in, ducimus fuga fugit quis necessitatibus eaque porro excepturi corrupti autem, iste nisi animi quas? Repellat aperiam minima dolor!
    Dolorem minima assumenda soluta illo sit, impedit, tempora, neque illum eum quisquam porro! Vitae est impedit magni odit illo natus fugiat vel rem tempore nemo quidem ad eius, quos aliquid?`
  },
  1: {
    title: "User Accounts, User Registration and Delivery of Services",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi...`
  },
  2: {
    title: "Payment Terms and Refund Policy",
    description: `All payments must be made in full at the time of purchase...`
  },
  3: {
    title: "Use of Programs",
    description: `Curabitur pretium, elit a interdum scelerisque, sem mi pretium felis...`
  },
  4: {
    title: "User Conduct Policy",
    description: `Suspendisse tristique, est eget fermentum vestibulum, arcu velit maximus justo...`
  },
  5: {
    title: "User Content",
    description: `Aenean gravida, lorem ac efficitur gravida, lacus nisl ultricies lorem...`
  }
};

const TandCAccordion = ({ activeCategory }) => {
  const content = tandcData[activeCategory];

  if (!content) return null;

  return (
    <div className="bg-[#F5F6FE]  font-gilroy rounded-3xl p-8 md:p-12 lg:p-16 space-y-4">
      <h2 className="text-lg md:text-xl  font-bold text-gray-900">
        {content.title}
      </h2>
      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
        {content.description}
      </p>
    </div>
  );
};

export default TandCAccordion;
