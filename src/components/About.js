import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const About = () => {
  return (
    <div>
      <section id="about" data-aos="fade-right">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse ad
          dolores ducimus illum quos soluta pariatur veniam atque iusto id
          consectetur, assumenda quis laborum consequatur laboriosam officia
          enim. Quibusdam, mollitia? Quidem aliquam velit, rerum at dolor
          aliquid corrupti. Aut, magni dolorem, eveniet porro laudantium modi
          sed quae animi, sint odit facilis! Quisquam tempore nobis accusamus
          dolor? Soluta ipsam nisi officia? Earum qui architecto neque eligendi?
          Corrupti, maxime! Illo alias quos quaerat in, cum praesentium labore
          rem fuga culpa laborum! Esse quibusdam delectus eligendi! Veniam,
          incidunt pariatur? Dolor consequatur in enim. Possimus illum
          exercitationem fugit dolor nihil odio numquam ab sint temporibus
          voluptatum, eos itaque molestias quis nostrum eius consectetur
          pariatur quam atque. Obcaecati consequatur, quos modi in vero commodi
          nostrum! A vitae nesciunt dolor, blanditiis incidunt nostrum saepe,
          culpa ab expedita beatae reiciendis est quibusdam modi ipsum inventore
          perspiciatis, voluptates corrupti. Deserunt distinctio nisi provident
          odit quia dolor totam laudantium! Rerum blanditiis perspiciatis
          officia repellendus fugiat amet nam explicabo alias molestiae quaerat
          dolor tempora eius deleniti veritatis labore, magnam mollitia repellat
          et delectus provident similique esse illo odit pariatur. Et! Explicabo
          saepe neque exercitationem odio tempore voluptates, nemo consequuntur
          ab reprehenderit, aliquam qui aliquid sequi numquam id dolorum?
          Aspernatur quam perferendis dolorem maiores a corporis voluptas
          exercitationem fugit assumenda repellat? Nisi recusandae, ad mollitia
          repudiandae praesentium enim quisquam dicta magni pariatur
          reprehenderit. Temporibus, nobis fugiat odio atque ex excepturi
          blanditiis autem aspernatur voluptate hic explicabo molestias quo,
          velit itaque nulla. Rerum sit, aut architecto quo vero officiis? Quia
          cum illum, aut rerum quo, quisquam cumque odit blanditiis iure,
          accusantium ratione officiis est corrupti a facilis magnam laboriosam
          sed quis nemo! Mollitia, omnis nisi. Nam alias fugit, nihil voluptas
          numquam nemo ullam neque ipsa, obcaecati illum debitis quia sunt.
          Eaque, officia? Suscipit, eos! Cupiditate qui at aspernatur
          necessitatibus reiciendis perferendis quis!
        </p>
        <Tabs>
          <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
          </TabList>

          <TabPanel>
            <h2>Any content 1</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
};

export default About;
