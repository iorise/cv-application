import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AiFillGithub, AiFillSave } from "react-icons/ai";
import { BiPencil } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full items-center flex justify-center md:justify-start p-5">
      <Card className="md:w-[50%] w-[90%] h-[150px]">
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="text-4xl items-center flex justify-center">
              CV Generator
            </CardTitle>
            <CardTitle>
              <Link href="https://github.com/iorise" target="_blank">
                <Button>
                  <AiFillGithub size={25} />
                </Button>
              </Link>
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex gap-5 justify-center">
            <Button>
              <AiFillSave />
              Save
            </Button>
            <Button>
              <BiPencil />
              Autofil
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Header;
