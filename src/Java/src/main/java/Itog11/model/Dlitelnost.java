package Itog11.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Itog11.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Длительность
 */
@Entity(name = "IISItog11Длительность")
@Table(schema = "public", name = "Длительность")
public class Dlitelnost {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Длительность")
    private Integer длительность;


    public Dlitelnost() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getДлительность() {
      return длительность;
    }

    public void setДлительность(Integer длительность) {
      this.длительность = длительность;
    }


}