import EditTopicForm from "@/app/components/EditTopicForm";

const getTopicById = async (id)=> {
    try {
        const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
            cache: "no-store"
        }) 

        if (!res.ok){
            throw new Error("데이터 가져오기 실패")
        }
        return res.json();

    } catch (error) {
        console.log('error: ', error);
    }
  }
const EditTopicPage = async ({ params }) => {
  const { id } = params;
  const {topic} = await getTopicById(id)
  const {title, description} = topic;

  return (
     <EditTopicForm id={id} title={title} description={description}/>
  );
};

export default EditTopicPage;
