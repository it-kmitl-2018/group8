import org.jetbrains.ktor.application.Application
import org.jetbrains.ktor.application.install
import org.jetbrains.ktor.features.CallLogging
import org.jetbrains.ktor.features.DefaultHeaders
import org.jetbrains.ktor.gson.GsonSupport
import org.jetbrains.ktor.request.receive
import org.jetbrains.ktor.response.respond
import org.jetbrains.ktor.routing.*

data class Member(val id: String, val name: String, val githubUrl: String, val overview: String)
data class ResponseMessage(val message: String)

fun Application.main(){
    val data = initData()

    install(GsonSupport)
    install(DefaultHeaders)
    install(CallLogging)
    install(Routing){
        get("/api/members"){
            call.respond(data)
        }

        get("/api/members/{id}"){
            val id = call.parameters["id"]
            call.respond(data.filter { it.id == id }[0])
        }

        post("/api/members"){
            val movie = call.receive<Member>()
            call.respond(ResponseMessage("$movie has been created!"))
        }

        put("/api/members/{id}"){
            val id = call.parameters["id"]
            call.respond(ResponseMessage("$id has been updated!"))
        }

        delete("/api/members/{id}"){
            val id = call.parameters["id"]
            call.respond(ResponseMessage("$id has been deleted!"))
        }

    }
}

fun initData(): List<Member>{
    return listOf(
            Member("1", "Natnicha", "https://github.com/bboomber", "ณัฐณิชา จิตต์รัตนอรัญ 58070035 "),
            Member("2", "Thasorn", "https://github.com/thasorn", "นายทสร ฉลองวรชัย 58070047"),
            Member("3", "Nonthanund", "https://github.com/Ben5497", "นายนนทนันท์ จงทวีผล 58070067"),
            Member("4", "Panithi", "https://github.com/pamai", "นายปณิธิ สินาคมมาศ 58070080."),
            Member("5", "Montita", "https://github.com/montitawi", "นางสาวมณฑิตา วิเชียรฉาย 58070114")

    )
}
