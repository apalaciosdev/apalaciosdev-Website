import React from "react"
import { Tab, Tabs, TabList, TabPanel as TabsPanel } from "react-tabs"
// import "react-tabs/style/react-tabs.css"
import Tab1 from './Tab1'
import Tab2 from './Tab2'

const TabPanel = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Title 1</Tab>
        <Tab>Title 2</Tab>
      </TabList>

      <TabsPanel>
        <Tab1/>
      </TabsPanel>
      <TabsPanel>
        <Tab2/>
      </TabsPanel>
    </Tabs>
  )
}

export default TabPanel;
