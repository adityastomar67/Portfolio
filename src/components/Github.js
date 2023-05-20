import React from "react";
import GitHubCalendar from "react-github-calendar";

function Github() {
    return (
        <div>
            <h2 className='font-bold pb-6'>Days I Code</h2>
            <div className="flex justify-center items-center">
                <GitHubCalendar
                    username="adityastomar67"
                    blockSize={20}
                    blockMargin={8}
                    color="#516fdb"
                    fontSize={16}
                />
            </div>
        </div>
    );
}

export default Github;