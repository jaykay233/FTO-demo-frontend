'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

type ComparisonResult = {
  targetFeature: string;
  comparisonFeature: string;
  equivalence: string;
  reason: string;
}

export default function PatentFTOComparison() {
  const [targetPatent, setTargetPatent] = useState('')
  const [comparisonPatent, setComparisonPatent] = useState('')
  const [results, setResults] = useState<ComparisonResult[]>([])
  const [showResults, setShowResults] = useState(false)

  const handleComparison = () => {
    // 这里应该是实际的专利对比逻辑
    // 为了演示，我们只是创建一些模拟数据
    const mockResults: ComparisonResult[] = [
      { 
        targetFeature: "使用A材料制造部件X",
        comparisonFeature: "使用B材料制造部件X",
        equivalence: "部分等同",
        reason: "虽然材料不同，但都用于制造相同部件，可能具有相似性能"
      },
      { 
        targetFeature: "通过C方法处理数据",
        comparisonFeature: "通过D方法处理数据",
        equivalence: "不等同",
        reason: "处理方法完全不同，可能导致不同的结果"
      },
      { 
        targetFeature: "使用E算法进行计算",
        comparisonFeature: "使用E算法进行计算",
        equivalence: "完全等同",
        reason: "使用了相同的算法"
      },
    ]
    setResults(mockResults)
    setShowResults(true)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">专利FTO对比</h1>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">标的专利</h2>
          <Textarea 
            placeholder="请输入标的专利内容" 
            value={targetPatent}
            onChange={(e) => setTargetPatent(e.target.value)}
            className="w-full h-40"
          />
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-2">比较专利</h2>
          <Textarea 
            placeholder="请输入比较专利内容" 
            value={comparisonPatent}
            onChange={(e) => setComparisonPatent(e.target.value)}
            className="w-full h-40"
          />
        </div>
      </div>
      <div className="text-center mb-4">
        <Button onClick={handleComparison}>进行对比</Button>
      </div>
      {showResults && (
        <div>
          <h2 className="text-lg font-semibold mb-2">对比结果</h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>标的专利技术特征</TableHead>
                <TableHead>对比专利技术特征</TableHead>
                <TableHead>等同性判断</TableHead>
                <TableHead>判断原因</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.targetFeature}</TableCell>
                  <TableCell>{result.comparisonFeature}</TableCell>
                  <TableCell>{result.equivalence}</TableCell>
                  <TableCell>{result.reason}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  )
}
