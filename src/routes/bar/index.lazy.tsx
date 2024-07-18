import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/bar/')({
    component: Index,
})

function Index() {
    return (
        <div className="p-2">
            <h3>Welcome barrrrrrrrr!</h3>
        </div>
    )
}
