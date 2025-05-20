"use client";
import dynamic from "next/dynamic";
import CommandPalette from "./CommandPalette";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";

const MonacoEditor = dynamic(() => import("../components/MonacoEditor"), {
  ssr: false,
});

export default function Section(props: {
  textAlign: string;
  textTitle: string;
  textContent: string;
  tabTitle?: string;
  logoPath?: string;
  defaultLangage?: string;
  sampleCode?: string;
  tips: boolean
}) {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          {props.textAlign == "left" ? (
            <>
              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-gray-700 dark:text-white sm:text-3xl">
                    {props.textTitle}
                  </h2>

                  <p className="mt-4 text-gray-700 dark:text-white">
                    {props.textContent}
                  </p>
                  {props.tips && (
                    <Alert className="mt-2 dark:bg-gray-900">
                      <Info className="h-4 w-4" />
                      <AlertTitle>Useful tip:</AlertTitle>
                      <AlertDescription>
                        Adding a file or folder to a .gitignore file will
                        prevent the said file/folder to be flagged by the Scan
                        Workspace command.
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>

              <div>
                <MonacoEditor
                  tabTitle={props.tabTitle ? props.tabTitle : ""}
                  logoPath={props.logoPath ? props.logoPath : ""}
                  defaultLangage={
                    props.defaultLangage ? props.defaultLangage : ""
                  }
                  sampleCode={props.sampleCode ? props.sampleCode : ""}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                <CommandPalette />
              </div>

              <div>
                <div className="max-w-lg md:max-w-none">
                  <h2 className="text-2xl font-semibold text-gray-700 dark:text-white sm:text-3xl">
                    {props.textTitle}
                  </h2>

                  <p className="mt-4 text-gray-700 dark:text-white">
                    {props.textContent}
                  </p>
                  {props.tips && (
                    <Alert className="mt-2 dark:bg-gray-900">
                      <Info className="h-4 w-4" />
                      <AlertTitle>Title</AlertTitle>
                      <AlertDescription>Content</AlertDescription>
                    </Alert>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
