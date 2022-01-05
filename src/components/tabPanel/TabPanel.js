import React from "react"
import { Tab, Tabs, TabList, TabPanel as TabsPanel } from "react-tabs"

import Tab1 from './Tab1'
import Tab2 from './Tab2'

const TabPanel = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Profile</Tab>
        <Tab>Skills</Tab>
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
