import { DownloadIcon } from "@heroicons/react/outline";
import data from "../data.json";
import Social from "./components/Social";
import Section from "./components/Section";
import SkillList from "./components/SkillList";
import Hobbies from "./components/Hobbies";
import Item from "./components/Item";
function App() {
  return (
    <>
      <div className="max-w-85ch mx-auto px-4">
        <span id="download" className="flex justify-center text-blue-600 pt-2">
          <DownloadIcon className="h-6 w-6 mr-1" />{" "}
          <a href="/cv.pdf" className="hover:underline">
            Download as PDF
          </a>
        </span>
        <h1 className="text-center text-4xl font-medium py-6 pt-8 font-display tracking-wide">
          {data.name}
        </h1>
        <div className="py-4">
          <Social
            email={data.email}
            website={data.website}
            github={data.github}
            linkedin={data.linkedin}
          />
        </div>
        <div>
          <Section title="Skills">
            <>
              <SkillList title="Programming Languages" list={data.languages} />
              {/* <SkillList
                title="Libraries & Frameworks"
                list={data.librariesAndFrameworks}
              /> */}
            </>
          </Section>

          <Section title="Experience">
            <div className="grid gap-y-2">
              {data.experience.map((x) => (
                <Item
                  title={x.role}
                  location={x.company}
                  time={x.duration}
                  description={x.description}
                />
              ))}
            </div>
          </Section>
          {/* <Section title="Writing">
            <div className="grid gap-y-2">
              {data.writing.map((x) => (
                <Item
                  title={x.title}
                  time={x.date}
                  link={x.link}
                  location={x.publication}
                />
              ))}
            </div>
          </Section> */}
          <Section title="Education">
            {data.education.map((x) => (
              <Item
                title={x.qualification}
                location={x.institution}
                time={x.duration}
                description={x.description}
              />
            ))}
          </Section>
          <Section title="Projects" link="https://adrianstobbe.com/projects/">
          <div>
      <p>
        various web-based apps built with Svelte / React.
      </p>
      <p>For more details on all of my projects, see the link.</p>
        {/*<p>a security-focused report system for a NGO, a {' '}
        <a href="https://github.com/elchead/misou" className="underline text-cyan-600">
          native personal search engine app
        </a>, a {' '}
        <a href="https://github.com/elchead/people" className="underline text-cyan-600">
           progressive web app for a personal CRM
        </a>
      </p>*/}
      {/*<ul>
        <li>
          a security-focused report system for a NGO
        </li>
        <li>
          <a href="https://github.com/elchead/misou" className="underline text-cyan-600">
            native personal search engine app
          </a>
        </li>
        <li>
          <a href="https://github.com/elchead/people" className="underline text-cyan-600">
            progressive web app for a personal CRM
          </a>
        </li>
      </ul>*/}
      {/*<p>for more details on all of my projects see the project page link</p>*/}
    </div>


            {/*<div className="grid gap-y-2">
              {data.project.map((x) => (
                <Item
                  title={x.name}
                  link={x.link}
                  time={x.date}
                  description={x.description}
                />
              ))}
            </div>*/}
          </Section>
          <Section title="Honors / Certificates">
            <div className="grid gap-y-2">
              {data.honors.map((x) => (
                <Item
                  title={x.role}
                  // location={x.company}
                  time={x.duration}
                  // description={x.description}
                />
              ))}
            </div>
          </Section>
          <Section title="Programs / Hackathons">
            <Hobbies list={data.programs} />
          </Section>
          <Section title="Hobbies">
            <Hobbies list={data.hobbies} />
            {/* <div className="grid gap-y-2">
              {data.hobbies.map((x) => (
                <Item
                  title={x.role}
                  // location={x.company}
                  time={x.duration}
                  // description={x.description}
                />
              ))}
            </div> */}
          </Section>
        </div>
      </div>
    </>
  );
}

export default App;
