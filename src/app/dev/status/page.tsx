import { useEffect, useState } from "react";
import axios from "axios";
import { TbCloudDataConnection } from "react-icons/tb";
import { MdOutlineTimeline } from "react-icons/md";
import { ImConnection } from "react-icons/im";
import { HiServerStack } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { IoInformationCircleSharp } from "react-icons/io5";

interface ShardData {
    shard_id: number;
    is_ready: boolean;
    server_count: number;
    cached_user_count: number;
    uptime: number;
    latency: number;
    last_updated: number;
}

export default function Status() {
    // const [shards, setShards] = useState<ShardData[]>([]);

    // useEffect(() => {
    //     const fetchShardInfo = async () => {
    //         try {
    //             const response = await axios.get<{ shards: ShardData[] }>(
    //                 "https://bot.resent.dev/v1/shards"
    //             );
    //             setShards(response.data.shards);
    //         } catch (error) {
    //             console.error("Failed to fetch shard information:", error);
    //         }
    //     };

    //     fetchShardInfo();

    //     const intervalId = setInterval(fetchShardInfo, 5000);

    //     return () => clearInterval(intervalId);
    // }, []);

    return (
        <main className="mt-20 mx-10">
            <section className="max-w-5xl mx-auto w-full pb-20 pt-20">
                <div className="flex flex-row justify-between gap-20">
                    <div className="flex flex-row items-center gap-2 text-white">
                        <div className="flex flex-row justify-center items-center w-12 h-12 bg-loti-200 rounded-full">
                            <TbCloudDataConnection className="w-6 h-6" />
                        </div>
                        <h1 className="text-3xl font-bold">Shards</h1>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mt-10 lg:flex-row">
                    {/* {shards.map((shard) => (
                        <Shard
                            key={shard.shard_id}
                            shard={shard.shard_id.toString()}
                            uptime={shard.uptime.toString()}
                            latency={shard.latency.toString()}
                            servers={shard.server_count.toString()}
                            users={shard.cached_user_count.toString()}
                        />
                    ))} */}
                    <Shard
                        shard="0"
                        uptime="N/A"
                        latency="N/A"
                        servers="N/A"
                        users="N/A"
                    />
                </div>
            </section>
        </main>
    );
}

const Shard = ({
    shard,
    uptime,
    latency,
    servers,
    users,
}: {
    shard: string;
    uptime: string;
    latency: string;
    servers: string;
    users: string;
}) => {
    return (
        <div className="flex flex-col py-6 rounded-3xl bg-loti-200 border transition-shadow duration-200 ease-linear border-loti-300 text-white">
            <div className="h-full flex flex-col justify-between">
                <div className="px-6">
                    <div className="flex items-start justify-between gap-x-4">
                        <div className="flex items-center gap-2">
                            <p className="text-xl font-semibold inline-flex items-center">
                                Shard {shard}
                            </p>
                        </div>
                        <div className="flex justify-center items-center bg-loti-400 border border-loti-300 rounded-xl px-2 py-1 gap-2">
                            <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                            <p className="text-sm font-semibold inline-flex items-center text-green-500">
                                Operational
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 items-center">
                        <IoInformationCircleSharp className="text-loti-600" />
                        <p className="text-sm text-loti-600">
                            Refresh For Updates
                        </p>
                    </div>
                </div>
                <hr className="border-t border-loti-300 w-full my-4" />
                <div className="grid grid-cols-2 gap-4 px-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-md text-loti-600">Uptime</p>
                        <div className="flex flex-row gap-2 items-center">
                            <MdOutlineTimeline className="text-loti-600" />
                            <p className="text-md font-semibold">{uptime}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-md text-loti-600">Latency</p>
                        <div className="flex flex-row gap-2 items-center">
                            <ImConnection className="text-loti-600" />
                            <p className="text-md font-semibold">{latency}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-md text-loti-600">Servers</p>
                        <div className="flex flex-row gap-2 items-center">
                            <HiServerStack className="text-loti-600" />
                            <p className="text-md font-semibold">{servers}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="text-md text-loti-600">Users</p>
                        <div className="flex flex-row gap-2 items-center">
                            <FaUsers className="text-loti-600" />
                            <p className="text-md font-semibold">{users}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};