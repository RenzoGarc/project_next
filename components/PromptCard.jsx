"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { BookOpenIcon } from "@heroicons/react/24/outline";

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div>
      <Card className="mt-6 w-96">
        <CardBody>
          <div className='prompt_card'>
            <div className='flex justify-between items-start gap-5'>
              <div
                className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
                onClick={handleProfileClick}
              >
                <Image
                  src={post.creator.image}
                  alt='user_image'
                  width={40}
                  height={40}
                  className='rounded-full object-contain'
                />

                <div className='flex flex-col'>
                  <h3 className='font-satoshi font-semibold text-gray-900'>
                    {post.creator.username}
                  </h3>
                  <p className='font-inter text-sm text-gray-500'>
                    {post.creator.email}
                  </p>
                </div>
              </div>

              <div className='copy_btn' onClick={handleCopy}>
                <Image
                  src={
                    copied === post.prompt
                      ? "/assets/icons/tick.svg"
                      : "/assets/icons/copy.svg"
                  }
                  alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
                  width={12}
                  height={12}
                />
              </div>
            </div>

            <p className='my-4 font-satoshi text-sm text-gray-700'>{post.prompt}</p>
            <p
              className='font-inter text-sm blue_gradient cursor-pointer'
              onClick={() => handleTagClick && handleTagClick(post.tag)}
            >
              #{post.tag}
            </p>
          </div>
        </CardBody>
        {session?.user.id === post.creator._id && pathName === "/profile" && ( <CardFooter className="pt-0">
          <Button size="sm" color="orange" variant="text" className="flex items-center gap-2" onClick={handleEdit}>
            <BookOpenIcon strokeWidth={2} className="w-4 h-4" />
            Editar            
          </Button>
          <Button size="sm" color="red" variant="text" className="flex items-center gap-2" onClick={handleDelete}>
            <TrashIcon strokeWidth={2} className="w-4 h-4" />
            Eliminar 
          </Button>
        </CardFooter>
        )}
      </Card>
    </div>
  );
};

export default PromptCard;