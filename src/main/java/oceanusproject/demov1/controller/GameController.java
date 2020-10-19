package oceanusproject.demov1.controller;

import oceanusproject.demov1.dto.ScoreDTO;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/game")
@CrossOrigin
public class GameController {
    @PostMapping("/postshark")
    public ResponseEntity postShark(@RequestBody ScoreDTO scoreDTO) {
        //TO DO
        System.out.println(scoreDTO.getScore());
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping("/postmemory")
    public ResponseEntity postMemory(@RequestBody Integer result) {
        //TO DO
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PostMapping("/postpipe")
    public ResponseEntity postPipe(@RequestBody Integer result) {
        //TO DO
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
