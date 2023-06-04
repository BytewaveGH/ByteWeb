import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Card,
  CardBody
} from "@material-tailwind/react";
 
export default function Tool_Tech() {
  const data = [
    {
      label: "Platforms and Frameworks",
      value: "html",
      desc: ["HTML", "HTML", "HTML", "HTML", "HTML", "HTML","HTML", "HTML", "HTML", "HTML", "HTML", "HTML"],
    },
    {
      label: "Programming Languages",
      value: "react",
      desc: ["React", "React", "React", "React",]
    },
 
    {
      label: "Databases and Servers",
      value: "vue",
      desc: ["Vue", "Vue", "Vue", "Vue"],
    },
 
   
 
];
 
return (
 
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 ">
        <div className="py-10">
            <p className= "flex text-3xl justify-start items-center font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tools and Technologies
        </p>
        </div>
        <Tabs id="custom-animation" value="html" >
            <TabsHeader className="w-full z-0 ">
                {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                    {label}
                </Tab>
                ))}
            </TabsHeader>
            <TabsBody
                animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
                }}
                className="w-full border-4 "
            >
                {data.map(({ value, desc }) => (
                <TabPanel key={value} value={value} className="flex w-full flex-wrap px-2 justify-center ">
                    {desc.map((skills)=>{
                        return (
                            <Card className="mt-6 w-64 h-28 flex mx-5 justify-center items-center ">
                                <CardBody className="flex ">
                                    {skills}
                                </CardBody>
                            </Card>
                        )
                    })}
                    
                </TabPanel>
                ))}
            </TabsBody>
            </Tabs>
    </div>
  ); 
}
 