export default function About() {
  return (
    <div className="h-full flex flex-col gap-2 px-8 md:px-20 mt-4">
      <div className="my-5 md:my-8 text-lg md:text-4xl font-bold">
        Who is Peter.K?
      </div>
      <div>
        <p>
          👋 Hi, My name is Peter Kim, currently working as a freelance web /
          app developer in Melbourne.
        </p>
        <p>
          I've started my journey as a developer in 2017 when I was working as a
          factory floor manager in Brisbane (I know it sounds odd). Back then,
          the company had no system to manage the inventory, so I started making
          one myself using excel. Little later as I moved in to the office as a
          manager, I then started making a tiny CRM using PHP and JS after
          realising the limitations excel had.
        </p>
        <p>
          Ever since, I've worked on various paid / unpaid projects whilist
          learning and utilising multiple technologies / languages / frameworks,
          which eventually lead me to shift my career as a full-time freelance
          developer.
        </p>
        <p>
          As a self taught developer, I'm versatile, flexible, and always
          willing to learn not only the latest technologies but concepts and
          back bones of computer science that can teach me efficient and
          structured approaches to solving problems.
        </p>
      </div>

      <div className="my-5 md:my-8 text-lg md:text-4xl font-bold">
        Specialties & Tech Stacks
      </div>
      <ul className="list-disc ml-6">
        <li>CRM (Customer relationship management) Software</li>
        <li>
          JavaScript / <span className="text-red-400">TypeScript</span>
        </li>
        <li>
          JS Frameworks: <span className="text-red-400">React</span>, React
          Native, Node JS..
        </li>
        <li>FrontEnd State management</li>
        <li>
          <span className="text-red-400">Tailwind CSS</span>, SCSS, Various UI
          Frameworks inc. Bootstrap, Mui{" "}
        </li>
        <li>
          Rest API, <span className="text-red-400">GraphQL</span> API / related
          libraries inc. axios, <span className="text-red-400">Apollo</span>..
        </li>
        <li>
          NoSQL:Mongo DB, SQL:MySql,{" "}
          <span className="text-red-400">PostgreSql</span>, ORMs inc.{" "}
          <span className="text-red-400">Hasura</span>
        </li>
        <li>
          Cloud Storage, <span className="text-red-400">Object Storage</span>,
          NAS integration
        </li>
        <li>PWA with offline support, push notifications, real-time updates</li>
        <li>
          Product release on various platforms inc iOS, Android, Web Hosting,
          VPS
        </li>
        <li>
          <span className="text-red-400">Git</span>
        </li>
        <li>PHP</li>
      </ul>
      <div className="text-sm italic">
        * <span className="text-red-400">Highlighted</span> items were used in
        building this site
      </div>
    </div>
  );
}
