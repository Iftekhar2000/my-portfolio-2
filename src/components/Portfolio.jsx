
export default function Portfolio() {
  return (

    <div className="h-screen px-4 py-4">

    <h1 className='mb-4 font-medium text-2xl lg:text-3xl xl:text-4xl'>My Projects</h1>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-4 mt-4">
        {/* Replace the following placeholders with your card components */}
        <div className="bg-gray-200 p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex aperiam, natus placeat voluptatum nulla illum quisquam corrupti quas ratione cupiditate fuga rerum pariatur possimus fugiat veniam suscipit beatae facere debitis.</div>

        <div className="bg-gray-200 p-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus laboriosam, esse natus consequuntur enim ut hic? Voluptatibus et hic laudantium libero quia explicabo, facere consequatur reprehenderit! Qui obcaecati totam cumque.</div>

        <div className="bg-gray-200 p-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est sunt enim optio officiis voluptate dolores quia assumenda voluptatem ad harum natus at nesciunt omnis culpa temporibus eius, quam, fugit accusamus?</div>

        <div className="bg-gray-200 p-4 flex justify-center items-center text-center">
          <p className="text-gray-600 text-lg">Coming Soon...</p>
        </div>


    </div>
</div>

  );
}
