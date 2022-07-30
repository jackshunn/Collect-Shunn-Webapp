export default async function getData(){
    return {
        user: "Jack",
        lists: [
            {
                title:"Title1",
                items:[
                    {
                        text: "Item1",
                        date: "2022-07-30"
                    }
                ]
            },
            {
                title:"Title2",
                items:[
                    {
                        text: "Item1",
                        date: "2022-07-30"
                    }
                ]
            },
            {
                title:"Title3",
                items:[
                    {
                        text: "Item1",
                        date: "2022-07-30"
                    }
                ]
            }
        ],
    }
}