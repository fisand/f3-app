import { useMutation, useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { useCallback, useState } from 'react'

export const Route = createFileRoute('/demo/tanstack-query')({
  component: TanStackQueryDemo,
})

type Todo = {
  id: number
  name: string
}

function TanStackQueryDemo() {
  const { data, refetch } = useQuery<Todo[]>({
    queryKey: ['todos'],
    queryFn: () => fetch('/api/demo-tq-todos').then(res => res.json()),
    initialData: [],
  })

  const { mutate: addTodo } = useMutation({
    mutationFn: (todo: string) =>
      fetch('/api/demo-tq-todos', {
        method: 'POST',
        body: JSON.stringify(todo),
      }).then(res => res.json()),
    onSuccess: () => refetch(),
  })

  const [todo, setTodo] = useState('')

  const submitTodo = useCallback(async () => {
    await addTodo(todo)
    setTodo('')
  }, [addTodo, todo])

  return (
    <div
      className="min-h-screen flex items-center justify-center from-red-900 via-red-800 to-black bg-gradient-to-br p-4 text-white"
      style={{
        backgroundImage:
          'radial-gradient(50% 50% at 80% 20%, #3B021F 0%, #7B1028 60%, #1A000A 100%)',
      }}
    >
      <div className="max-w-2xl w-full border-8 border-black/10 rounded-xl bg-black/50 p-8 shadow-xl backdrop-blur-md">
        <h1 className="mb-4 text-2xl">TanStack Query Todos list</h1>
        <ul className="mb-4 space-y-2">
          {data?.map(t => (
            <li
              key={t.id}
              className="border border-white/20 rounded-lg bg-white/10 p-3 shadow-md backdrop-blur-sm"
            >
              <span className="text-lg text-white">{t.name}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={todo}
            onChange={e => setTodo(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                submitTodo()
              }
            }}
            placeholder="Enter a new todo..."
            className="w-full border border-white/20 rounded-lg bg-white/10 px-4 py-3 text-white backdrop-blur-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-white/60"
          />
          <button
            disabled={todo.trim().length === 0}
            onClick={submitTodo}
            className="rounded-lg bg-blue-500 px-4 py-3 text-white font-bold transition-colors disabled:cursor-not-allowed disabled:bg-blue-500/50 hover:bg-blue-600"
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  )
}
